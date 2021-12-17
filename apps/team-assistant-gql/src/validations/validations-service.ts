import { Injectable } from '@nestjs/common';
import * as joi from 'joi';

@Injectable()
export class ValidationsService {
  isValidEmail(email: string): boolean {
    const schema = joi.string().email();
    const res = schema.validate(email);

    return res.error == null;
  }
}
