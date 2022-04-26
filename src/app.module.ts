import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

config();
@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    CategoriesModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
