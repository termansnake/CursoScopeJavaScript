//function scope
function greeting() {
    let username = 'Ana';
    console.log(username);

    if(username === 'Ana'){
        console.log(`Hello ${username}! `)
    }
}
greeting();