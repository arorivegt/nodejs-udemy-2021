console.log('START THE PROGRAM'); //STEP 1

setTimeout( () => {
    console.log('FIRST TIMEOUT'); //STEP 2
},3000);

setTimeout( () => {
    console.log('SECOND TIMEOUT'); //STEP 3
},0);

setTimeout( () => {
    console.log('THIRD TIMEOUT');//STEP 4
},0); 
console.log('END OF THE PROGRAM'); //STEP 5