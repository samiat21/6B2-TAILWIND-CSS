// const animal = 'elephant'
// const bird1 = 'owl'
// const bird2 = 'peacock'
// const bird3 = 'vulture'

// const first = document.getElementById('sam')
// const second = document.querySelectorAll('.sami')




// first.textContent = animal
// second[0].textContent = bird1
// second[1].textContent = bird2
// second[2].textContent = bird3
const body = document.querySelector('body')
const unordered = document.createElement('ul')
const list = document.createElement('li')
body.append(unordered)

unordered.append(list)

unordered.setAttribute('class', 'food drink')

const myName = 'usman samiat aramide'
const age = 50

list.textContent = `my name is ${myName.toUpperCase()}, and it has ${myName.length} characters, 
my age is ${age}. My name contains a country named ${myName.slice(6, 9)} and it has an 
index ${myName.indexOf('s')}. I can change sam with tam to get ${myName.replace('sam', 'tam').toUpperCase()}. 
I can change all 'a' to 'e' using ${myName.replaceAll('a', 'e')}. Does my name starts with u,${myName.startsWith('f')}. The character at number 10 is ${myName.charAt(10)}. The last character in my name is ${myName[myName.length-1]}`

const food = document.getElementsByClassName('food')

 food[0].style.background = '#3e9'
 food[0].style.padding = '2em'
 food[0].style.fontSize = '3em'

//  const aph ='the quick brown fox jumps over the lazy dog'
 
//  list.textContent = `${aph[aph.indexOf('h')]}${aph[aph.indexOf('e')]}${aph[aph.indexOf('l')]}${aph[aph.indexOf('l')]}${aph[aph.indexOf('o')]} ${aph[aph.indexOf('u')]}${aph[aph.indexOf('n')]}${aph[aph.indexOf('i')]}${aph[aph.indexOf('v')]}${aph[aph.indexOf('e')]}${aph[aph.indexOf('l')]}`
 
//  const univel = `${aph[aph.indexOf('h')]}${aph[aph.indexOf('e')]}${aph[aph.indexOf('l')]}${aph[aph.indexOf('l')]}${aph[aph.indexOf('o')]} ${aph[aph.indexOf('u')]}${aph[aph.indexOf('n')]}${aph[aph.indexOf('i')]}${aph[aph.indexOf('v')]}${aph[aph.indexOf('e')]}${aph[aph.indexOf('l')]}`
//  list.textContent = univel.toUpperCase()