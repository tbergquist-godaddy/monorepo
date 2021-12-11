import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'The team model' })
export class Team {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;
}
