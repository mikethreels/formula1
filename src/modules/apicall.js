const uri = 'http://ergast.com/api/f1/2020/drivers.json?limit=60';

const getDrivers = async () => {
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  const resp = await fetch(uri, options);
  const response = await resp.json();
  return response;
};

export default getDrivers;
