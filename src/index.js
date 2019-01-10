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