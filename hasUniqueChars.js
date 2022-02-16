// Write your code below
const array = Array
  .from(document.querySelectorAll('[id]'))
  .map(function(e) {
      return e.id
  });

const set = new Set(array);
console.assert(set.size == array.length)


hasUniqueChars("") // will print true or false