const yup = require('yup');

module.exports.createMessageSchema = yup.object().shape({
  body: yup.string().required(),
  author_id: yup.string().required(),
  to_user_id: yup.string().required(),
});
