const myGlobal = 0

function myFunction() {
    const myNumber = 1
    console.log(myGlobal)

    function parent() { //funcion interna
        const inner = 2
        console.log(myNumber, myGlobal)

        function child() {
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFunction()

/*Los closures permiten acceder al ámbito de una función exterior desde una función interior. En javascript, los closures se crean cada vez que una función es creada.

Los closures no son siempre utilizados.

Un closure es cuando una función accede a una variable fuera de su contexto.

Al trabajar con closures entra en juego el concepto de alcance de las variables.

Ámbito léxico
El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.*/