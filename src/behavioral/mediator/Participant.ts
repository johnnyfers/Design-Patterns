export class Participant {
    id: string

    constructor(id: string){
        this.id = id
    }

    sendMessage(participant:Participant ,message: string) {
        participant.receive(this, message)
    }

    receive(from: Participant, message: string) {
        console.log(`${this.id} receive a message "${message}" from ${from.id}`)
    }
}