// // Creating an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Using slice method three times
// let slice1 = arr.slice(1, 5); // Extracting elements from index 1 to 4
// let slice2 = arr.slice(3, 7); // Extracting elements from index 3 to 6
// let slice3 = arr.slice(0, 6); // Extracting elements from index 0 to 5

// console.log(slice1); // [2, 3, 4, 5]
// console.log(slice2); // [4, 5, 6, 7]
// console.log(slice3); // [1, 2, 3, 4, 5, 6]





// // Create a new Date object
// let now = new Date();

// // Extract the components of the current date and time
// let year = now.getFullYear();
// let month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are 0-indexed
// let day = String(now.getDate()).padStart(2, '0');
// let hours = String(now.getHours()).padStart(2, '0');
// let minutes = String(now.getMinutes()).padStart(2, '0');

// // Format the output as "წელი/თვე/დღე/საათი/წამი"
// let formattedTime = `${year}/${month}/${day}/${hours}/${minutes}`;

// console.log(formattedTime);



// Function to generate a random password
// function generatePassword(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
//     let password = '';
  
//     // Loop to generate a password of the specified length
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);  // Get random index
//       password += characters[randomIndex];  // Add the random character to the password
//     }
  
//     return password;
//   }
  
//   // Example: Generate a 12-character password
//   let password = generatePassword(12);
//   console.log(password);
