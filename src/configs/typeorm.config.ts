import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'pstgres',
    database:'board-app',
    entities:[__dirname + '/../**/*.entitiy.{js,ts}'],
    synchronize: true,
    autoLoadEntities:true

}