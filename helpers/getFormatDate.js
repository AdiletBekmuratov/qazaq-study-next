export default function getFormatDate(date) {
  return new Date(date).toLocaleString('kk-KZ')
}

export function toIsoString(date) {
  let timeOff = -new Date().getTimezoneOffset()
  let tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? '+' : '-',
    pad = function (num) {
      return (num < 10 ? '0' : '') + num
    }

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    ', ' +
    pad(date.getHours() + timeOff / 60) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds())
  )
}
