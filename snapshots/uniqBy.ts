import R_uniqBy = require('../ramda/dist/src/uniqBy');

declare const number_to_object: (x: number) => object;
declare const number_array: number[];
declare const string_to_any: (x: string) => any;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: number[] | ArrayLike<number>) => number[]
R_uniqBy(number_to_object);
// @dts-jest:pass:snap -> number[]
R_uniqBy(number_to_object)(number_array);
// @dts-jest:pass:snap -> number[]
R_uniqBy(number_to_object, number_array);

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => string[]
R_uniqBy(string_to_any);
// @dts-jest:pass:snap -> string[]
R_uniqBy(string_to_any)(string_array);
// @dts-jest:pass:snap -> string[]
R_uniqBy(string_to_any, string_array);
