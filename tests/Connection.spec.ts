import { Connection } from "../src/creational/singleton/Connection"

test('should always connect in the same instance', () => {
    const connection1 = Connection.getInstance()
    const connection2 = Connection.getInstance()
    expect(connection1.id).toBe(connection2.id)
})