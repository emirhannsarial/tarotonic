import { TarotCard } from '../types';
import cards from '../data/tarotCards.json';

export function getAllCards(): TarotCard[] {
    return (cards as any[]).map(card => ({
        reversed: false, // default değer ver
        ...card,
    })) as TarotCard[];
}