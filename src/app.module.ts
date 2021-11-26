import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { NotesModule } from './modules/notes/notes.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [NotesModule, DatabaseModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
