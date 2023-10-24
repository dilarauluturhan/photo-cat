const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'Photo name',
    desc: 'Photo description',
  };
  res.send(photo);
});

// server'ın çalışması için listen metodunu yaz
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}'de baslatildi..`);
});
