import { ObjectType } from '@nestjs/graphql';
import { GeneralError } from 'src/common/interfaces/error';

@ObjectType({
  implements: () => GeneralError,
})
export class CreateUserError implements GeneralError {
  message: string;
  code: string;
}
