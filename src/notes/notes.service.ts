import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './schemas/notes.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './DTO/create-note.dto';

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(Note.name)
        private noteModel: Model<NoteDocument>,
    ){}

    async createNote(createNoteDto:CreateNoteDto){
        const note = new this.noteModel(createNoteDto);
        return note.save();
    }

    
}
