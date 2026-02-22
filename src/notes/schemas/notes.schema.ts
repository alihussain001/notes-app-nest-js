import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export  type NoteDocument = Note & Document;

@Schema({timestamps: true})
export class Note{
    @Prop({required: true})
    title!: string;

    @Prop({required:true})
    content!: string;

    @Prop({required: true})
    category!: string
}

export const NoteSchema = SchemaFactory.createForClass(Note);