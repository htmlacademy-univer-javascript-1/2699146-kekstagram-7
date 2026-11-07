// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

// Дополнительное задание: извлечение цифр
const extractDigits = (value) => {
  const stringValue = value.toString();
  let result = '';

  for (let i = 0; i < stringValue.length; i++) {
    const parsedDigit = parseInt(stringValue[i], 10);

    if (!Number.isNaN(parsedDigit)) {
      result += parsedDigit;
    }
  }

  return parseInt(result, 10);
};

checkStringLength('проверяемая строка', 20);
isPalindrome('топот');
extractDigits('2023 год');
