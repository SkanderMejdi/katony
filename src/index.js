export const H = 'HEART';
export const D = 'DIAMOND';
export const S = 'SPARE';
export const C = 'CLUB';

export function highCard(hand)
{
    let highestCard;

    hand.forEach(card => {
        if (!highestCard || highestCard.value < card.value) {
            highestCard = card;
        }
    });

    return highestCard;
}

export function pair(hand) {
    for(let i = 0; i < hand.length - 1; i++) {
        for(let j = i + 1; j < hand.length; j++) {
            if (hand[i].value === hand[j].value) {
                return true;
            }
        }
    }
    return false;
}