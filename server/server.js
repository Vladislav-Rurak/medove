const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.all('/api/send-email', async (req, res) => {
  const { name, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rurakvladislav@gmail.com',
      pass: 'cian lowk siii uvwb',
    },
  });

  const mailOptions = {
    from: 'medove@gmail.com',
    to: 'rurakvladislav@gmail.com',
    subject: 'Повідомлення з Medove',
    text: `Имя: ${name}\n\nТелефон: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Ваш заказ успешно отправлен.' });
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    res.status(500).json({ message: 'Ошибка при отправке заказа.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
