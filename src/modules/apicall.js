const standingsUri = 'http://ergast.com/api/f1/current/driverStandings.json?limit=60';

const getStandings = async () => {
  try {
    const options = {
      method: 'GET',
      mode: 'cors',
    };

    const resp = await fetch(standingsUri, options);
    const response = await resp.json();
    return response;
  } catch (e) {
    return e;
  }
};

export default getStandings;
