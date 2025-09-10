import * as dotenv from 'dotenv'
import { cleanEnv, num, str, url } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  TOKEN: str({
    desc: 'Telegram bot token',
    example: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
  }),
  MONGO: str({
    desc: 'MongoDB connection string',
    example: 'mongodb://localhost:27017/videobot',
  }),
  ADMIN_ID: num({
    desc: 'Telegram user ID of the bot admin',
    example: '123456789',
  }),
  BOT_API_URL: url({
    default: 'https://api.telegram.org',
    desc: 'Telegram Bot API URL',
  }),
})
