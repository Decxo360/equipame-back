import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(2)
    name:string;

    @IsString()
    @MinLength(2)
    lastname:string;

    @IsString()
    @MinLength(2)
    middlename:string;

    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    password:string;

    @IsString()
    @MinLength(2)
    @IsEmail()
    email:string;

    @IsInt()
    @IsPositive()
    age:number;

}
