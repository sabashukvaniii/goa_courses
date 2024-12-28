# Instance method: Operates on instance data and requires an instance to be called.
# Class method: Operates on class data and can be called on the class itself or instances.

# Instance Method: Requires an instance (object) of the class to work with and can access instance-specific data (via self).
# Static Method: Does not need an instance and does not have access to instance-specific or class-specific data. It’s used for general-purpose methods that don’t rely on the object’s state

# Class Method (classmethod):
# Works with class-level data and can modify class attributes.
# Has access to the class (cls), making it useful for modifying class state or creating alternative constructors.
# Static Method (staticmethod):
# Does not have access to instance or class data.
# It’s used for operations that are logically related to the class but do not need to modify or access any class or instance-level data.

# Use Class Methods When:
# You need to work with class-level data: If you need to access or modify class-level attributes (attributes shared by all instances), use a class method.
# You want to modify or manage the state of the class: If the method affects all instances of the class (like tracking the number of instances), a class method is ideal.
# You need to define alternative constructors: Class methods are often used to create alternative constructors that work with class-level data or need to create instances in a specific way.
# Example Use Cases:
# Alternative constructors: For instance, creating an object from different types of inputs (e.g., from a file or a string).
# Managing class-level data: A method that tracks how many objects have been created from a class 

# Use Instance Methods When:
# You need to work with instance-specific data: If the method needs to access or modify attributes that belong to a specific instance (an object), use an instance method.
# The method relies on the state of a particular object: If the method's behavior changes based on the state or data of the specific object, it should be an instance method.
# You are manipulating the instance’s behavior or attributes: Instance methods typically perform operations on the data that is tied to that particular instance

# class Employee:
#     employee_count = 0  # Class-level attribute to keep track of employee count

#     def __init__(self, name, age, position):
#         self.name = name
#         self.age = age
#         self.position = position
#         Employee.employee_count += 1  # Increment count when a new instance is created

#     @classmethod
#     def from_dict(cls, data):
#         # Alternative constructor that creates an Employee instance from a dictionary
#         return cls(data['name'], data['age'], data['position'])

#     @classmethod
#     def show_employee_count(cls):
#         print(f"Total employees: {cls.employee_count}")


# # Create an instance of Employee using the class method
# employee_data = {
#     'name': 'John Doe',
#     'age': 30,
#     'position': 'Software Engineer'
# }

# employee = Employee.from_dict(employee_data)

# # Print employee details
# print(f"Employee Name: {employee.name}")
# print(f"Employee Age: {employee.age}")
# print(f"Employee Position: {employee.position}")

# # Show total number of employees using class method
# Employee.show_employee_count()


# class MathOperations:
#     @staticmethod
#     def add(a, b):
#         return a + b

#     @staticmethod
#     def multiply(a, b):
#         return a * b


# # Creating an instance of MathOperations (not needed for static methods, but possible)
# math_instance = MathOperations()

# # Using static method through the class
# result_add = MathOperations.add(5, 3)
# result_multiply = MathOperations.multiply(4, 2)

# # Using static method through the instance (although not necessary)
# result_add_instance = math_instance.add(10, 20)
# result_multiply_instance = math_instance.multiply(3, 5)

# # Print results
# print(f"5 + 3 = {result_add}")  # Output: 5 + 3 = 8
# print(f"4 * 2 = {result_multiply}")  # Output: 4 * 2 = 8
# print(f"10 + 20 = {result_add_instance}")  # Output: 10 + 20 = 30
# print(f"3 * 5 = {result_multiply_instance}")  # Output: 3 * 5 = 15
