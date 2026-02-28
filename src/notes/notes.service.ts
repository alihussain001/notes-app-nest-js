import { filter } from 'rxjs';
import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './schemas/notes.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './DTO/create-note.dto';
import { UpdateNoteDto } from './DTO/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name)
    private noteModel: Model<NoteDocument>,
  ) {}

  async createNote(createNoteDto: CreateNoteDto) {
    const note = new this.noteModel(createNoteDto);
    return note.save();
  }

  async findAll(query: any) {
    const { category, search, page = 1, limit = 10 } = query;

    const filter: any = {};

    if (category) {
      filter.category = category;
    }
    if (search) {
      filter.search = search;
    }

    const skip = (page - 1) * 10;

    const notes = await this.noteModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await this.noteModel.countDocuments(filter);

    return {
      total,
      page,
      limit,
      notes,
    };
  }

  async updateNote(id: string, updateNoteDto: UpdateNoteDto) {

    const updatedNote = await this.noteModel.findByIdAndUpdate(id, updateNoteDto, {
      new: true,
    });


    if (!updatedNote) throw new NotFoundException('Note not Found');
    return updatedNote;
  }
}
