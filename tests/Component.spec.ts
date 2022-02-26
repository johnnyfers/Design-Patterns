// observer
import { InputText } from "../src/behavioral/observer/InputText"
import { Label } from "../src/behavioral/observer/Label"

test('should write a text input and update its label', () => {
    const inputText = new InputText('country')
    const label = new Label('country: {{country}}')
    inputText.register(label)
    inputText.setValue('brazil')
    expect(label.value).toBe('country: brazil')
})