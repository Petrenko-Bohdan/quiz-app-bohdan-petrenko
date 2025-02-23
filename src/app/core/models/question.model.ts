export interface Question {
	id: number;
	question: Record<string, string>;
  answers: { text: Record<string, string>; correct: boolean }[];
}