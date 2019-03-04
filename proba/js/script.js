// let arr = ['Homework', 'Food', 'Project', 'Learn JS'];

// arr.forEach(function(all, index){
//     console.log(`${index}: ${all}`);
// })

// const shop = [
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'Shirt'},
//     {id: 3, product: 'Album'}
// ];

// const productName = shop.map(function(what){
//     return what.product;
// });

// console.log(productName);

// let myCar = {
//     model: 'Camaro',
//     engine: 6.0,
//     year: 1969,
//     make: 'Chevy'
// }

// for(let key in myCar) {
//     console.log(`${key}: ${myCar[key]}`)
// }

// try {
//     someThing();
// } catch (error) {
//     console.log(error);
// }

// function getSmth() {
//     console.log('Downloading...');

//     setTimeout(function(){
//         if(true){
//             console.clear();
//             console.log('Complete...');
//         }
//     }, 3000);
// };

// getSmth();

// if(confirm('Are you sure?')){
//     console.log('Deleted...')
// }else {
//     console.log('Nothing Happens');
// }

// let height,
//     width;

// width = window.outerWidth;
// height = window.outerHeight;

// if(width > 1000) {
//     document.body.style.backgroundColor = 'red';
// } else if(height > 500){
//     document.body.style.backgroundColor = 'green';
// } else {
//     document.body.style.backgroundColor = 'blue';
// }

// console.log(width);
// console.log(height);


let url = window.location;

console.log(url.href);