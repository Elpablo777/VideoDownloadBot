import { connect } from 'mongoose'
import env from '@/helpers/env'
import report from '@/helpers/report'

async function startMongo() {
  try {
    await connect(env.MONGO)
    console.log('MongoDB connected successfully')
  } catch (error) {
    report(error, { location: 'startMongo' })
    throw error
  }
}

export default startMongo
