import {addToDom} from './helper'

class Person {
    constructor(name){
        this.name = name; 
    }
    talk(message) {
        addToDom('h1', `${this.name}: ${message}`);
    }
    greet(){
        this.talk(`Hello, my name is ${this.name}`)
    }
}

class SuperPerson extends Person {
    constructor(name, superPower){
        super(name);
        this.superPower = superPower;
    }
    saySuperPower(superPower){
        this.talk(`My name is ${this.name} and my superpower is ${this.superPower}`)
    }
}

export default SuperPerson; 