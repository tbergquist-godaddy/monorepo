import { Field, ArgsType, Int } from '@nestjs/graphql';
import { ConnectionCursor } from 'graphql-relay';

@ArgsType()
export class GetConnectionArgs {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => Int, { nullable: true })
  last?: number;

  @Field({ nullable: true })
  before?: ConnectionCursor;

  @Field({ nullable: true })
  after?: ConnectionCursor;
}
