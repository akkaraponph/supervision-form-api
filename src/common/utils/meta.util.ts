interface PaginationMeta {
	totalRecords: number;
	totalPages: number;
	currentPage: number;
	previousPage?: number;
	nextPage?: number;
	previousLink?: string;
	nextLink?: string;
}

export const getPaginationMeta = (endpoint: string, page: number, limit: number, count: number): PaginationMeta => {
	const totalPages = Math.ceil(count / limit); // Calculate the total number of pages

	const meta: PaginationMeta = {
		totalRecords: count,
		totalPages: totalPages,
		currentPage: page,
	};

	if (page > 1) {
		const prevPage = page - 1;
		meta.previousPage = prevPage;
		meta.previousLink = `${endpoint}?page=${prevPage}&limit=${limit}`;
	}

	if (page < totalPages) {
		const nextPage = page + 1;
		meta.nextPage = nextPage;
		meta.nextLink = `${endpoint}?page=${nextPage}&limit=${limit}`;
	}

	return meta;
};
