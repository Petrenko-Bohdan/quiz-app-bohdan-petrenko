export interface Question {
	id: number;
	question: {en: string, pl: string};
	answers: {text: {en: string, pl: string}, correct: boolean}[];
}