const calcLogic = require('../model/usecase/calc')

module.exports = (req, res, next) => {
  const a = req.query.a
  const b = req.query.b
  res.status(200)
  res.send(String(calcLogic.sum(a, b)))
}
