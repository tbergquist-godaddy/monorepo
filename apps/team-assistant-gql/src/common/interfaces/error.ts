import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class GeneralError {
  @Field()
  message: string;

  @Field()
  code: string;
}
