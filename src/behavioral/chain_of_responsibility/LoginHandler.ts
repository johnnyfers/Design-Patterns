import { Handler } from "./Handler";
import { Request } from "./Request";
import { Response } from "./Response";

export class LoginHandler extends Handler {
    handle(request: Request, response: Response) {
        if (request.body.username === 'test' && request.body.password === '123') {
            response.body = {
                token: '123456'
            }
        }
    }
}