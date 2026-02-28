import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum Category{
    PERSONAL = "personal",
     WORK = "work",
    STUDY = "study"
}

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