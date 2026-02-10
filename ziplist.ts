type ZipResult<T, U> = Array<T | U>;

function zipList<T, U>(a: T[], b: U[]): ZipResult<T, U> {
  if (a.length !== b.length) {
    throw new Error('Lists must be the same length.');
  }

  const result: ZipResult<T, U> = [];

  for (let i = 0; i < a.length; i += 1) {
    result.push(a[i], b[i]);
  }

  return result;
}

function zipListTheFunctionalWay<T, U>(a: T[], b: U[]): Array<T | U> {
  if (a.length !== b.length) {
    throw new Error('Lists must be the same length.');
  }

  return a.reduce<Array<T | U>>((acc, value, i) => {
    acc.push(value, b[i]);
    return acc;
  }, []);
}

// Console output checks:
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));