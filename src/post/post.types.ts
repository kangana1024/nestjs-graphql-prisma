import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Post')
export class Post {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  published: boolean;
}