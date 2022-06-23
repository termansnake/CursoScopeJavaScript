function fruits() {
    if(true) {
        var fruit1 = 'manzana'; //function scope
        let fruit2 = 'kiwi'; //block scope 
        const fruit3 = 'Banana'; //block scope
        console.log(fruit2); //con error
        console.log(fruit3); // con error
    }
    console.log(fruit1);
    console.log(fruit2); //con error
    console.log(fruit3); // con error
}
fruits();