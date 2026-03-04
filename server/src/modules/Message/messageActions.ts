import type { RequestHandler } from "express";
import LongPollManager from "../../services/longPolling";
import { StatusCodes } from "http-status-codes";
import messageRepository from "./messageRepository";

const browse: RequestHandler = async (req, res, next) => {
  const userId = Number(req.auth.sub);

  const activityId = Number(req.query.activityId);

  try {
    const [messages] = await messageRepository.read(userId, activityId);

    res.status(StatusCodes.OK).json(messages);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const { userId, activityId, content } = req.body;

  try {
    const [result] = await messageRepository.create(
      userId,
      activityId,
      content,
    );

    if (result.affectedRows === 0) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Message Cannot be created" });
    }

    const [message] = await messageRepository.readSingle(result.insertId);
    const newMessage = message[0];

    LongPollManager.notifyWaiting(activityId.toString(), newMessage as Message);

    res
      .status(StatusCodes.CREATED)
      .json({ message: "Message Created", result });
  } catch (err) {
    next(err);
  }
};

const poll: RequestHandler = async (req, res) => {
  const activityId = req.query.activityId as string;
  let timeoutId: NodeJS.Timeout | null = null;
  let responseSent = false;

  const sendResponse = (messages: Message[]) => {
    if (responseSent) {
      return;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    responseSent = true;

    res.json({ messages });
  };

  LongPollManager.addWaiting(activityId, sendResponse);

  timeoutId = setTimeout(() => {
    LongPollManager.removeWaiting(activityId, sendResponse);
    res.json({ messages: [] });
  }, 25000);

  req.on("close", () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    LongPollManager.removeWaiting(activityId, sendResponse);
  });
};

const addLike: RequestHandler = async (req, res, next) => {
  try {
    const { messageId, userId } = req.body;

    const inserted = await messageRepository.createLike(messageId, userId);

    if (!inserted) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ error: "User already liked this message" });
      return;
    }

    const updatedCount = await messageRepository.updateLikeCount(messageId);

    if (!updatedCount) {
      res
        .status(StatusCodes.CREATED)
        .json({ error: "Like count is not updated", success: false });
      return;
    }

    res.status(StatusCodes.CREATED).json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const deleteMessage: RequestHandler = async (req, res, next) => {
  const { userId, messageId } = req.body;

  const [deleteResult] = await messageRepository.delete(userId, messageId);

  if (deleteResult.affectedRows === 0) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Message not found" });
    return;
  }

  res.status(StatusCodes.OK).json({ success: true });
};

export default { add, browse, poll, addLike, deleteMessage };
