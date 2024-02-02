import { IsNotEmpty } from "class-validator";

//dto => CRUD 기능
export class CreateBoardDto {
    @IsNotEmpty()
    title:string;
    
    @IsNotEmpty()
    description:string;
}