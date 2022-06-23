import { Request, Response } from "express";
import Controller from "./Controller";

class MainController extends Controller {

    index (req: Request, res: Response): void {
        res.send('index Page');
    }
}

export default new MainController();