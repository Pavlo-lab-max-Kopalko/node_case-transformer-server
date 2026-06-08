function makeCamelCase(word, index) {
  return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = { makeCamelCase };
