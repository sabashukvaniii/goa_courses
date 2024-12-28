# Use _prefix for "protected" or internal use.
# Use __prefix for private attributes that you want to make harder to access directly.

#  Base class
# class Animal:
#     def __init__(self, name):
#         self.name = name

#     def move(self):
#         print(f"{self.name} is moving")

# # Intermediate class 1: Prey (inherits from Animal)
# class Prey(Animal):
#     def __init__(self, name, speed):
#         super().__init__(name)
#         self.speed = speed

#     def flee(self):
#         print(f"{self.name} is fleeing at {self.speed} km/h")

#  Intermediate class 2: Predator (inherits from Animal)
# class Predator(Animal):
#     def __init__(self, name, hunting_skill):
#         super().__init__(name)
#         self.hunting_skill = hunting_skill

#     def hunt(self):
#         print(f"{self.name} is hunting with a skill level of {self.hunting_skill}")

#  Child class 1: Rabbit (inherits from Prey)
# class Rabbit(Prey):
#     def __init__(self, name, speed):
#         super().__init__(name, speed)

#  Child class 2: Hawk (inherits from Predator)
# class Hawk(Predator):
#     def __init__(self, name, hunting_skill):
#         super().__init__(name, hunting_skill)

#  Create objects
# rabbit = Rabbit("Rabbit", 50)
# hawk = Hawk("Hawk", 90)

#  Call methods
# rabbit.move()
# rabbit.flee()

# hawk.move()
# hawk.hunt()
