import { Request } from './Request'
import { Response } from './Response'

export abstract class Handler {
    next: Handler | undefined
    
    abstract handle(request: Request, response: Response): void

    setNext(handler: Handler) {
        this.next = handler
    }
}