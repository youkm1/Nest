import { Injectable, NotFoundException, Param } from '@nestjs/common';

import {  BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ){

    }

    // getAllBoards():Board[] {
    //     return this.boards;
    // }
    // createBoard(createBoardDto:CreateBoardDto){
    //     const {title,description} = createBoardDto;
        
    //     const board:Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board;
    // }
    async createBoard(createBoardDto:CreateBoardDto): Promise<Board> {
        const {title, description} = createBoardDto;

        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        })
        
        await this.boardRepository.save(board);
        return board;
    }

    async getBoardById(id:number):Promise<Board>{
        const found = await this.boardRepository.findOneBy({id});

        if(!found) {
            throw new NotFoundException('cant find board with id ${i ');
        }

        return found;
    }
    // getBoardById(id:string):Board{
    //     const found = this.boards.find((board) => board.id === id);
    //     if(!found){
    //         throw new NotFoundException('Cant find id ${id}');
    //     }
    //     return found;
    // }

    // deleteBoard(id:string):void{
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board)=>board.id !== found.id);
    // }

    // updateBoardStatus(id:string, status:BoardStatus):Board{
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }

}
