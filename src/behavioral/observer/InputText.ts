import { Observable } from "./Observable"

export class InputText extends Observable{
    name: string
    value: string

    constructor(name: string){
        super()
        this.name = name
        this.value = ''
    }

    setValue(value: string){
        this.value = value
        this.notifyAll()
    }

    getName(): string {
        return this.name
    }
    
    getValue(): string {
        return this.value
    }
}