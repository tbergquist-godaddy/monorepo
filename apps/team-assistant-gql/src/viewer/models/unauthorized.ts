import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Model returned for not authorized user' })
export class Unauthorized {
  @Field()
  reason: string;
}
