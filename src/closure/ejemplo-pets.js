function createPetList() {
    let PetList = []
    function addPet(pet) {
        if (pet) {
            PetList.push(pet)
        }
        //console.log(PetList)
        return PetList
    }
    return addPet
}

const myPetList = createPetList()

myPetList("perro")
myPetList("gato")
const petss  = myPetList("ratonm")
console.log(petss)