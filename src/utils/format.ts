import dayjs from 'dayjs'

export function formatUTC(utcStr: string) {
  return dayjs(utcStr).format('YYYY-MM-DD HH:mm:ss')
}
