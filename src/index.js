let x = prompt (` give a number between `)
console.log (typeof(x))
x = Number(x)
console.log(typeof(x))
let result =(x+15)
let remainder = result%2

if (remainder == 1){
    alert(`Winner`)
}else{
    alert(`Loser`)
}

