import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Category } from "../schemas/notes.schema";



export class UpdateNoteDto{
    @IsOptional()
    @IsString()
    title!: string;

    @IsString()
    @IsOptional()
    content!: string;

    @IsOptional()
    @IsEnum(Category)
    category!: Category;
}