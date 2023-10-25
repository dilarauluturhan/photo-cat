const express = require('express');
const path = require('path');

const app = express();

// middleware
// middleware'ı çalıştırmak için use fonksiyonu kullanılır
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

// server'ın çalışması için listen metodunu yaz
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}'de baslatildi..`);
});
