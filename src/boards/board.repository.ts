import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BoardRepository extends Repository<Board> {
    constructor(dataSource:DataSource) {
        super(Board, dataSource.createEntityManager());
    }

   
}

