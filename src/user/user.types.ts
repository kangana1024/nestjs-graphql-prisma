import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType('User')
export class UserType {
  @Field(() => String, { nullable: false })
  id: string

  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType('CreateUserInput')
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType('UsersWhereInput')
export class UsersWhereInput {
  @Field()
  skip?: number

  @Field()
  take?: number

  @Field()
  cursor?: Prisma.UserWhereUniqueInput

  @Field()
  where?: Prisma.UserWhereInput

  // @Field()
  // orderBy?: Prisma.UserOrderByInput

}