// Write your code below
function hasUniqueChars(word){
    let array = Array.from(word)
    let mySet = new Set(word)
    return array.length === mySet.size
    //if(array.length === mySet.size){
    //     return true
    // }else {
    //     return false
    }   
console.log(hasUniqueChars("Monday"))


//hasUniqueChars("") // will print true or false