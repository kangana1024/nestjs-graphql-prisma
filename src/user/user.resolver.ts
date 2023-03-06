import { ForbiddenException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { UserService } from "./user.service";
import { CreateUserInput, UserType, UsersWhereInput } from "./user.types";

@Resolver(() => UserType)
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) { }

  @Query(() => [UserType])
  users(
    @Args('data') data: UsersWhereInput
  ) {
    const { skip, take } = data
    try {
      return this.userService.users({ skip, take })
    } catch (error) {
      throw new ForbiddenException(error.message)
    }
  }

  @Mutation(() => UserType)
  createUser(
    @Args('data') data: CreateUserInput
  ) {
    try {
      return this.userService.createUser(data)
    } catch (error) {
      throw new ForbiddenException(error.message)
    }
  }
}