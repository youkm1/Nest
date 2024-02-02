import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { identity } from 'rxjs';
import { IsNotEmpty } from 'class-validator';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardService:BoardsService){}
    // //GET POST PUT DELETE

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto:CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }


    @Get(':/id')
    getBoardById(@Param('id') id:number):Promise<Board>{
        return this.boardService.getBoardById(id);

    }
    // @Get('/get')
    // getAllBoard():Board[]{
    //     return this.boardService.getAllBoards();
    // }

    // @Post('/post')
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto:CreateBoardDto

    // ): Board{
    //     return this.boardService.createBoard(createBoardDto);
    // }

    // //this -> localhost:5000?id=okfodak
    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{
    //     return this.boardService.getBoardById(id)
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string):void{
    //     this.boardService.deleteBoard(id);
    // }

    // @Patch("/:id/status")
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status',BoardStatusValidationPipe) status:BoardStatus
    // ) {
    //     return this.boardService.updateBoardStatus(id,status);
    // }
    
}
