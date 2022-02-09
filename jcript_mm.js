// Storage for the sentence blocks
const message = {
    order: ['must', 'should', 'could', 'should never'],
    who: ['You', 'Mark Zuckerberg', 'Arnold Schwarzenegger', 'An alien', 
    'Your boss', 'John Wick', 'Donald Duck'],
    what: ['paint', 'sing for', 'jump over', 'dance around', 'kiss', 
    'write a poem about', 'kick', 'hug', 'skip over'],
    where: ['the Eiffel Tower.', 'the Pyramids.', 'a dog kennel.', 
    'Mount Everest.', 'a camel', 'the supermarket cashier']
};
// Function to generate a random phrase 
let randomize = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
};
// Message text block and button
const messageOutput = document.getElementById('message');
const adviceButton = document.getElementById('get-advice');
// Generating random sentemce after clicking the button
adviceButton.addEventListener( 'click', () => {
    let outputText = (randomize(message.who)+ ' ' + randomize(message.order)+ ' ' + randomize(message.what)+ ' ' + randomize(message.where));

     messageOutput.innerText = outputText;
})



