const regExpCollectionName = /[\d\D]{1,100}/;
const regExpPrice = /[0-9]+$/;
const regExpUrl =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

export const validateCollectionName = (field) => {
  if (regExpCollectionName.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validatePrice = (field) => {
  if (regExpPrice.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateColor = (field) => {
  if (
    regExpPrice.test(field) &&
    field.trim() !== "" &&
    field.trim() > 0 &&
    field.trim() < 4
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateURL = (field) => {
  if (regExpUrl.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};
