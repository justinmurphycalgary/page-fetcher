const request = require("request");
const fs = require('fs');
const urlPath = process.argv[2];
const outputFile = process.argv[3];

//reformat the url
const goodUrlMaker = (urlInput) => {
  if (urlInput.substring(0, 7).toLowerCase() === "http://") {
    return urlInput
  }
  return "http://" + urlInput;
}

//check input
const goodUrl = goodUrlMaker(urlPath)

//make request
request(goodUrl, (error, response, body) => {
  if (error !== null) {
    console.log("error:", error); 
    return
  }
  if (response.statusCode !== 200) {
    console.log("statusCode:", response && response.statusCode); 
    return
  }
  fs.writeFileSync(`./${outputFile}.html`, body)
  console.log('file written sucessfully');

});




