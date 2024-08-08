fetch('https://dummyapi.online/api/products')
    .then((response) => response.json())
    .then((json) => console.log(json));