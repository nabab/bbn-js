const isIterable = function (v): boolean
{
	return v && typeof v === 'object' && Symbol.iterator in Object(v);
};

export { isIterable };
