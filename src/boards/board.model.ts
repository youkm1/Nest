// export interface Board{
//     id:string;
//     title:string;
//     description: string;
//     status:  BoardStatus;   //비공개냐 공개글이냐
// } 

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}