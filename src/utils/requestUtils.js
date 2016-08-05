const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
}

const onRequestError = error =>
  console.error(`Request failed, ${JSON.stringify(error)}`);

const parseJSON = response => response.json();

const extractData = ({data}) => data;


module.exports = {
  checkStatus,
  onRequestError,
  parseJSON,
  extractData,
};
