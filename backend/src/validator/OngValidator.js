const { celebrate, Segments, Joi } = require("celebrate");

/**
 * Query
 * Route
 * Body
 * */

module.exports = {
  Ong: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  Profile: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  Session: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  })
};
