
#number3

# def log_execution(func):
#     """
#     A decorator that logs the execution of the function it wraps.
#     """
#     def wrapper(*args, **kwargs):
#         print(f"Calling function: {func.__name__}")
#         print(f"Arguments: args={args}, kwargs={kwargs}")
#         result = func(*args, **kwargs)
#         print(f"Function {func.__name__} returned: {result}")
#         return result
#     return wrapper

# @log_execution
# def add(a, b):
#     return a + b

# add(3, 5)



#number1
# def log_kwargs(func):
#     """
#     A decorator that logs keyword arguments passed to the decorated function.
#     """
#     def wrapper(*args, **kwargs):
#         print(f"Calling function: {func.__name__}")
#         print(f"Keyword arguments: {kwargs}")
#         result = func(*args, **kwargs)
#         print(f"Function {func.__name__} returned: {result}")
#         return result
#     return wrapper


# @log_kwargs
# def greet(**kwargs):
#     greeting = kwargs.get("greeting", "Hello")
#     name = kwargs.get("name", "there")
#     punctuation = kwargs.get("punctuation", "!")
#     return f"{greeting}, {name}{punctuation}"


# greet(greeting="Hi", name="Alice", punctuation=".")


#number2

#def log_args(func):
#     """
#     A decorator that logs positional arguments passed to the decorated function.
#     """
#     def wrapper(*args, **kwargs):
#         print(f"Calling function: {func.__name__}")
#         print(f"Positional arguments: {args}")
#         result = func(*args, **kwargs)
#         print(f"Function {func.__name__} returned: {result}")
#         return result
#     return wrapper

# # Example function using *args
# @log_args
# def multiply(*args):
#     product = 1
#     for num in args:
#         product *= num
#     return product

# # Call the decorated function
# multiply(2, 3, 4)

#number4

# Base class
# class Animal:
#     def __init__(self, name):
#         self.name = name

#     def eat(self):
#         print(f"{self.name} is eating.")

# # Intermediate class
# class Mammal(Animal):
#     def __init__(self, name, habitat):
#         super().__init__(name)
#         self.habitat = habitat

#     def walk(self):
#         print(f"{self.name} is walking in the {self.habitat}.")

# # Derived class
# class Dog(Mammal):
#     def __init__(self, name, habitat, breed):
#         super().__init__(name, habitat)
#         self.breed = breed

#     def bark(self):
#         print(f"{self.name}, the {self.breed}, is barking.")

# # Example usage
# dog = Dog("Buddy", "park", "Golden Retriever")
# dog.eat()
# dog.walk()      
# dog.bark()      


#number5

# class BankAccount:
#     def __init__(self, account_holder, balance):
#         self.account_holder = account_holder
#         self._balance = balance 

#     def deposit(self, amount):
#         if amount > 0:
#             self._balance += amount
#             print(f"Deposited {amount}. New balance: {self._balance}")
#         else:
#             print("Deposit amount must be positive.")

#     def withdraw(self, amount):
#         if 0 < amount <= self._balance:
#             self._balance -= amount
#             print(f"Withdrew {amount}. Remaining balance: {self._balance}")
#         else:
#             print("Invalid withdrawal amount.")


# account = BankAccount("Alice", 1000)
# print(account.account_holder)
# account.deposit(200)           
# account.withdraw(500)          
# print(account._balance)        

#number6

# class BankAccount:
#     def __init__(self, account_holder, balance):
#         self.account_holder = account_holder
#         self.__balance = balance  # Double underscore indicates "private"

#     def deposit(self, amount):
#         if amount > 0:
#             self.__balance += amount
#             print(f"Deposited {amount}. New balance: {self.__balance}")
#         else:
#             print("Deposit amount must be positive.")

#     def withdraw(self, amount):
#         if 0 < amount <= self.__balance:
#             self.__balance -= amount
#             print(f"Withdrew {amount}. Remaining balance: {self.__balance}")
#         else:
#             print("Invalid withdrawal amount.")

#     def get_balance(self):
#         return self.__balance  # Provide a method to safely access the private variable

# # Example usage
# account = BankAccount("Alice", 1000)
# print(account.account_holder)   # Accessible directly
# account.deposit(200)            # Method modifies balance
# account.withdraw(500)           # Method modifies balance

# # Accessing the private variable directly will raise an error
# try:
#     print(account.__balance)    # Raises an AttributeError
# except AttributeError:
#     print("Cannot access private variable __balance directly.")

# # Access the balance using the provided method
# print(f"Balance: {account.get_balance()}")
