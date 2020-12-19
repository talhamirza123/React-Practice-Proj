
// const person = 
// {
//     name: "Talha",
//     walk()
//     {
//         console.log(this);
//     }
    
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk(); 


//Arrow Functions

// const square = number => number * number;
// console.log(square(7));

//Arrow Functions

// const jobs = 
// [
//    { id: 1, isactive: true },
//    { id: 2, isactive: true },
//    { id: 3, isactive: false },

// ];
   
//    const activejobs =  jobs.filter(function(job) {   return  job.isactive  });
//    const activejobs =  jobs.filter(function(job) {   return  job.isactive  });


//Arrow function and this


// const person = 
// {
    
    
//     talk()
//     {
        
//         var self = this;
        
//         setTimeout
        
//             (function () 
//                 {
//             console.log("self", self);
//         }, 1000 );
//     }
// }; 
    

// person.talk();




// const colors = ['green', 'red', 'blue'];

// const items = colors.map(color => `<li>${color}</li>`);



// console.log(items);

// const address = 
// {
//     street: '',
//     city: '',
//     country: '',
    
    
// }
// const { street, city, country } = address,

// const first = [1, 2 , 3];

// const clone = [...first];

// console.log(first);
// console.log(clone);   
    
const first = {name: "Talha"}
const second = {ob: 'Developer'};

const combined = {...first, ...second}
console.log(combined);