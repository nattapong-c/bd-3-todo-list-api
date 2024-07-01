import { IsString } from "class-validator";

export class TodoCreateDto {
    @IsString()
    text: string;
}