import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
require('dotenv').config();
export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization || '';
    let jwtPayload;
    //Try to validate the token and get data
    try {
        const key = process.env.secret;
        jwtPayload = jwt.verify(token, JSON.stringify(key));
        res.locals.jwtPayload = jwtPayload;
        next();
    } catch (error) {
        console.log(error)
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send('You are not authorized');
        return;
    }
}