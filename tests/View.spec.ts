import { DarkThemeFactory } from "../src/creational/abstract_factory/DarkThemeFactory"
import { LightThemeFactory } from "../src/creational/abstract_factory/LightThemeFactory"
import { View } from "../src/creational/abstract_factory/View"

test('should be able to create a light theme GUI', () => {
    const lightThemeFactory = new LightThemeFactory()
    const view = new View(lightThemeFactory)
    expect(view.label.color).toBe('black')
    expect(view.button.color).toBe('white')
    expect(view.button.backgroundColor).toBe('blue')
})

test('should be able to create a dark theme GUI', () => {
    const darkThemeFactory = new DarkThemeFactory()
    const view = new View(darkThemeFactory)
    expect(view.label.color).toBe('white')
    expect(view.button.color).toBe('white')
    expect(view.button.backgroundColor).toBe('black')
})