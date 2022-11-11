let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}
export const TIME_OUT = 10000
export { BASE_URL }
