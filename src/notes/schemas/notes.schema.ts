import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export  type NoteDocument = Note & Document;

export enum Category{
    PERSONAL = "personal",
    WORK = "work",
    STUDY = "study",
}

@Schema({timestamps: true})
export class Note{
    @Prop({required: true})
    title!: string;

    @Prop({required:true})
    content!: string;

    @Prop({required: true, enum:Category})
    category!: string
}

export const NoteSchema = SchemaFactory.createForClass(Note);