export interface BookInterface {
	id: string;
	name: string;
	author: string;
	cover: string | null;
	quotes: string[];
	startedReading: string | null;
	endedReading: string | null;
}
