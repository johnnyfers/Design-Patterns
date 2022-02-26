import { Observer } from "./Observer"

export abstract class Observable {
    observers: Observer[]
    
    constructor(){
        this.observers = []
    }

    register(observer: Observer){
        this.observers.push(observer)
    }

    notifyAll(){
        this.observers.forEach((observer)=>{
            observer.notify(this.getName(), this.getValue())
        })
    }

    abstract getName(): string

    abstract getValue(): string

}