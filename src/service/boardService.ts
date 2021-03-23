import Board from "../model/data/board";
import sequelize from 'sequelize';

export class BoardService{

    /**
     * POST 게시물 등록
     * @param insertData insert data subject, content
     */
   public async insertData(insertData:any): Promise<void>{

        await Board.create({
            subject: insertData.subject,
            content: insertData.content
        });
   }

   /**
    * GET 게시물 조회
    * @param boardNum 조회할 게시물 인덱스
    * @returns 조회된 게시물
    */
    public async getBoard(boardNum:number): Promise<Board> {
        const board = await Board.findByPk(boardNum);
        return board;
    }
 
   /**
    * GET 게시물리스트 조회
    * @returns 게시물리스트
    */
   public async getBoardList(): Promise<Board[]>{
        
       const boardData = await Board.findAll({order: [['createdAt','desc']]});

       return boardData;
   }

   /**
    * PUT 게시물 수정
    * @param boardNum 수정할 게시물 인덱스
    * @param updateData 수정한 게시물 정보
    */
   public async editBoard(boardNum:number, updateData:any): Promise<void>{
    
        await Board.update({
            subject: updateData.subject,
            content: updateData.content
        },
        {
            where: {id: boardNum}
        }
        );

   }

   /**
    * DELETE 게시물 삭제
    * @param boardNum 삭제할 게시물 인덱스
    */
   public async deleteBoard(boardNum:number): Promise<void> {
       await Board.destroy({where:{id:boardNum}});
   }

}
