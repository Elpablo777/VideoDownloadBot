import { NextFunction } from 'grammy'
import { findOrCreateChat } from '@/models/Chat'
import Context from '@/models/Context'
import report from '@/helpers/report'

export default async function attachChat(ctx: Context, next: NextFunction) {
  try {
    if (!ctx.chat) {
      report(new Error('ctx.chat is not defined'), {
        ctx,
        location: 'attachUser',
      })
      return
    }

    const { doc: chat } = await findOrCreateChat(ctx.chat.id)
    ctx.dbchat = chat
    return next()
  } catch (error) {
    report(error, { ctx, location: 'attachUser' })
    // Continue without attaching chat to prevent bot from crashing
    return next()
  }
}
