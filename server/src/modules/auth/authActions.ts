import type { RequestHandler } from "express";
import userRepository from "../user/userRepository";
import { StatusCodes } from "http-status-codes";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const logIn: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);

    if (!user) {
      res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);

    if (!verified) {
      return res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }

    const { password, ...userWithoutPassword } = user;

    const myPayload: MyPayload = {
      sub: user.id.toString(),
    };

    const token = await jwt.sign(myPayload, process.env.APP_SECRET as string, {
      expiresIn: "12h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // ⚠️ true en production (HTTPS)
      maxAge: 1000 * 60 * 60 * 12,
    });

    res.json(userWithoutPassword);
  } catch (err) {
    next(err);
  }
};

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next();
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET as string) as MyPayload;

    next();
  } catch (err) {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
};

const requireAuth: RequestHandler = (req, res, next) => {
  if (!req.auth || !req.auth.sub) {
    return res.sendStatus(StatusCodes.UNAUTHORIZED);
  }

  next();
};

const logout: RequestHandler = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true en production
  });

  res.sendStatus(StatusCodes.NO_CONTENT);
};

export default { logIn, verifyToken, requireAuth, logout };
