const nodemailer = require('nodemailer');

async function sendEmail() {
    // Создайте транспорт для отправки писем
    let transporter = nodemailer.createTransport({
        host: ' smtp.google.com', // Замените на SMTP сервер вашего почтового провайдера
        port: 587, // Обычно 587 или 465
        secure: false, // true для 465, false для других портов
        auth: {
            user: 'sanyaburmantov@gmail.com', // Ваш email
            pass: 'Z1x2c3v4b5!!228Sanya', // Ваш пароль
        },
    });

    // Определите параметры письма
    let mailOptions = {
        from: '"Sender Name" <your_email@example.com>', // От кого
        to: 'sanyaburmantov@gmail.com', // Кому
        subject: 'Hello from Node.js', // Тема
        text: 'Hello, this is a test email sent from a Node.js application!', // Текст письма
    };

    // Отправьте письмо
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

// Вызов функции отправки письма
sendEmail();