import { NextFunction, Request, Response } from "express";
import { BoardService} from "../service/boardService"

export default class MainController {

    private BoardService = new BoardService();

    async renderMain(req: Request, res: Response, next: NextFunction) {
    
        console.log('MainController');
        var item = {
            'subject' : req.body.subject,
            'content' : req.body.content
        };

        this.BoardService.insertData(item);
        // console.log('boardData  : ', boardData.getDataValue('id'))
        return { render: 'index' };
    } // ,data : [boardData]

    async renderMain2(req: Request, res: Response, next: NextFunction) {
        console.log('renderMain2')

        const boardList = await this.BoardService.getBoardList();
        console.log(boardList);
        return {render :'index', data : [boardList]}
    }

}