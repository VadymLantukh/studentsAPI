import nodemailer from 'nodemailer';
import { env } from './env.js';
import { SMTP } from '../constants/SMTP.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (option) => {
  return await transporter.sendMail(option);
};
