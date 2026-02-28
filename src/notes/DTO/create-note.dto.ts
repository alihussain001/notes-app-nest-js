import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category } from "./update-note.dto";

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