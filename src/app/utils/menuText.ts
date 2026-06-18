const LOWERCASE_WORDS = new Set([
  'a',
  'al',
  'con',
  'de',
  'del',
  'el',
  'en',
  'la',
  'las',
  'los',
  'o',
  'para',
  'sin',
  'y',
]);

const LOWERCASE_UNITS = new Set(['cc', 'g', 'kg', 'ml', 'oz']);

const LETTER_OR_NUMBER_PATTERN = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]/;

const formatWord = (word: string, isFirstWord: boolean) => {
  if (!LETTER_OR_NUMBER_PATTERN.test(word)) {
    return word;
  }

  const match = word.match(
    /^([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]*)([A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+)([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]*)$/,
  );

  if (!match) {
    return word;
  }

  const [, prefix, core, suffix] = match;
  const normalizedCore = core.toLowerCase();

  if (LOWERCASE_UNITS.has(normalizedCore) || /^x\d+$/.test(normalizedCore)) {
    return `${prefix}${normalizedCore}${suffix}`;
  }

  if (/^\d/.test(core) || /^[A-ZÁÉÍÓÚÜÑ0-9]+$/.test(core)) {
    return `${prefix}${core}${suffix}`;
  }

  if (core.length === 1) {
    return `${prefix}${core.toUpperCase()}${suffix}`;
  }

  if (!isFirstWord && LOWERCASE_WORDS.has(normalizedCore)) {
    return `${prefix}${normalizedCore}${suffix}`;
  }

  return `${prefix}${normalizedCore.charAt(0).toUpperCase()}${normalizedCore.slice(1)}${suffix}`;
};

export const formatMenuText = (text: string) => {
  let isFirstWord = true;

  return text
    .split(/(\s+|\/|\+)/)
    .map((part) => {
      if (!part || /^\s+$/.test(part) || part === '/' || part === '+') {
        return part;
      }

      const formattedPart = formatWord(part, isFirstWord);
      isFirstWord = false;
      return formattedPart;
    })
    .join('');
};
