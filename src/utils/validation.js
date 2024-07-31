
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const aplhaNumeric = /^[a-z0-9]+$/i;

export const validation = (type, key, val, min = 6, max = 25) => {
  if (val === "") {
    return {
      validate: false,
      message: `${key} is required!`,
    };
  } else if (val.length < min) {
    return {
      validate: false,
      message: `${key} should be minumum ${min} character long.`,
    };
  }
  switch (type) {
    case "email":
      if (!emailRegEx.test(val)) {
        return {
          validate: false,
          message: `Invalidate ${key}`,
        };
      } else {
        return {
          validate: true,
          message: "Valid input",
        };
      }
    case "alphanumeric":
      if (!aplhaNumeric.test(val)) {
        return {
          validate: false,
          message: `${key} is should be alphanumeric.`,
        };
      } else {
        return {
          validate: true,
          message: "Valid input",
        };
      }
    default:
      return {
        validate: true,
        message: "Valid input",
      };
  }
};

