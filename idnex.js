// massive

// shift, unshift, push, pop
// 1push adds elements at the end
// 2pop deletes elememts at the end
// 3unshift adds elements at the start
// 4shift deletes only 1 element at the start

// const names = ['Sunnat', 'Amir', 'Damir', 'Samir','Salmon', 'Ibra']
// const name = prompt('your name');

// name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase;

// if(names.includes(name)){
//   console.log('Уже есть!');
// }else if(name.length < 7){
//   console.log('Не достаточно символов!')
// }else {
//   names.push(name);
//   console.log(`Имя  добавилось!: ${name}`);
// }
let names = ['Sunnat', 'Umid', 'Gafar', 'Shokhjahon', 'Islom', 'Muattar'];

let name = prompt('Your name: ');


if (names.includes(name)) {
    console.log;('Уже есть');
} 
else if (name.length < 7) {
    console.log('Не достаточно символов');
} 
else {
    let standerdizedname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    names.push(standerdizedname);
    console.log('Имя добавлено: ' + standerdizedname);
}


