import { IsNotEmpty, IsString } from "class-validator";

export class CreateNoteDto{
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    contnet!: string;

    @IsString()
    @IsNotEmpty()
    category!: string;
}