import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category } from "../schemas/notes.schema";

export class CreateNoteDto{
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;

    @IsEnum(Category)
    @IsNotEmpty()
    category!: Category;
}