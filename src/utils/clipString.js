export default function clipString(inputString, maxLength) {
  if (inputString.length <= maxLength) {
    return inputString;
  }

  inputString = inputString.slice(0, maxLength);
  inputString += "...";

  return inputString;
}