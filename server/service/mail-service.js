import {createTransport} from 'nodemailer';
import {smtp_host, smtp_port, smtp_user, smtp_password, api_url} from '../configs/db-config.js';

class MailService {

    constructor(){
        this.transporter = createTransport({
            host: smtp_host,
            port: smtp_port,
            secure: true,
            auth: {
                user: smtp_user,
                pass: smtp_password,
            },
            tls: {
                ciphers: 'SSLv3',
            }
        });
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: smtp_user,
            to,
            subject: 'Активация аккаунта на ' + api_url,
            text: 'Text',
            html:
                `<div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>`
        });
    }
}

export {MailService};
