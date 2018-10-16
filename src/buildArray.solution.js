function buildArrayOfNums(x) {
  try {
    x = parseInt(x);
    return new Array(x).fill().map((x, i) => i + 1);
  } catch (e) {
    return undefined;
  }
}

export { buildArrayOfNums };
