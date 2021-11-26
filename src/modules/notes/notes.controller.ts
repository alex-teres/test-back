import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NotesService } from './notes.service';
import { Note } from './model/notes.entity';
import { CreateNoteDto } from './model/create-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  async findAll() {
    return await this.noteService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() note: CreateNoteDto): Promise<Note> {
    return await this.noteService.create(note);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() note: CreateNoteDto,
  ): Promise<Note> {
    const { numberOfAffectedRows, updatedNote } = await this.noteService.update(
      id,
      note,
    );

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Note doesn't exist");
    }

    return updatedNote;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.noteService.delete(id);
    if (deleted === 0) {
      throw new NotFoundException("This Note doesn't exist");
    }
    return deleted;
  }
}
