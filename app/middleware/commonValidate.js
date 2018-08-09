const Joi = require('joi')

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    a: Joi.number().integer().required(),
    b: Joi.number().integer().required()
  })
  Joi.validate({a: req.query.a, b: req.query.b}, schema, {abortEarly: false}, (err) => {
    if (err) {
      res.status(400)
      res.send('Validation Error')
    } else {
      next()
    }
  })
}
