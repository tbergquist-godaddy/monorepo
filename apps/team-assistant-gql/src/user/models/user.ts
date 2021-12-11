import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Team } from 'src/team/models/team-model';

@ObjectType({ description: 'User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field(() => [Team], { nullable: true })
  teams?: Team[];
}
