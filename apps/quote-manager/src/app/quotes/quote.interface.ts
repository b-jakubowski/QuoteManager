export interface QuoteInterface {
	id: string;
	categories: string[] | null;
	bookId?: string;
	quote: string;
}
