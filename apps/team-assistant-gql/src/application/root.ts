import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ViewerModule } from 'src/viewer/viewer-module';

const { NODE_ENV } = process.env;

@Module({
  imports: [
    ViewerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: NODE_ENV !== 'production',
      introspection: NODE_ENV !== 'production',
    }),
  ],
})
export class AppModule {}
