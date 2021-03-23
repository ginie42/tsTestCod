import { NextFunction, Request, Response } from "express";
import { BoardService} from "../service/boardService"

export default class MainController {

    private BoardService = new BoardService();

    async renderMain(req: Request, res: Response, next: NextFunction) {

        var idx = req.body.id;
        var mode = "regist";
        
        if(req.body.id && req.body.id >0){mode = "modify";}
        var item = {
            'subject' : req.body.subject,
            'content' : req.body.content
        };

        if(mode === "modify"){
            await this.BoardService.editBoard(idx,item);
        } else{
            await this.BoardService.insertData(item);
        }
        
        return { redirect : '/' };
    }

    async renderReload(req: Request, res: Response, next: NextFunction) {
        const boardList = await this.BoardService.getBoardList();
        
        return {render :'index', total: boardList.length, data : boardList}
    }

    async renderGetBbs(req: Request, res: Response, next: NextFunction) {
        console.log(req.params.id);

        const board = await this.BoardService.getBoard(Number(req.params.id));
        console.log(board);
        return {render: 'regBbs', data: board};
    }

    async renderDelBbs(req: Request, res: Response, next: NextFunction){
        
        try {
            console.log("delete");
            await this.BoardService.deleteBoard(Number(req.params.id));
            return {redirect: '/'}
        } catch (error) {
            console.error(error);
            next(error);
        }
       
    }

    async renderRegBbs(req: Request, res: Response, next: NextFunction) {
        
        return  {render :'regBbs',data:""}
        
    }

}