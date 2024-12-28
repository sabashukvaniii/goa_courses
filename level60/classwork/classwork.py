# class Car:
#     # Constructor to initialize the car attributes
#     def __init__(self, make, model, year, color):
#         self.make = make  # Car brand (e.g., Toyota)
#         self.model = model  # Car model (e.g., Corolla)
#         self.year = year  # Year of manufacture
#         self.color = color  # Color of the car
    
#     # Method to display car information
#     def display_info(self):
#         print(f"Car Info: {self.year} {self.make} {self.model} ({self.color})")
    
#     # Method to simulate car start
#     def start_car(self):
#         print(f"{self.make} {self.model} is starting... Vroom Vroom!")

# # Create 3 car objects (instances)
# car1 = Car("Toyota", "Corolla", 2021, "Red")
# car2 = Car("Honda", "Civic", 2020, "Blue")
# car3 = Car("Ford", "Mustang", 2022, "Black")

# # Testing attributes and methods on each object

# # For car1
# print(f"Car1: Make = {car1.make}, Model = {car1.model}, Year = {car1.year}, Color = {car1.color}")
# car1.display_info()  # Calling method
# car1.start_car()  # Calling method

# # For car2
# print(f"\nCar2: Make = {car2.make}, Model = {car2.model}, Year = {car2.year}, Color = {car2.color}")
# car2.display_info()  # Calling method
# car2.start_car()  # Calling method

# # For car3
# print(f"\nCar3: Make = {car3.make}, Model = {car3.model}, Year = {car3.year}, Color = {car3.color}")
# car3.display_info()  # Calling method
# car3.start_car()  # Calling method


#class Person:
    # Class variable to count total number of people created
#     total_people = 0
    
#     def __init__(self, name, age, occupation):
#         self.name = name  # Instance variable for the person's name
#         self.age = age  # Instance variable for the person's age
#         self.occupation = occupation  # Instance variable for the person's occupation
        
#         # Increment the total_people count whenever a new person is created
#         Person.total_people += 1

#     # Method to display information about the person
#     def display_info(self):
#         print(f"Name: {self.name}, Age: {self.age}, Occupation: {self.occupation}")
    
#     # Method to simulate the person introducing themselves
#     def introduce(self):
#         print(f"Hello, my name is {self.name}. I am {self.age} years old and I work as a {self.occupation}.")

# # Create several objects (instances) of the Person class
# person1 = Person("Alice", 30, "Engineer")
# person2 = Person("Bob", 25, "Artist")
# person3 = Person("Charlie", 35, "Teacher")

# # Testing attributes and methods on the first two objects

# # For person1
# print(f"Person1: Name = {person1.name}, Age = {person1.age}, Occupation = {person1.occupation}")
# person1.display_info()  # Calling method
# person1.introduce()  # Calling method

# # For person2
# print(f"\nPerson2: Name = {person2.name}, Age = {person2.age}, Occupation = {person2.occupation}")
# person2.display_info()  # Calling method
# person2.introduce()  # Calling method

# # Display the total number of people created
# print(f"\nTotal number of people created: {Person.total_people}")



