const paginateArray = <T>(array: T[], limit: number) => {
	const result: T[][] = [];
	for (let i = 0; i < Math.ceil(array.length / limit); i++) {
		const start = i * limit;
		const end = i * limit + limit;
		result.push(array.slice(start, end));
	}
	return result;
};

export { paginateArray };
