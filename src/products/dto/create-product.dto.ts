import { IsInt, IsString } from "class-validator";

export class CreateProductDto {
    
    @IsInt()
    category:number;
    @IsInt()
    amount:number;
    @IsString()
    name:string;
    @IsString()
    description:string;
    @IsInt()
    rentPrice:number

}
