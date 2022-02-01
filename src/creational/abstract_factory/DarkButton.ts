import { Button } from "./Button";
import { Label } from "./Label";

export class DarkButton implements Button {
    color: string
    backgroundColor: string

    constructor (){
        this.color = 'white'
        this.backgroundColor = 'black'
    }
}