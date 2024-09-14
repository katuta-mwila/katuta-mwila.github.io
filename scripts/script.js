let box = document.getElementById('dom-test-box')
box.onclick = function(){
  box.style.backgroundColor = 'rgb(' + r255() + ',' + r255() + ',' + r255() + ')' 
}
box.click()

function r255(){
  return Math.floor(Math.random() * 256)
}


// create array containing names of different sports
let sportsArray = ['Basketball', 'Netball', 'Rugby']

// access the first word in the array using square brackets with the index of 0 inside
console.log(sportsArray[0]) // this will output 'Basketball'
console.log(sportsArray[1]) // this will output 'Netball'
console.log(sportsArray[2]) // this will output 'Rugby'


// create a person object with three pieces of data
// the left hand side is the key and the right hand side is the value
let personObject = {
  name: 'John',
  age: '30',
  job: 'Plumber'
}

// access each piece of data by seperating the name of the object and the keys by a period
console.log(personObject.name) // outputs 'John'
console.log(personObject.age) // outputs '30'
console.log(personObject.job) // outputs 'Plumber'