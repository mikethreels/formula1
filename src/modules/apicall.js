const uri = 'http://ergast.com/api/f1/current/drivers.json?limit=60';
const standingsUri = 'http://ergast.com/api/f1/current/driverStandings.json?limit=60';

const getDrivers = async () => {
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  const resp = await fetch(uri, options);
  const response = await resp.json();
  return response;
};

const getStandings = async () => {
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  const resp = await fetch(standingsUri, options);
  const response = await resp.json();
  return response;
};

export { getDrivers, getStandings };
