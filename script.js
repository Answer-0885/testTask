'use strict'

const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');

//1. Заполнить массив (100 элементов) случайными значениями (целое без знаковое).
// Найти максимальный и минимальный элемент массива и их индексы, вывести на экран.
let array = []
for (let i = 1; i < 100; i++) {
    array.push(Math.floor(Math.random() * 1000000) + 1)
}
console.log(array);

let min = Math.min(...array);
let max = Math.max(...array);
console.log(min);
console.log(max);

task1.innerHTML = `
Max значение ${max} с индексом ${array.indexOf(max)} и 
Min значение ${min} с индексом ${array.indexOf(min)}.`;
//2. Заполнить массив (100 элементов) случайными значениями (целое без знаковое). Найти количество элементов
// в диапазоне 0-10,11-100,101-1000 и т.д. до 1000001, числа свыше считать отдельно. Вывести на экран.
const result1 = array.filter(elem => {
    return elem <= 10;
});
const result2 = array.filter(elem => {
    if(elem >= 11 &&  elem <= 100){
        return elem
    }
}); 
const result3 = array.filter(elem => {
    if(elem >= 101 &&  elem <= 1000){
        return elem
    }
}); 
const result4 = array.filter(elem => {
    if(elem >= 1001 &&  elem <= 10000){
        return elem
    }
}); 
const result5 = array.filter(elem => {
    if(elem >= 10001 &&  elem <= 100000){
        return elem
    }
}); 
const result6 = array.filter(elem => {
    if(elem >= 100001 &&  elem <= 1000001){
        return elem
    }
}); 
task2.innerHTML = ` 
${Object.keys(result1).length} элементов в массиве в диапазоне от 0 - 10. <br>
${Object.keys(result2).length} элементов в массиве в диапазоне от 11 - 100. <br>
${Object.keys(result3).length} элементов в массиве в диапазоне от 101 - 1000. <br>
${Object.keys(result4).length} элементов в массиве в диапазоне от 1001 - 10000. <br>
${Object.keys(result5).length} элементов в массиве в диапазоне от 10001 - 100000. <br>
${Object.keys(result6).length} элементов в массиве в диапазоне от 100001 - 1000001. <br>
`;
// 3. Заполнить массив целыми случайными значениями - 1 и 0. Определить отношение количества
//  единичек и нулей в массиве для 100,1000,10000 элементов. Вывести на экран.

//Отношение количества единичек и нулей в массиве для длины массива 100.
let array21 = []
for (let i = 0; i < 100; i++) {
    let arr = Math.random()
    if(arr >= 0.5){
        array21.push(1)
    } else if (arr < 0.5){
        array21.push(0)
    }
}
console.log(array21);

const counts100 = {};
array21.forEach((x) => { counts100[x] = (counts100[x] || 0) + 1; });
console.log(counts100)

//Отношение количества единичек и нулей в массиве для длины массива 1000.
let array22 = []
for (let i = 0; i < 1000; i++) {
    let arr = Math.random()
    if(arr >= 0.5){
        array22.push(1)
    } else if (arr < 0.5){
        array22.push(0)
    }
};

const counts1000 = {};
array22.forEach((x) => { counts1000[x] = (counts1000[x] || 0) + 1; });
console.log(counts1000)

//Отношение количества единичек и нулей в массиве для длины массива 10000.
let array23 = []
for (let i = 0; i < 10000; i++) {
    let arr = Math.random()
    if(arr >= 0.5){
        array23.push(1)
    } else if (arr < 0.5){
        array23.push(0)
    }
};

const counts10000 = {};
array23.forEach((x) => { counts10000[x] = (counts10000[x] || 0) + 1; });
console.log(counts10000)

task3.innerHTML = `Отношение количества единичек и нулей в массиве для длины массива 100. <br>
Нулей: ${counts100[0]}, Единиц: ${counts100[1]} <br>
Отношение количества единичек и нулей в массиве для длины массива 1000. <br>
Нулей: ${counts1000[0]}, Единиц: ${counts1000[1]} <br>
Отношение количества единичек и нулей в массиве для длины массива 10000. <br>
Нулей: ${counts10000[0]}, Единиц: ${counts10000[1]}`;