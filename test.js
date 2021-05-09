var fs = require("fs");



// Прочитал БД с сообщениями в чате
var messagesRead = fs.readFileSync('messages.json')
// Спарсил JSON файл messagesRead в обект
var messagesParse = JSON.parse(messagesRead)
// База данных
var db = messagesParse[2]
// Таблица в базе данных
var dbTable = messagesParse[2].data
// ID последней записи конкатированный в числовое значение
let lastId = messagesParse[2].data.length
console.log("------------------------------")
console.log("ID последней записи конкатированный в числовое значение")
console.log("------------------------------")
console.log(lastId)

console.log("База данных")
console.log("---------------------------------------------------------------")
console.log(db)

console.log("Таблица в базе данных")
console.log("---------------------------------------------------------------")
console.log(dbTable)

var requestSMS = "New SMS!"

dbTable.push({id: ++lastId, text: requestSMS})

console.log(dbTable)

var requestSMS1 = "Hi!"

dbTable.push({id: ++lastId, text: requestSMS1})

console.log(dbTable)
console.log(JSON.stringify(messagesRead))

fs.writeFileSync('messages.json', JSON.stringify(messagesParse));

// Прочитал БД с сообщениями в чате
var messagesRead = fs.readFileSync('messages.json')
// Спарсил JSON файл messagesRead в обект
var messagesParse = JSON.parse(messagesRead)

console.log(messagesParse[2]);

// Хороший пример
// var obj = {12859: 1, 12860: 2, 12861: 3}
// var keys = Object.keys(obj); //получаем ключи объекта в виде массива
// console.log(obj[keys[0]]); // первый элемент
// console.log(obj[keys[keys.length - 1]]); //последний элемент