
const message = {
    order: ['must', 'should', 'could', 'should never'],
    who: ['You', 'Mark','Sekine', 'An alien'],
    what: ['paint', 'sing at', 'jump over', 'dance around', 'kiss'],
    where: ['the Eiffel Tower.', 'the Pyramids.', 'a dog kennel.', 'Mount Everest.']
};
let randomize = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
};
const messageOutput = document.getElementById('message');
const adviceButton = document.getElementById('get-advice');
adviceButton.addEventListener( 'click', () => {
    let outputText = (randomize(message.who)+ ' ' + randomize(message.order)+ ' ' + randomize(message.what)+ ' ' + randomize(message.where));

     messageOutput.innerText = outputText;
})



