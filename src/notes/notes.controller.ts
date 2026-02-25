import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateNoteDto } from './DTO/create-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService : NotesService){}

    @Post()
    createNote(@Body() createNoteDto : CreateNoteDto){
        return this.notesService.createNote(createNoteDto);
    }

    @Get()
    findAll(@Query() query: any){
        return this.notesService.findAll(query);
    }
}

