import Board from "../model/data/board";
import sequelize from 'sequelize';

export class BoardService{
   public async insertData(data:any): Promise<void>{

        console.log(data);

        await Board.create({
            subject: data.subject,
            content: data.content
        });

   }

   public async getBoardList(): Promise<Board[]>{
        
       const boardData = await Board.findAll();

       return boardData;
   }

}
