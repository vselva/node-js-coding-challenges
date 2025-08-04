const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => {
        if (!res.ok) {
            throw Error(`${res.status}: ${res.statusText}`);
        }
        return res.json();
    }
);

const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => {
        if (!res.ok) {
            throw Error(`${res.status}: ${res.statusText}`);
        }
        return res.json();
    }
);

Promise.all([promise1, promise2])
    .then((data) => console.log(data))
    .catch((err) => console.log("Error in Promise:", err));
