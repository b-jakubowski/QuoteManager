import { QuoteCategoryInterface } from './quote-category.interface';
import { BookInterface } from '../books/book.interface';

export interface QuoteInterface {
	id: number;
	category: QuoteCategoryInterface[] | null;
	cover: BookInterface;
	quotes: string[];
}
