import nodemailer from "nodemailer"
import {NextRequest, NextResponse} from "next/server";

async function sendMail(data: any) {
    const email = data?.email
    const name = data?.name
    const phone = data?.phone
    const message = data?.message
    const link = data?.link

    const formattedBody = `
    <html>
      <body>
        <p>${message}</p>
        <p>---</p>
        <p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>---</p>
        <p>${link}</p>
      </body>
    </html>
  `

    const transporter = nodemailer.createTransport({
        service: "smtp.mail.ru", // С помощью этой настройки можно менять тип почты, например gmail
        port: 465,
        auth: {
            user: process.env.HOTMAIL_USER,
            pass: process.env.HOTMAIL_PASS,
        },
    })

    return await transporter.sendMail({
        from: process.env.HOTMAIL_FROM,
        to: process.env.HOTMAIL_TO,
        subject: "Заявка с сайта",
        html: formattedBody,
    })
}

export async function POST(req: NextRequest){
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Разрешены только POST-запросы" })
    }

    const r2 = await sendMail({ ...req.body })
    if (r2?.messageId) {
        return NextResponse.json({ ok: true })
    } else {
        return NextResponse.json({ ok: false, message: "Сообщение не отправлено" })
    }
}