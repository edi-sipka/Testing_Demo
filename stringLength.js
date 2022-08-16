const stringLength = (str) => {
  if (str.length > 0 && str.length < 10) {
    return str.length;
  } else {
    throw new Error('String is empty or too long');
  }
};

module.exports = stringLength;
