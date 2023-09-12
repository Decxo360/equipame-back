import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePostDto {

    @IsString()
    @MaxLength(250)
    title:string;

    @IsString()
    description:string;

    @IsNumber()
    @MaxLength(1)
    itsCommentable:number;

}
