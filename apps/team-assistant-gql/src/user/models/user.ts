import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TeamConnection } from 'src/team/models/team-connection';

@ObjectType({ description: 'User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field(() => TeamConnection, { nullable: true })
  teams?: TeamConnection;
}
