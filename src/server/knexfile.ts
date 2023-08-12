// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import { app } from './src/app'

// Load our database connection info from the app configuration
const config = (process.env.NODE_ENV === 'dev') ? app.get('sqlite') : {
        ...app.get('postgresql')!,
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
        },
        useNullAsDefault: true
    }  

module.exports = config
