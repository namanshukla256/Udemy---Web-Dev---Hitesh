function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: "naman", url: "https://namansh.com"})
        }, 3000);
    })
}

async function getUserData(){
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched Suceesfully");        

        console.log("User data", userData);
    } catch (error) {
        console.log("Error fetching user data", error);
    }
}

getUserData();

// output
// Fetching user data...
// Error fetching user data {name: 'naman', url: 'https://namansh.com'}