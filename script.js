'use strict'

const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
const task4  = document.querySelector('.task4');
const task5  = document.querySelector('.task5');
const task6  = document.querySelector('.task6');
const task7  = document.querySelector('.task7');
const task8  = document.querySelector('.task8');
const task9  = document.querySelector('.task9');

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

//4. Заполнить массив (100 элементов) случайными целыми значениями со знаком. Создать два массива,
// один из которых заполнить положительными, а другой отрицательными значениями из первого массива.
let array24 = []
for (let i = 0; i < 100; i++) {
    array24.push(Math.floor(((Math.random() < 0.5) ? Math.random() * -1000 : Math.random() * 1000)))
}
console.log(array24);

let arrayPositive = [];
let arrayNegative = [];  
for (let i = 0; i < array24.length; i++) {
    if (array24[i] > 0) {
        arrayPositive.push(array24[i])
    } else {
        arrayNegative.push(array24[i])
    }
  }
console.log(arrayPositive);
console.log(arrayNegative);
task4.innerHTML = `Массив содержит ${array24.length} случайных отрицательных и положительных чисел в диапазоне от -1000 до 1000 <br>
 из них ${arrayPositive.length} чисел положительных и ${arrayNegative.length} отрицательных.` ;
//5. Создать текстовый файл, который заполнить 100 случайными значениями - число с плавающей точкой,
// округленные до 2х знаков после запятой. Разделитель целой и дробной части точка.

let array25 = []
for (let i = 0; i < 10; i++) {
    array25.push(parseFloat(Math.random() * 1000).toFixed(2))
}
console.log(array25);
task5.innerHTML = `Для экономии места создадим 10 случайных чисел с плавающей запятой <br>
 ${array25.join('<br>')}` ;

//6. Дан текстовый файл, в каждой строке которого содержится число с плавающей точкой,
//  точность два знака после запятой, разделитель точка. Создать текстовый файл в котором
//   в каждой строке записаны два числа - исходное, и число составляющее 18% от него,
//    округлить до 2х знаков после запятой. Разделить их точкой с запятой.
//  Решить задачу с применением хранения значений в виде массива структур и без него.
let array26 = [];
for (let i = 0; i < 10; i++) {
    array26.push(parseFloat(Math.random() * 100).toFixed(2))
}
console.log(array26);

let array266 = [];
array26.forEach((item)=>{
    array266.push(parseFloat(item*0.18).toFixed(2)) 
})
console.log(array266);

let str = '';
for (let i = 0; i< array26.length; i++) {
if (array26[i]!==undefined) str +=i + ' - '+array26[i]+'(100%)' + ' - ' + array266[i] + '(18%)' + '<br>';
}


task6.innerHTML = `Нам дан массив случайных чисел <br> ${array26.join('; ')},<br> 
Выводим на экран исходное число и 18% от его значения: <br>
${str}`;

//7. Дан текстовый файл, в каждой строке которого содержатся два числа с плавающей точкой.Между собой
// разделены точкой с запятой.
// Проверить выполняется ли условие, что второе число составляет 18% от первого.


//8. Дан текстовый файл. Подсчитать отношение количества встречающихся в файле гласных буквы
// русского алфавита (для каждой буквы отдельно) к общему количеству символов в файле.
// Результат вывести (букву и отношение) на экран в порядке убывания.

let string = '"Заря прощается с землею, ложится пар на дне долин, смотрю на лес, покрытый мглою, и на огни его вершин."'
let charCount = Array.from(string).length;
console.log(charCount); 


// Буква А
function wordsV1() {
    let k = 0;
    let v1 = ["а"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v1.length; j++)
            if (string[i].toLowerCase() === v1[j]) {
                ++k;
                break;
            }  
    return k ? k : "Нет совпадений";
          
};
// Буква Е
function wordsV2() {
    let k = 0;
    let v2 = ["е"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v2.length; j++)
            if (string[i].toLowerCase() === v2[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква Ё
function wordsV3() {
    let k = 0;
    let v3 = ["ё"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v3.length; j++)
            if (string[i].toLowerCase() === v3[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква И
function wordsV4() {
    let k = 0;
     let v4 = ["и"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v4.length; j++)
            if (string[i].toLowerCase() === v4[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква О
function wordsV5() {
    let k = 0;
    let v5 = ["о"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v5.length; j++)
            if (string[i].toLowerCase() === v5[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква У
function wordsV6() {
    let k = 0;
    let v6 = ["у"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v6.length; j++)
            if (string[i].toLowerCase() === v6[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква Ы
function wordsV7() {
    let k = 0;
    let v7 = ["ы"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v7.length; j++)
            if (string[i].toLowerCase() === v7[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква Э
function wordsV8() {
    let k = 0;
    let v8 = ["э"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v8.length; j++)
            if (string[i].toLowerCase() === v8[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква Ю
function wordsV9() {
    let k = 0;
    let v9 = ["ю"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v9.length; j++)
            if (string[i].toLowerCase() === v9[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
};
// Буква Я
function wordsV10() {
    let k = 0;
    let v10 = ["я"];

    for (let i = 0; i < string.length; i++)
        for (let j = 0; j < v10.length; j++)
            if (string[i].toLowerCase() === v10[j]) {
                ++k;
                break;
            } 
    return k ? k : "Нет совпадений";
}

task8.innerHTML = `Дана строка: <br> ${string} <br> Общее число символов в ней:
 ${charCount}<br>
 Буква А - ${wordsV1()} из ${charCount} символов <br>
 Буква Е - ${wordsV2()} из ${charCount} символов <br>
 Буква Ё - ${wordsV3()} из ${charCount} символов <br>
 Буква И - ${wordsV4()} из ${charCount} символов <br>
 Буква О - ${wordsV5()} из ${charCount} символов <br>
 Буква У - ${wordsV6()} из ${charCount} символов <br>
 Буква Ы - ${wordsV7()} из ${charCount} символов <br>
 Буква Э - ${wordsV8()} из ${charCount} символов <br>
 Буква Ю - ${wordsV9()} из ${charCount} символов <br>
 Буква Я - ${wordsV10()} из ${charCount} символов <br>`

//. Дан текстовый файл, в каждой строке которого находится наименование товара. 
//Наименование может заканчиваться строкой в круглых скобках. Исключить из строки
// текст в скобках (включая скобки) и подсчитать, сколько уникальных строк встречается в файле.