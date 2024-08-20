#so here we are starting to create a place where a pesron can register his/her account
#here we olso gave variables their names and values too
users_name = input("name: " )

users_surname = input("surname: " )
#here i gave them the result aka the answer that they would get after registering
result = "you have succesfully been registered"
#here i used print to print it all
print( result + " " + users_name + users_surname)


#now lets do the same thing but with f string
users_name = input("your name: ")

users_surname = input("your surname: ")

result = "congrats you have succesfully been registered"

print(f"result users_name users_surname")