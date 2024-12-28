// number1

// Object for a Teacher
// const teacher = {
//     name: "Ms. Johnson",
//     subject: "Mathematics",
//     yearsOfExperience: 12,
//     students: 120,
//     teach: function () {
//       console.log(`${this.name} is teaching ${this.subject}.`);
//     }
//   };
  
//   // Object for a Gamer
//   const gamer = {
//     name: "Chris",
//     favoriteGame: "Elden Ring",
//     platform: "PC",
//     hoursPlayed: 450,
//     playGame: function () {
//       console.log(`${this.name} is playing ${this.favoriteGame} on ${this.platform}.`);
//     }
//   };
  
//   // Object for a Doctor
//   const doctor = {
//     name: "Dr. Patel",
//     specialty: "Cardiology",
//     patientsPerWeek: 40,
//     prescribe: function (medicine) {
//       console.log(`${this.name} prescribes ${medicine}.`);
//     }
//   };
  
//   // Object for an Artist
//   const artist = {
//     name: "Lila",
//     medium: "Watercolor",
//     favoriteArtPiece: "Sunset Bliss",
//     createArt: function () {
//       console.log(`${this.name} is painting a new masterpiece with ${this.medium}.`);
//     }
//   };
  
//   // Object for a Photographer
//   const photographer = {
//     name: "Jake",
//     cameraModel: "Canon EOS R5",
//     favoriteGenre: "Landscape",
//     portfolio: ["Mountains", "Beaches", "Cities"],
//     takePhoto: function () {
//       console.log(`${this.name} is capturing a stunning ${this.favoriteGenre} photograph.`);
//     }
//   };
  
//   // Object for a Writer
//   const writer = {
//     name: "Sophia",
//     genre: "Fantasy",
//     booksPublished: 3,
//     currentProject: "The Dragon's Tale",
//     write: function () {
//       console.log(`${this.name} is working on their next book: "${this.currentProject}".`);
//     }
//   };
  
//   // Example Usage
//   teacher.teach();           // Ms. Johnson is teaching Mathematics.
//   gamer.playGame();          // Chris is playing Elden Ring on PC.
//   doctor.prescribe("Aspirin"); // Dr. Patel prescribes Aspirin.
//   artist.createArt();        // Lila is painting a new masterpiece with Watercolor.
//   photographer.takePhoto();  // Jake is capturing a stunning Landscape photograph.
//   writer.write();            // Sophia is working on their next book: "The Dragon's Tale".

// number2

// Car Constructor Function
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.displayInfo = function () {
//       console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
//     };
//   }
  
//   // Create 3 Car Objects
//   const car1 = new Car("Toyota", "Corolla", 2021);
//   const car2 = new Car("Ford", "Mustang", 2019);
//   const car3 = new Car("Tesla", "Model S", 2023);
  
//   // Example Usage
//   car1.displayInfo(); // Car Info: 2021 Toyota Corolla
//   car2.displayInfo(); // Car Info: 2019 Ford Mustang
//   car3.displayInfo(); // Car Info: 2023 Tesla Model S

// number3

// Person Constructor Function
// function Person(name, age, occupation, city) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//     this.city = city;
//     this.introduce = function () {
//       console.log(
//         `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.occupation} from ${this.city}.`
//       );
//     };
//   }
  
//   // Create 3 Person Objects
//   const person1 = new Person("Alice", 28, "Software Engineer", "San Francisco");
//   const person2 = new Person("Bob", 35, "Teacher", "Chicago");
//   const person3 = new Person("Charlie", 22, "Graphic Designer", "New York");
  
//   // Example Usage
//   person1.introduce(); // Hi, I'm Alice, a 28-year-old Software Engineer from San Francisco.
//   person2.introduce(); // Hi, I'm Bob, a 35-year-old Teacher from Chicago.
//   person3.introduce(); // Hi, I'm Charlie, a 22-year-old Graphic Designer from New York.

// number4

// Animal Constructor Function
// function Animal(species, habitat, sound) {
//     this.species = species;
//     this.habitat = habitat;
//     this.sound = sound;
//     this.makeSound = function () {
//       console.log(`The ${this.species} makes a '${this.sound}' sound.`);
//     };
//   }
  
//   // Create 3 Animal Objects
//   const animal1 = new Animal("Lion", "Savannah", "Roar");
//   const animal2 = new Animal("Dolphin", "Ocean", "Click");
//   const animal3 = new Animal("Eagle", "Mountains", "Screech");
  
//   // Example Usage
//   animal1.makeSound(); // The Lion makes a 'Roar' sound.
//   animal2.makeSound(); // The Dolphin makes a 'Click' sound.
//   animal3.makeSound(); // The Eagle makes a 'Screech' sound.

// number5

// Constructor functions in JavaScript are used to create and initialize objects with similar structures and behaviors.
//They provide a template for creating multiple objects that share common properties and methods.
//Constructor functions are particularly useful when you need to create multiple instances of a specific type of object,
//each with its own unique data.