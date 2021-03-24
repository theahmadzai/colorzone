const convert = require('./convert')

const contrast = (hexCode) => {
  return parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
}

module.exports = contrast
