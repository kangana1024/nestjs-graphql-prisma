import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(() => String, { nullable: false })
  id: string;

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
  skip?: number;

  @Field()
  take?: number;

  // @Field(() => Prisma.UserWhereUniqueInput, { nullable: true })
  // cursor?: Prisma.UserWhereUniqueInput

  // @Field(() => Prisma.UserWhereInput, { nullable: true })
  // where?: Prisma.UserWhereInput

  // @Field()
  // orderBy?: Prisma.UserOrderByInput
}
