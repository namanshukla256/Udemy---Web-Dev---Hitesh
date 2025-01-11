function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = true;
            if (sucess) {
                resolve("data fetched successfully");
            } else {
                reject("Error fetching data");
            }
            }, 3000);
        });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));