import { QuoteInterface } from '../quotes/quote.interface';

export interface BookInterface {
	id: string;
	name: string;
	author: string;
	cover: string | null;
	quotes: QuoteInterface[];
	startedReading: string | null;
	endedReading: string | null;
}
