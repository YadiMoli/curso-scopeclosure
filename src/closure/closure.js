//Cómo utilizar Closure para construir una alcancía
//Si creamos una alcancía de la siguiente manera, solamente mostrará el valor enviado, no guardará la información del dinero que le enviamos.

function alcancia(monedas){
    let contenido = 0
    contenido = contenido + monedas
    return contenido
}

const miaAlcancia = alcancia
miAlcancia(5) // 5
miAlcancia(4) // 4

//Si utilizamos un closure, entonces la variable en que estará en un scope más elevado que la función interior, recordará el ámbito léxico que fue creada. Por lo tanto, cada vez que invoquemos cada función, mostrará el dinero ahorrado en la alcancía.

function alcancia(cantidadInicial){
  let contenido = cantidadInicial
  return function guardar(monedas){
    contenido = contenido + monedas
    return contenido
  }
}

const miAlcancia = alcancia(2)
miAlcancia(5) // 7
miAlcancia(4) // 11

const otraAlcancia = alcancia(5)
otraAlcancia(30) // 35
otraAlcancia(20) // 55

function createPetList() {
  const petList = [];
  return function addPet(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    return petList;
  }
}

const myPetList = createPetList()
myPetList("loro")

console.log(myPetList)
  