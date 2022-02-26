// mediator
import { ChatRoom } from "../src/behavioral/mediator/ChatRoom"
import { Participant } from "../src/behavioral/mediator/Participant"

test.skip('should be able to send messages directly', () => {
    const participantA = new Participant('A')
    const participantB = new Participant('B')
    const participantC = new Participant('C')
    participantA.sendMessage(participantB, 'hello')
    participantA.sendMessage(participantC, 'hello')
})

test('should be able to chat through a mediator', () => {
    const participantA = new Participant('A')
    const participantB = new Participant('B')
    const participantC = new Participant('C')
    const chatRoom = new ChatRoom()
    chatRoom.register(participantA)
    chatRoom.register(participantB)
    chatRoom.register(participantC)
    chatRoom.sendAll(participantA, 'hello')
    chatRoom.sendAll(participantB, 'hi')
})