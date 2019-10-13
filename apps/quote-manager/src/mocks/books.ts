import { BookInterface } from '../app/books/book.interface';

export const booksMock: BookInterface[] = [
	{
		id: '1',
		name: 'Two Towers',
		author: 'J.R.R. Tolkien',
		cover: 'https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif',
		quotes: [
			{
				id: '1',
				categoriesIds: ['4', '5'],
				bookId: '1',
				quote: 'There is some good in this world, and it’s worth fighting for'
			}
		],
		startedReading: null,
		endedReading: null
	},
	{
		id: '2',
		name: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		cover: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg',
		quotes: [
			{
				id: '1',
				categoriesIds: ['5'],
				bookId: '2',
				quote: 'And I like large parties. They’re so intimate. At small parties there isn’t any privacy.'
			}
		],
		startedReading: null,
		endedReading: null
	},
];
