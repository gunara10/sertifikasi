import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../config/database.module'; // optional, DatabaseModule sudah @Global

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // <-- penting untuk AuthModule
})
export class UsersModule {}
