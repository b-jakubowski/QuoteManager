import { BookInterface } from '../../app/books/book.interface';

export const booksMock: BookInterface[] = [
	{
		id: '1',
		name: 'The Two Towers',
		author: 'J.R.R. Tolkien',
		cover: 'https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif',
		quotes: [
			{
				id: '1',
				categoriesIds: ['4', '5'],
				bookId: '1',
				quote: 'There is some good in this world, and it’s worth fighting for'
			},
			{
				id: '2',
				categoriesIds: ['5', '6'],
				bookId: '1',
				quote: 'War must be, while we defend our lives against a destroyer who would devour all; but I do not love the ' +
					'bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only ' +
					'that which they defend'
			},
			{
				id: '3',
				categoriesIds: ['6'],
				bookId: '1',
				quote: 'I was talking aloud to myself. A habit of the old: they choose the wisest person present to speak to'
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
				id: '4',
				categoriesIds: ['5'],
				bookId: '2',
				quote: 'And I like large parties. They’re so intimate. At small parties there isn’t any privacy.'
			}
		],
		startedReading: null,
		endedReading: null
	},
	{
		id: '3',
		name: 'Deep Work',
		author: 'Cal Newport',
		cover: 'https://images-na.ssl-images-amazon.com/images/I/41QoykqonNL._SX317_BO1,204,203,200_.jpg',
		quotes: [
			{
				id: '5',
				categoriesIds: ['1', '5'],
				bookId: '3',
				quote: 'If you don’t produce, you won’t thrive—no matter how skilled or talented you are'
			},
			{
				id: '6',
				categoriesIds: ['1', '8'],
				bookId: '3',
				quote: 'Clarity about what matters provides clarity about what does not.'
			},
			{
				id: '7',
				categoriesIds: ['1', '8'],
				bookId: '3',
				quote: 'Two Core Abilities for Thriving in the New Economy 1. The ability to quickly master hard things. ' +
					'2. The ability to produce at an elite level, in terms of both quality and speed'
			},
			{
				id: '8',
				categoriesIds: ['1', '5', '8'],
				bookId: '3',
				quote: 'Two Core Abilities for Thriving in the New Economy 1. The ability to quickly master hard things. ' +
					'2. The ability to produce at an elite level, in terms of both quality and speed'
			}
		],
		startedReading: null,
		endedReading: null
	},
	{
		id: '4',
		name: 'The Shining',
		author: 'Stephen King',
		cover: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg',
		quotes: [
			{
				id: '9',
				categoriesIds: ['5'],
				bookId: '4',
				quote: 'Monsters are real. Ghosts are too. They live inside of us, and sometimes, they win'
			}
		],
		startedReading: null,
		endedReading: null
	},
];
