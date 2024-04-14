class Key {
    private signature: number;

    constructor(){
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;
    
    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    public tenants: Person[] = [];
    
    constructor(protected key: Key) {}

    public comeIn(person: Person) {
        if(this.door) {
            this.tenants.push(person);
            console.log("Person entered the house.");
        } else {
            console.log("Cannot enter. Door is closed.");
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door opened successfully.");
        } else {
            console.log("Invalid key. Door cannot be opened.");
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};