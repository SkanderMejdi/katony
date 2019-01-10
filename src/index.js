export const H = 'HEART';
export const D = 'DIAMOND';
export const S = 'SPARE';
export const C = 'CLUB';

export function highCard(hand) {
    let highestCard;

    hand.forEach(card => {
        if (!highestCard || highestCard.value < card.value) {
            highestCard = card;
        }
    });

    return highestCard;
}

export function pair(hand) {
    for (let i = 0; i < hand.length - 1; i++) {
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[i].value === hand[j].value) {
                return true;
            }
        }
    }
    return false;
}

export function doublePair(hand) {
    let countPair = 0;

    for (let i = 0; i < hand.length - 1; i++) {
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[i].value === hand[j].value && ++countPair === 2) {
                return true;
            }
        }
    }
    return false;
}

export function threeOfAKind(hand) {

    for (let i = 0; i < hand.length - 1; i++) {
        let countCard = 1;
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[i].value === hand[j].value && ++countCard === 3) {
                return true;
            }
        }
    }
    return false;
}

export function straight(hand) {
    let values = hand.map(card => card.value).sort();
    return values[4] - values[0] === 4;
}

export function flush(hand) {
    return hand[0].color === hand[1].color
        && hand[0].color === hand[2].color
        && hand[0].color === hand[3].color
        && hand[0].color === hand[4].color;
}

export const fullHouse = hand => doublePair(hand) && threeOfAKind(hand);
