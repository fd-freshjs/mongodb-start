const yup = require('yup');

module.exports.createMessageSchema = yup.object().shape({
  body: yup.string().required(),
  author_id: yup.string().required(),
  to_user_id: yup.string().required(),
});

module.exports.registerUserSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().positive().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  address: yup.object({
    city: yup.string().required(),
    country:  yup.string(),
  }),
  createdAt: yup.date(),
});
