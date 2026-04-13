function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, World!";
            resolve(data);
        }, 2000);
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();