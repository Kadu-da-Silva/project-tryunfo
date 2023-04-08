// Valida os campos Attr1, Attr2, Attr3
export default function validateNumber(atr1, atr2, atr3) {
  const MAX_VALUE = 90;
  const MAX_SUM = 210;

  return (atr1 >= 0 && atr1 <= MAX_VALUE)
        && (atr2 >= 0 && atr2 <= MAX_VALUE)
        && (atr3 >= 0 && atr3 <= MAX_VALUE)
        && (atr1 + atr2 + atr3 <= MAX_SUM);
}
