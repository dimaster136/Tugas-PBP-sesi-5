const { celciusToFahrenheit } = require('./rumusSuhu');

const suhuCelcius = 30;
const hasilFahrenheit = celciusToFahrenheit(suhuCelcius);

console.log(`Hasil Konversi: ${suhuCelcius}°C setara dengan ${hasilFahrenheit}°F`);