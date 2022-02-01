import { AbstractFactory } from "./AbstractFactory";
import { Button } from "./Button";
import { Label } from "./Label";
import { DarkButton } from "./DarkButton";
import { DarkLabel } from "./DarkLabel";

export class DarkThemeFactory implements AbstractFactory {
    createLabel(): Label {
        return new DarkLabel()
    }
    createButton(): Button {
        return new DarkButton()
    }
    
}