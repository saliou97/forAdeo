/**
 * Return a console.log() with pretty JSON
 * @param data
 */
 function printJson(data) {
    console.log(JSON.stringify(data, undefined, 2));
  }
  
  module.exports = printJson;
  