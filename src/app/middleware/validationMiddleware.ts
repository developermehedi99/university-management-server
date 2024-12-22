import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';

//zod as middleware
const validationRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //validation check if all right
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validationRequest;
