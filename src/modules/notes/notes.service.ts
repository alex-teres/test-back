import { Injectable, Inject } from '@nestjs/common';
import { CreateNoteDto } from './model/create-note.dto';
import { Note } from './model/notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @Inject('NOTES_REPOSITORY')
    private noteRepository: typeof Note,
  ) {}

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteRepository.create(createNoteDto);
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.findAll<Note>();
  }

  async delete(id) {
    return this.noteRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedNote]] =
      await this.noteRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedNote };
  }
}
