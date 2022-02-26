import { Participant } from "./Participant"

export class ChatRoom {
    participants: Participant[]

    constructor() {
        this.participants = []
    }

    register(participant: Participant): void {
        this.participants.push(participant)
    }

    sendAll(from: Participant, message: string): void {
        this.participants.forEach((participant) => {
            if(from === participant) return 
            from.sendMessage(participant, message)
        })
    }
}