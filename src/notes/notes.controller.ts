import { Body, Controller, Post } from '@nestjs/common';
import { CreateNoteDto } from './DTO/create-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService : NotesService){}

    @Post()
    createNot(@Body() createNoteDto : CreateNoteDto){
        return this.notesService.createNote(createNoteDto);
    }
}
