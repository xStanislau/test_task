export const checkPassword = pwd => {
  let letter = /[a-zA-Z]/;
  let number = /[0-9]/;
  let valid = number.test(pwd) && letter.test(pwd); //match a letter _and_ a number
  return valid;
};

export const checkEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
