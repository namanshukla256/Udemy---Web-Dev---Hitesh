const username = {
    firstname: "Naman",
    isLoggedin: true,
};

username.firstname = "Max";
username.lastname = "Verstappen";

console.log(username.firstname);
console.log(username.lastname);
console.log(typeof username); // object
