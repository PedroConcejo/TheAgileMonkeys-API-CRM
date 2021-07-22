
const errorCodes =
{
  ERROR_EMAIL_DUPLICATE: 'ER-0100',
  ERROR_TOKEN_NOT_FOUND: 'ER-0101',
  ERROR_TOKEN_NOT_VALID: 'ER-0102',
  ERROR_ROLE_NOT_VALID: 'ER-0103',
  ERROR_NIE_DUPLICATE: 'ER-0104',
  ERROR_EMAIL_NOT_VALID: 'ER-0105',
  ERROR_NAME_IS_REQUIRED: 'ER-0106',
  ERROR_SURNAME_IS_REQUIRED: 'ER-0107',
  ERROR_PARAMS_CAN_NOT_BE_EMPTY: 'ER-0108',
  ERROR_EMAIL_IS_REQUIRED: 'ER-0109',
  ERROR_NIE_IS_REQUIRED: 'ER-0110',
  ERROR_NIE_NOT_VALID: 'ER-0111',
  ERROR_WRONG_PASSWORD: 'ER-0112',
  ERROR_WRONG_EMAIL: 'ER-0113',
  ERROR_PHOTO_IS_REQUIRED: 'ER-0108',
}

const errorMessage =
{
  ERROR_EMAIL_DUPLICATE: 'Duplicate email ',
  ERROR_TOKEN_NOT_FOUND: 'Token not found',
  ERROR_TOKEN_NOT_VALID: 'Token not valid',
  ERROR_ROLE_NOT_VALID: 'Not valid role',
  ERROR_NIE_DUPLICATE: 'Duplicate Nie ',
  ERROR_EMAIL_NOT_VALID: 'Not valid email',
  ERROR_NAME_IS_REQUIRED: 'Name is required',
  ERROR_SURNAME_IS_REQUIRED: 'Surname is required',
  ERROR_PARAMS_CAN_NOT_BE_EMPTY: 'Paramms can not be empty',
  ERROR_EMAIL_IS_REQUIRED: 'Email is required',
  ERROR_NIE_IS_REQUIRED: 'Nie is required',
  ERROR_NIE_NOT_VALID: 'Not valid nie',
  ERROR_WRONG_PASSWORD: 'Wrong password for ',
  ERROR_WRONG_EMAIL: 'Wrong email ',
  ERROR_PHOTO_IS_REQUIRED: 'Photo is required',
}

module.exports = {
  errorCodes,
  errorMessage
}
