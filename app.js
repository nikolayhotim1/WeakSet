let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: были ли сообщения message[0], message[1] прочитаны?
alert("Read message 0: " + readMessages.has(messages[0])); // true
alert("Read message 0: " + readMessages.has(messages[1])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
alert("Read message 0: " + readMessages.has(messages[0])); // true
alert("Read message 0: " + readMessages.has(messages[1])); // false
