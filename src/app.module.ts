import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      formatError: (error) => {
        return {
          message: error.message,
          code: error.extensions.code,
          locations: error.locations,
          path: error.path,
        };
      },
    }),
    UserModule,
    PostModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
