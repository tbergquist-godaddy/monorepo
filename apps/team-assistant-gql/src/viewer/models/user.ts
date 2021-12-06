import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;
}
