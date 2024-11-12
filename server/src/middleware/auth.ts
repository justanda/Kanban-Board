import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string;
}

// TODO: verify the token exists and add the user data to the request object
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    const secrectKey = process.env.JWT_SECRET || "";

    jwt.verify(token, secrectKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401);
  }
};
