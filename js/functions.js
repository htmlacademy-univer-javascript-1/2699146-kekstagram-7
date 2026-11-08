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

// Вспомогательная функция, которая переводит строку 'ЧЧ:ММ' в количество минут
const parseTime = (timeString) => {
  const timeElements = timeString.split(':');
  const hours = parseInt(timeElements[0], 10);
  const minutes = parseInt(timeElements[1], 10);

  return hours * 60 + minutes;
};

// Основная функция для проверки времени встречи
const checkMeetingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartInMinutes = parseTime(workStart);
  const workEndInMinutes = parseTime(workEnd);
  const meetingStartInMinutes = parseTime(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingStartInMinutes >= workStartInMinutes && meetingEndInMinutes <= workEndInMinutes;
};

checkStringLength('проверяемая строка', 20);
isPalindrome('топот');
extractDigits('2023 год');
checkMeetingTime('08:00', '17:30', '14:00', 90);
