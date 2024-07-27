function getWeather(location, units, fetchFunction = fetch) {
  console.log(fetchFunction);
  return fetchFunction(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&elements=datetime%2Cname%2Ctemp%2Chumidity%2Cconditions&key=LH7L9BQJ8VA93UEZG77J49J3B&contentType=json`,
    { mode: 'cors' },
  )
    .then((response) => {
      if (response.status === 400) {
        throw new Error(
          `This location is not found. Status code: ${response.status}`,
        );
      }

      if (!response.ok) {
        throw new Error(
          `Something went wrong. Status code: ${response.status}`,
        );
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      const tempUnits = units === 'metric' ? '°C' : '°F';
      const weather = {
        address: result.address,
        resolvedAddress: result.resolvedAddress,
        currentConditions: result.currentConditions,
        tempUnits,
      };
      return weather;
    });
}

export default getWeather;
