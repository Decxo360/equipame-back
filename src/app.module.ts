import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3307,
      username:"admin",
      password:"root",
      database:"db_crud",
      autoLoadEntities: true,
      synchronize:true
    }),
    ProductsModule,
    UsersModule,
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
