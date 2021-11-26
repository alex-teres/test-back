import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Note } from './model/notes.entity';

@Module({
  providers: [
    NotesService,
    {
      provide: 'NOTES_REPOSITORY',
      useValue: Note,
    },
  ],
  controllers: [NotesController],
})
export class NotesModule {}
