
const sum = (a, b) => {
  return Number(a) + Number(b)
}
module.exports.sum = sum

const sub = (a, b) => {
  return a - b
}
module.exports.sub = sub

const multi = (a, b) => {
  return a * b
}
module.exports.multi = multi

const div = (a, b) => {
  if (b === 0) {
    throw new Error('zero divided by infinity')
  }
  return a / b
}
module.exports.div = div
