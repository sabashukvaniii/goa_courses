# class Motorcycle:
#     # Class variable to keep track of how many motorcycles have been created
#     total_motorcycles = 0

#     def __init__(self, brand, model, color, engine_capacity):
#         # Instance attributes
#         self.brand = brand
#         self.model = model
#         self.color = color
#         self.engine_capacity = engine_capacity

#         # Increment the class variable each time a new motorcycle is created
#         Motorcycle.total_motorcycles += 1

#     def display_info(self):
#         # Print information about the motorcycle
#         print(f"Brand: {self.brand}")
#         print(f"Model: {self.model}")
#         print(f"Color: {self.color}")
#         print(f"Engine Capacity: {self.engine_capacity}cc")
#         print("-" * 30)

#     @classmethod
#     def display_total_motorcycles(cls):
#         # Print the total number of motorcycles created
#         print(f"Total motorcycles created: {cls.total_motorcycles}")


# # Create some Motorcycle objects
# moto1 = Motorcycle("Yamaha", "YZF-R1", "Blue", 1000)
# moto2 = Motorcycle("Honda", "CBR600RR", "Red", 600)
# moto3 = Motorcycle("Kawasaki", "Ninja ZX-6R", "Green", 636)

# # Display the information for each motorcycle
# moto1.display_info()
# moto2.display_info()
# moto3.display_info()

# # Display the total number of motorcycles created
# Motorcycle.display_total_motorcycles()



# Base class (Parent class)
# class Animal:
#     def __init__(self, name, species):
#         self.name = name
#         self.species = species

#     def speak(self):
#         print(f"{self.name} makes a sound.")

# # Child class 1: Dog
# class Dog(Animal):
#     def __init__(self, name, breed):
#         # Call the parent constructor
#         super().__init__(name, "Dog")
#         self.breed = breed

#     def speak(self):
#         print(f"{self.name} says Woof!")

# # Child class 2: Cat
# class Cat(Animal):
#     def __init__(self, name, color):
#         # Call the parent constructor
#         super().__init__(name, "Cat")
#         self.color = color

#     def speak(self):
#         print(f"{self.name} says Meow!")

# # Child class 3: Bird
# class Bird(Animal):
#     def __init__(self, name, wing_span):
#         # Call the parent constructor
#         super().__init__(name, "Bird")
#         self.wing_span = wing_span

#     def speak(self):
#         print(f"{self.name} says Chirp!")

# # Create objects of each child class
# dog = Dog("Rex", "Labrador")
# cat = Cat("Whiskers", "Gray")
# bird = Bird("Tweety", "15 cm")

# # Call the speak method from each object
# dog.speak()  # Output: Rex says Woof!
# cat.speak()  # Output: Whiskers says Meow!
# bird.speak() # Output: Tweety says Chirp!

# # Print additional attributes for each animal
# print(f"{dog.name} is a {dog.breed} dog.")
# print(f"{cat.name} is a {cat.color} cat.")
# print(f"{bird.name} has a wing span of {bird.wing_span}.")
