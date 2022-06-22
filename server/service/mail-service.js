import {createTransport} from 'nodemailer';

class MailService {

    constructor(){
        this.transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            ayth: {
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASSWORD,
            }
        });
    }

    async sendActivationMail(toEmail, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            toEmail,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `<div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>`
        });
    }
}

export {MailService};
