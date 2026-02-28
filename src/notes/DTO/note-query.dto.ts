import { IsEnum, IsInt, IsOptional, IsString, Min } from "class-validator";
import { Category } from "../schemas/notes.schema";
import { Type } from "class-transformer";

export class NoteQueryDto{
    @IsOptional()
    @IsString()
    search!:string;

    @IsOptional()
    @IsEnum(Category)
    category!: Category;

   @IsOptional()
   @Type(() => Number)
   @IsInt()
   @Min(1)
   page: number = 1;

   @IsOptional()
   @Type(() => Number)
   @IsInt()
   @Min(1)
   limit: number = 1;

}