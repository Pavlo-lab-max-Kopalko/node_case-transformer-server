const { makeCamelCase } = require('./makeCamelCase');

function returnText(text, toCase) {
  switch (toCase) {
    case 'SNAKE':
      const validTextSNAKE = text.split(' ').join('_').toLowerCase();

      return validTextSNAKE;

    case 'KEBAB':
      return text.split(' ').join('-').toLowerCase();

    case 'CAMEL':
      const camelText = text
        .split(' ')
        .map((word, index) => {
          return makeCamelCase(word, index);
        })
        .join(' ');

      return camelText;

    case 'PASCAL':
      const pascalText = text.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });

      return pascalText;

    case 'UPPER':
      const upperCase = text.split(' ').map((word) => word.toUpperCase());

      return upperCase;
  }
}

module.exports = { returnText };
