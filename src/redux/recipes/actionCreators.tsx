import * as a from './actionTypes';

export const fillInitially = (recipes) => {
	return {
		type: a.FILL_INITIALLY,
		payload: recipes
	};
};

export const loadMore = (recipes) => {
	return {
		type: a.LOAD_MORE,
		payload: recipes
	};
};

export const setCount = (recipesCount) => {
	return {
		type: a.SET_COUNT,
		payload: recipesCount
	};
};
