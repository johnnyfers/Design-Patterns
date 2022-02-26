import { Handler } from "./Handler";
import { Request } from "./Request";
import { Response } from "./Response";

export class LogHandler extends Handler {
    handle(request: Request, response: Response): void {
        console.log(request, response)
        this.next?.handle(request, response)
    }
}