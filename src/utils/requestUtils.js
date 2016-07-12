function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
}

function onRequestError(error) {
  console.error(`Request failed, ${error}`);
}

function parseJSON(response) {
  return response.json()
}

function extractData({data}) {
  return data;
}


module.exports = {
  checkStatus,
  onRequestError,
  parseJSON,
  extractData,
};
