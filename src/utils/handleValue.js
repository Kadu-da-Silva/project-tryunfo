export default function handleValue(type, value) {
  switch (type) {
  case 'number':
    return Number(value);
  case 'string':
    return String(value).trim;
  default:
    return value;
  }
}
