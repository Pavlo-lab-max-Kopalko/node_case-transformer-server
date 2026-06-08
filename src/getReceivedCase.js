function getReceivedCase(text) {
  const snakeCaseRegex = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;
  const kebabRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  const camelCase = /^[a-z][a-zA-Z0-9]*$/;
  const pascalRegex =
    /^(?=\p{Lu})[\p{Lu}\p{Ll}\p{N}]*\p{Ll}[\p{Lu}\p{Ll}\p{N}]*$/u;
  const upperCase = /^[\p{Lu}\p{N}_]+$/u;

  const arrTruth = [
    [snakeCaseRegex, 'SNAKE'],
    [kebabRegex, 'KEBAB'],
    [camelCase, 'CAMEL'],
    [pascalRegex, 'PASCAL'],
    [upperCase, 'UPPER'],
  ];

  for (const el of arrTruth) {
    if (el[0].test(text)) {
      return el[1];
    }
  }

  return undefined;
}

module.exports = { getReceivedCase };
