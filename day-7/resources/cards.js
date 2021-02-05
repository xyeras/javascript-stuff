const suits = ['D',  'C', 'H', 'S'];
const values = ['2', '3', '4', '5', '6','7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['red', 'black'];


function createDeck() {
    const deck = [];

    // actually create deck;
    for (let i = 0; i < 52; i++) {
        const suit = i % 4;
        const color = i % 2;
        const value = i % 13;
        const card = {suit: suits[suit], color: colors[color], text: values[value], value: value}
        deck.push(card);
    
    }
    
    // sort order of value;
    deck.sort(function(a, b) {
        const isLarger = a.value > b.value;
        if (isLarger) {
            return +1;
        } else {
            return -1;
        }
    });
    
    console.log('deck', deck);
    
    // build card html and map result
    return deck.map(function(item) {
        const card = document.createElement('div');
        card.classList.add('card');
    
        if (item.suit === 'D' || item.suit === 'H') {
            card.classList.add('red');
        }
    
        if (item.suit === 'C' || item.suit === 'S') {
            card.classList.add('black');
        }
        return {card, item}
    })
   
}

// executes the blueprint
createDeck()
.sort( () => Math.random() > .5 ? -1 : 1)  // randomize
.forEach( (object) => { // add html to body;
         document.body.appendChild(object.card);
        object.card.innerHTML = `<span>${object.item.text}</span> <span>${object.item.suit}</span>  `
   
});
createDeck();