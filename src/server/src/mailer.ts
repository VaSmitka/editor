// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import type { Application } from './declarations'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'


export const mailer = (app: Application) => {
  
  require('dotenv').config();
  const transport = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.mailSmtp,
    port: process.env.mailPort,
    auth: {
              user: process.env.mailUser,
              pass: process.env.mailPass
          }
  });

  // point to the template folder
  const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./templateViews/'),
        defaultLayout: false
    },
    viewPath: path.resolve('./templateViews/'),
  };

  // use a template file with nodemailer
  // @ts-ignore
  transport.use('compile', hbs(handlebarOptions))

  app.set('mailerClient', transport)
}
