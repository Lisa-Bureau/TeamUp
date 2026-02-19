import type { RequestHandler } from "express";
import sportRepository from "./sportRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const sportName = req.query.name as string;

    const sports = await sportRepository.readAllBy(sportName);

    res.json(sports);
  } catch (err) {
    next(err);
  }
};

export default { browse };
