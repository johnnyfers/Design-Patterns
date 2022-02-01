import { Button } from "./Button";
import { Label } from "./Label";

export class LightButton implements Button {
    color: string
    backgroundColor: string

    constructor (){
        this.color = 'white'
        this.backgroundColor = 'blue'
    }
}