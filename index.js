function writeCards(names, event) {
    let completedCards = []
    for (let i=0; i < names.length; i++) {
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return completedCards
}

function countDown(x) {
    while (x > 0) {
        console.log(x);
        x -= 1;
    }
    console.log(x);
}