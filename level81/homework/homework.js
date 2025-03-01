// Parent class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} makes a ${this.sound} sound.`);
    }
}

// Child class 1
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'bark'); // Call parent class constructor with 'bark' sound
        this.breed = breed;
    }

    displayBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

// Child class 2
class Cat extends Animal {
    constructor(name, color) {
        super(name, 'meow'); // Call parent class constructor with 'meow' sound
        this.color = color;
    }

    displayColor() {
        console.log(`${this.name} is ${this.color} in color.`);
    }
}

// Child class 3
class Bird extends Animal {
    constructor(name, wingSpan) {
        super(name, 'chirp'); // Call parent class constructor with 'chirp' sound
        this.wingSpan = wingSpan;
    }

    displayWingSpan() {
        console.log(`${this.name} has a wingspan of ${this.wingSpan} meters.`);
    }
}

// Creating instances of the child classes
const dog = new Dog('Max', 'Golden Retriever');
dog.makeSound();  // Max makes a bark sound.
dog.displayBreed();  // Max is a Golden Retriever.

const cat = new Cat('Whiskers', 'black');
cat.makeSound();  // Whiskers makes a meow sound.
cat.displayColor();  // Whiskers is black in color.

const bird = new Bird('Tweety', 0.5);
bird.makeSound();  // Tweety makes a chirp sound.
bird.displayWingSpan();  // Tweety has a wingspan of 0.5 meters.
