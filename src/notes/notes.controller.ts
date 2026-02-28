import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateNoteDto } from './DTO/create-note.dto';
import { NotesService } from './notes.service';
import { UpdateNoteDto } from './DTO/update-note.dto';

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

    @Patch(':id')
    updateNote(@Param('id') id: string, @Body() dto: UpdateNoteDto){
        return this.notesService.updateNote(id, dto);
    }

    @Delete(':id')
    deleteNote(@Param('id') id: string){
        return this.notesService.deleteNote(id);
    }
}

