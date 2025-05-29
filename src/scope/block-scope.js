function fruits() {
    if (true) {
        var fruit1 = "Mango" //function scope
        let fruit2 = "Fresa" //block scope
        const fruit3 = "Pera" //block scope

        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1) //function scope asi que si esta dentro de la función aparece
    // console.log(fruit2) aqui esta fuera del bloque por eso marca error
    // console.log(fruit3) """"""
}

fruits()

//se considera un bloque todo lo que este dentro de un {}