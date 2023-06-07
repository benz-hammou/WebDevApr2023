var fs = require('fs');

fs.rename('mynewfile12text', 'myrenamedfile1.txt', function (err) {
  if (err) throw err;
  console.log('First File Renamed!');
});
fs.rename('mynewfile1.text', 'myrenamedfile2.txt', function (err) {
  if (err) throw err;
  console.log('Seconde File Renamed!');
});
fs.rename('mynewfile2.text', 'myrenamedfile3.txt', function (err) {
  if (err) throw err;
  console.log('Third File Renamed!');
});