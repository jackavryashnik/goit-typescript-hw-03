class Key {
    private signature: number;

    constructor(){
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    private key: Key;
    
    constructor(key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    public tenants: Person[];
    
    constructor(key: Key) {
        this.door  = false;
        this.key = key;
        this.tenants = [];
    }

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
    constructor(key: Key) {
        super(key);
    }

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