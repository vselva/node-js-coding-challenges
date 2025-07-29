promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch api");
        }
        return response.json();
    }
);

promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    if (!res.ok) {
        throw Error("Error in fetching data");
    }
    return res.json();
});

Promise.all([promise1, promise2])
    .then((data) => {
        console.log("All Promises Settled!");
        console.log(data);
    })
    .catch((err) => console.log(err));
