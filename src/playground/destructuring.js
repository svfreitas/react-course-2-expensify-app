// const person ={
//     name: 'Andrew',
//     age:26,
//     location: {
//         city: 'Rio de Janeiro',
//         temp: 32
//     }
// };

// const {name: firstName = 'Anonymous', age} =  person;

// console.log (`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
//}

// const book ={
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array destructurin

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// //const [street, city, state,zip] = address;
// const [ , city, state = 'New York'] = address;

// console.log (`You are in ${city} ${state}`);

// //console.log (`You are in ${address[1]} ${address[2]}`);

const item =['Coffee (hot)','$2.00', '$2.50', '$2.75'];

const[itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);