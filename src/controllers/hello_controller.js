import { Controller } from "stimulus"

export default class extends  Controller{
    // connect() {
    //     console.log("Hello, Stimulus!", this.element)
    // }
    static targets = [ 'name' ]

    greet() {
        console.log(`Hello, ${this.name}!`)
    }

    get name() {
        return this.nameTarget.value
    }
}