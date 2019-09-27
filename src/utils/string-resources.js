module.exports = Object.freeze({
  MAX_UBYTE: 0xff,
  MAX_USHORT: 0xffff,
  MAX_UINT: 0xffffffff,
  MAX_ULONG: 0xffffffffffffffff,

  MIN_BYTE: -128,
  MAX_BYTE: 127,

  MIN_SHORT: -32768,
  MAX_SHORT: 32767,

  MIN_INT: -2147483648,
  MAX_INT: 2147483647,
  
  MIN_LONG: -9223372036854775808,
  MAX_LONG: 9223372036854775807,

	CANNOT_CONSTRUCT_DIRECTLY: 'Cannot construct instance directly',
	CANNOT_CONSTRUCT_WITHOUT_BUILDER: 'Cannot construct an instance without a builder',
	TOO_MANY_CONSTRUCT_PARAMS: `Too many parameters for the constructor`,
  NOT_SUPPORTED_OBJECT_TYPE: 'Not supported object type',

	INVALID_ENUM_VALUE: "Invalid enum value",

  getErrNumberNotInRange( p, low, up ){
    return `${p} must be a number between ${low} and ${up}`;
  },

  getErrUByteNotInRange( p ){
    return this.getErrNumberNotInRange( p, 0, this.MAX_UBYTE );
  },

  getErrUShortNotInRange( p ){
    return this.getErrNumberNotInRange( p, 0, this.MAX_USHORT );
  },

  getErrUIntNotInRange( p ){
    return this.getErrNumberNotInRange( p, 0, this.MAX_UINT );
	},
	
	getErrMustBeString( p ){
		return `${p} must be a string`;
	},

	
	

});

