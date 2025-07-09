import cards from '../data/tarotCards.json';

export function getRandomTarotCards(count: number = 3) {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(card => ({
        ...card,
        reversed: Math.random() > 0.5
    }));
}