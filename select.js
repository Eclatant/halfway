const curryr = require("./curryr");

function select(object, propertyName) {
  if (Array.isArray(propertyName)) {
    let i = -1;
    const len = propertyName.length;
    const result = [];

    while (++i < len) result.push(object[propertyName[i]]);
    return result;
  } else {
    return object[propertyName];
  }
}

module.exports = curryr(select);