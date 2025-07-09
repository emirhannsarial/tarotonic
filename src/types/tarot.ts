export interface TarotCard {
    id: number;
    name: string;
    number: string;
    arcana: string;
    suit: string;
    img: string;
    fortuneTelling: string[];
    keywords: string[];
    meanings: {
        light: string[];
        shadow: string[];
    };
    elemental?: string;
    affirmation?: string;
    astrology?: string;
    archetype?: string;
    hebrewAlphabet?: string;
    numerology?: string;
    mythicalSpiritual?: string;
    questionsToAsk?: string[];
    reversed: boolean;
}