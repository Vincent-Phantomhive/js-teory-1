// Первая часть с.84
// 1. Предложите имя переменной для хранения данных
// о максимальной скорости передачи данных (maximum
// data transfer speed).
// let maximumDataTransferSpeed
// 2. Предложите имя переменной для хранения текущего
// дня недели (day of week).
// let dayOfWeek
// 3. Составьте инструкцию, вычисляющую значение
// выражения 2 + (6 / (1 + 2))
// let result = 2 + (6 / (1 + 2))
// console.log(result)
// 4. Составьте выражение, которое истинно при значениях
// переменной «х» из диапазона 0–9 и ложно для других
// значений (например, х=0 — истина, х=3 — истина,
// х=9 — истина, х=–1 — ложь, х=10 — ложь).
// x = prompt('Задание 4. Введите х')
// let trueOrFalse = x <= 9 && x >= 1
// console.log(trueOrFalse)
// 5. Составьте выражение, которое истинно при четных
// значениях переменной «х» из диапазона 0–10 и ложно
// для других значений (например, х=0 — истина, х=3 —
// ложь, х=8 — истина, х=–1 — ложь, х=10 — истина,
// х=12 — ложь).
// let x = prompt('Задание 5. Введите х')
// let trueOrFalseFive = (10 >= x && 0 <= x) && (x % 2 == 0)
// console.log(trueOrFalseFive)
// 6. Составьте инструкции, вычисляющие и определяющие
// типы данных, следующих выражений: 1+true (сум-
// ма числового и логического значений), '1'+2 (сумма
// символьного и числового значений), '1'+false (сумма
// символьного и логического значений).
// console.log(1 + true)
// console.log('1' + 2)
// console.log('1' + false)
// Условный оператор с. 110
// 1. Напишите скрипт, который запрашивает у пользова-
// теля подтверждение некоторого действия (используя
// диалог confirm) и после его ответа выводит сообщение
// «Подтверждено» или «Отменено».
// let x = confirm('Любите котиков?')
// if(x == true) {
//     console.log('Люююбит))')
// }
// else {
//     console.log('Не любит, падла((')
// }
// 2. Напишите скрипт, который запрашивает у пользо-
// вателя пароль подтверждения некоторого действия.
// Допускается три возможных пароля («Step», «Web»
// и «JavaScript»). После ввода пароля скрипт должен
// вывести сообщение «Подтверждено» или «Отменено».
// let x = prompt('Введите пароль:')
// if(x == 'Step' || x == 'Web' || x == 'JavaScript') {
//         console.log('Подтверждено')
// }
// else {
//         console.log('Отменено')
// }
// 3. Напишите скрипт, который запрашивает у пользова-
// теля число «х», проверяет его на принадлежность диа-
// пазону 0..100 и выводит соответствующее сообщение
// (например, 10 — принадлежит, –10 — не принадлежит,
// 0 — принадлежит, 200 — не принадлежит).
// let x = prompt('Введите x:')
// if( x >= 0 && x <= 100) {
//         console.log('Принадлежит')
// }
// else {
//         console.log('Не принадлежит')
// }
// 4. Напишите скрипт, который запрашивает у пользо-
// вателя два числа «х» и «у», сравнивает их величины
// и выводит одно из сообщений: «x > y», «x < y» или
// «x=y» в зависимости от введенных данных.
// let x = prompt('Введите x:')
// let y = prompt('Введите y:')
// if(x > y) {
//         console.log('x > y')
// }
// else {
//         if(x < y) {
//                 console.log('x < y')
//         }
//         else {
//                 console.log('x = y')
//         }
// }
// 5. Напишите скрипт, который запрашивает у пользова-
// теля число «х», «ранжирует» его по диапазонам 0..100,
// 101..200, 201..300 и выводит сообщение о принадлежно-
// сти или несоответствии ни одному из них (например,
// 30 принадлежит диапазону 0..100; 250 — диапазону
// 201..300; –10 или 500 — ни одному).
// let x = prompt('Введите x:')
// if(x >= 0 && x <= 100) {
//         console.log(x + ' принадлежит диапозону 0 - 100');
// }
// else {
//         if(x >= 101 && x <= 200) {
//                 console.log(x + ' принадлежит диапазону 101 - 200');
//         }
//         else {
//                 if(x >= 201 && x <= 300){
//                         console.log(x + ' принадлежит диапазону 201 - 300');
//                 }
//                 else {
//                         console.log(x + ' не принадлежит ни одному диапазону')
//                 }
//         }
// }
// 6. Напишите скрипт, который запрашивает у пользова-
// теля цифру и выводит ее название: 0 — «ноль», 1 —
// «единица», 2 — «двойка» и т.д. Если переменная не
// является цифрой, выводится сообщение «не цифра».
// let x = +prompt('Введите ЦИФРУ:')
// switch(x) {
//         case 0: 
//                 console.log('ноль');
//                 break;
//         case 1: 
//                 console.log('единица');
//                 break;
//         case 2: 
//                 console.log('двойка');
//                 break;
//         case 3: 
//                 console.log('тройка');
//                 break;
//         case 4: 
//                 console.log('четвёрка');
//                 break;
//         case 5: 
//                 console.log('пятёрка');
//                 break;
//         case 6: 
//                 console.log('шестёрка');
//                 break;
//         case 7: 
//                 console.log('семёрка');
//                 break;
//         case 8: 
//                 console.log('восьмёрка');
//                 break;
//         case 9: 
//                 console.log('девятка');
//                 break;
//         default: 
//                 console.log('не цифра');
// }
// Циклы с. 139 - 140
// 1. Напишите скрипт, который запрашивает у пользо-
// вателя число N и выводит все четные числа от 2 до N
// или N-1, если N нечетное. Например: ввод 10, вывод
// 2 4 6 8 10; ввод 7, вывод 2 4 6.
// let n = +prompt('Введите N (N >= 2)')
// let i = 0
// if(n < 2){
//         console.log('Слишком маленькое число')
// }
// if(n % 2 == 1){
//         n = n - 1
// }
// while (i != n || n < 2) {
//         i = i + 2;
//         console.log(i);
// }
// 2. Напишите скрипт, который запрашивает у пользователя
// число N и выводит все нечетные числа от N (или N-1,
// если N четное) до 1 в порядке убывания. Например,
// ввод 7, вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.
// let n = +prompt('Введите N (N >= 1)')
// if (n < 1) {
//         console.log('Число слишком маленькое')
// }
// if (n % 2 == 0) {
//         n = n - 1
// }
// do {
//         console.log(n)
//         n = n - 2
// } while(n >= 1)
// 3. Напишите скрипт, который запрашивает у пользова-
// теля число N и выводит все числа, на которые делится
// N, включая число 1 (примеры: ввод N=10, вывод 1, 2,
// 5; ввод 11, вывод 1).
// let n = +prompt('Введите число N:')
// let i = 1
// while (i != n - 1) {
//         if(n % i == 0) {
//                 console.log(i)
//         }
//         i++
// }
// 4. Напишите скрипт, который принимает от пользователя
// величину годовой депозитной ставки (в процентах)
// и выводит количество лет, по прошествии которых
// вклад увеличится вдвое.
// let vklad = 100
// let procent = +prompt('Введите процент годовой депозитной ставки в процентах')
// let k = 0
// while(vklad < 200) {
//         x = (vklad / 100) * procent
//         vklad = vklad + x
//         k++
// }
// console.log('сумма увеличится вдвое через ' + k + ' лет')
// 5. Напишите скрипт, который выводит ровно 10 слу-
// чайных чисел из диапазона 1–20, кроме тех, которые
// делятся на 4.
// let i = 0
// while(i < 10) {
//         let x = Math.round(Math.random()*19)+1
//         if(x % 4 != 0) {
//                 console.log(x)
//                 i++
//         }
// }
// 6. Из-за утечки из бака охлаждения ежедневно вытекает
// 10% налитой воды. При объеме воды менее 10 литров
// возникает аварийная ситуация. Составьте программу,
// которая запрашивает у пользователя первоначальный
// объем воды и рассчитывает, на сколько дней работы
// этого хватит.
// let x = prompt('Введите начальное количество воды(больше 10 литров):')
// let i = 0
// while(x > 10) {
//         let utechka = x * 0.1
//         x = x - utechka
//         i++
// }
// console.log(i)
// Функции с. 159
// 1. Создайте функцию sayError(), которая будет выво-
// дить (при помощи диалогового окна alert) сообщение
// с текстом «Some error occurred!».
// function sayError() {
//         alert('Some error occurred!')
// }
// sayError()
// 2. Создайте функцию showError(x), которая будет выво-
// дить (при помощи диалогового окна alert) сообщение
// с текстом «Error X occurred!», где Х — текст из аргу-
// мента функции (например, вызов showError(‘Out of
// memory’) должен вывести сообщение «Error Out of
// memory occurred!»).
// function showError(err) {
//         alert(`Error ${err} occurred!`)
// }
// showError('Out of memory')
// 3. Создайте функцию createHeaders(N), которая создаст
// на странице N заголовков второго уровня (<h2>) с над-
// писями Header1, Header2 … HeaderN.
// function createHeaders(N) {
//         for(i = 1; i <= N; i++) {
//                 document.write("<h2> Header "+ i + "</h2>");
//         }
// }
// createHeaders(18)
// 4. Создайте функцию checkPassword(x), которая вернет
// значение true, если в качестве аргумента в нее будет
// передан допустимый пароль (одно из значений «Step»,
// «Web» или «JavaScript»). Иначе функция должна вер-
// нуть false.
// function checkPassword(x) {
//         if(x == 'Step' || x == 'Web' || x == 'JavaScript') {
//                 return console.log(true)
//         }
//         else {
//                 return console.log(false)
//         }
// }
// checkPassword('Web')
// 5. Создайте функцию определения знака числа sign(x),
// которая вернет значение –1, если аргумент «х» — от-
// рицательное число, 1 — если положительное, 0 — если
// аргумент «х» равен нулю.
// function sign(x) {
//         if(x > 0) {
//                 return console.log(1)
//         }
//         else {
//                 if(x < 0) {
//                         return console.log(-1)
//                 }
//                 else {
//                         return console.log(0)
//                 }
//         }
// }
// sign(-9)
// 6. Предложите имя (согласно правилам именования)
// и создайте функцию, которая будет возвращать на-
// звания дней недели по их номеру: 0-Sunday, 1-Monday,
// 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday.
// function dayOfWeek(x) {
//         switch(x) {
//                 case 0:
//                         console.log('Sunday')
//                         break
//                 case 1:
//                         console.log('Monday')
//                         break
//                 case 2:
//                         console.log('Tuesday')
//                         break
//                 case 3:
//                         console.log('Wednesday')
//                         break
//                 case 4:
//                         console.log('Thursday')
//                         break
//                 case 5:
//                         console.log('Friday')
//                         break
//                 case 6:
//                         console.log('Saturday')
//                         break
//         }
// }
// dayOfWeek(6)
// Подробнее о функциях. с 193-194
// 1. Создайте функцию stringFrom(…), возвращающую
// строку, состоящую из значений всех переданных
// аргументов. Например, вызов stringFrom('I have', 5,
// 'apples') вернет строку «I have 5 apples»; вызов string-
// From('Х value is', true) вернет строку «Х value is true».
// let x = ''
// function stringFrom() {
//         for(let i=0; i<arguments.length; i++) {
//                 x = x + arguments[i]
//         }
//         return console.log(x)
// }
// stringFrom('Привет, ', 'я ', 'яблоко')
// 2. Создайте функцию, возвращающую значение мини-
// мального из всех переданных аргументов.
// function Min() {
//         let min = 0
//         for(x in arguments) {
//                 if(arguments[x] <= arguments[min]) {
//                         min = x
//                 }
//         }
//         return console.log(arguments[min])
// }
// Min(30, 6, -1, 8, -10, 4)
// 3. Создайте функцию numbers(), которая будет подсчи-
// тывать количество переданных числовых аргументов.
// Например, numbers(1, 2, “a”) вернет значение 2, numbers(
// true, 2, false) — 1, numbers() — 0.
// function numbers() {
//         let i = 0
//         for(x of arguments) {
//                 if(typeof x == 'number') {
//                         i++
//                 }
//         }
//         return console.log(i)
// }
// numbers(2, 3, 5, 'fhsj', true)
// 4. Создайте функцию mean(), которая рассчитает сред-
// нее значение от всех числовых аргументов, игнорируя
// аргументы нечислового типа. Например, mean (1, 2,
// “a”) вернет значение 1.5 (среднее 1 и 2), mean(true, 2,
// false) — 2, mean() — 0.
// function mean() {
//         let summ = 0
//         let i = 0
//         for(x of arguments) {
//                 if(typeof x == 'number') {
//                        i++
//                         summ = summ + x
//                 }
//                 cred = summ/i
//         }
//         return console.log(cred)
// }
// mean(3, 4, 'fjfjf', true, 5, -3)
// 5. Напишите рекурсивную функцию, которая проверяет,
// является ли переданный аргумент степенью двойки
// (например, числа 8=23, 32=25 — это степени двойки,
// а числа 7 или 12 — нет). Подсказка: если число «х» де-
// лится на два, то нужно проверить, является ли число
// «х/2» степенью двойки.
// let i = 0
// function stepen2(x) {
//         if(x % 2 == 0) {
//                 x = x / 2
//                 i++
//                 stepen2(x)
//                 return i
//         }
//         else { 
//                 if (x == 1) {
//                         return i
//                 }
//                 else {
//                         i = 'нет'
//                         return i
//                 }   
//         }
// }
// console.log(stepen2(8))
// 6. Напишите рекурсивную функцию, которая выводит
// число N «справа налево», то есть последняя цифра
// числа становится первой, предпоследняя — второй
// и т.д. (например, ввод N=123, вывод 321; ввод N= 12,
// вывод 21). Обеспечьте ввод пользователем числа
// N и вывод его «справа налево» вызовом функции.
// Подсказка: последняя цифра числа «х» это остаток
// от деления на 10 (х%10), а остальные цифры можно
// отделить, поделив «х» на 10 нацело (parseInt(х/10)).
// let chiclo = ''
// function parseInt(x) {
//         if(x >= 1) {
//                 chiclo = chiclo + (x % 10)
//                 x = Math.floor(x / 10)
//                 parseInt(x)
//         }
//         return chiclo
// }
// console.log(parseInt(123))
