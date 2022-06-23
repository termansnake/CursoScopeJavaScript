function greeting() {
    let userName = 'German';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // salida [Function: displayUserName]
console.log(g()); // salida Hello German