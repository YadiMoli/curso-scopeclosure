//local scope

function greeting() {
    let userName = "Ana"
    console.log(userName)

    if (userName === "Ana") {
        console.log(`Hola ${userName}`)
    }
}

greeting()
console.log(userName) //no esta definida como global, asi que no se puede acceder fuera de la función