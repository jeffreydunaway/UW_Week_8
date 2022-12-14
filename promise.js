/*
  When writing a promise
  the @param {resolve, reject} must be inside the function
*/

const myPromise = new Promise(function(resolve, reject) {
  const number = Math.random()
  setTimeout(function() {
    console.log(`The value is: ${number}`)
  if(number>0.5){
    console.log(`The result was resovlve ${number}`)
    resolve(number)
  }else{
    console.log(`The result was rejected ${number}`)
    reject(number)
  }
}, 1000);
});

myPromise.then((number)=>{
  console.log('Success')
}).catch((number)=>{
  console.log('Failure');
})
// .then(()=>{
//   console.log("complete");
// })

const awaitTest = async function(){
try{
// waits for the promise to be resolve
const test = await myPromise
console.log(`Await/Async succesful`)
console.log('Complete, through resolve()')
} 
catch{
// the promise was rejected() but at setTimeout() is needed to have print in order
setTimeout(()=>{
  console.log(`Await/Async succesful`)
  console.log('Complete, through reject()')
},100)
}
}
awaitTest()
