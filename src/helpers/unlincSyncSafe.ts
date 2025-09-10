import { resolve } from 'path'
import { unlinkSync } from 'fs'
import report from '@/helpers/report'

export default function unlincSyncSafe(path?: string) {
  if (!path) {
    return
  }

  try {
    // Normalize and validate the path to prevent directory traversal
    const normalizedPath = resolve(path)
    unlinkSync(normalizedPath)
  } catch (error) {
    // Only report if it's not a "file not found" error
    if (error instanceof Error && !error.message.includes('ENOENT')) {
      report(error, { location: 'deleting downloaded file', meta: path })
    }
  }
}
