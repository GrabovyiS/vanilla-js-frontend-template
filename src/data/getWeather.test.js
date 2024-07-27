import getWeather from './getWeather';

const mockWeatherResponse = {
  status: 200,
  ok: true,
  json: () =>
    new Promise((resolve) =>
      resolve({
        queryCost: 1,
        latitude: 55.757,
        longitude: 37.615,
        resolvedAddress: 'Москва, Центральный федеральный округ, Россия',
        address: 'moscow',
        timezone: 'Europe/Moscow',
        tzoffset: 3,
        days: [
          {
            datetime: '2024-07-26',
            temp: 21,
            humidity: 47.1,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-07-27',
            temp: 23.1,
            humidity: 44.8,
            conditions: 'Rain, Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-07-28',
            temp: 22.2,
            humidity: 72.3,
            conditions: 'Rain, Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-07-29',
            temp: 18.9,
            humidity: 73.3,
            conditions: 'Rain, Overcast',
            hours: [Array],
          },
          {
            datetime: '2024-07-30',
            temp: 17.6,
            humidity: 68.6,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-07-31',
            temp: 19.7,
            humidity: 63.2,
            conditions: 'Rain, Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-01',
            temp: 19.8,
            humidity: 55.9,
            conditions: 'Rain, Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-02',
            temp: 19.8,
            humidity: 56.6,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-03',
            temp: 18.8,
            humidity: 71.2,
            conditions: 'Overcast',
            hours: [Array],
          },
          {
            datetime: '2024-08-04',
            temp: 20.6,
            humidity: 61.7,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-05',
            temp: 21.5,
            humidity: 56.8,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-06',
            temp: 22.5,
            humidity: 54.3,
            conditions: 'Overcast',
            hours: [Array],
          },
          {
            datetime: '2024-08-07',
            temp: 18.6,
            humidity: 82.8,
            conditions: 'Partially cloudy',
            hours: [Array],
          },
          {
            datetime: '2024-08-08',
            temp: 19.9,
            humidity: 56.7,
            conditions: 'Clear',
            hours: [Array],
          },
          {
            datetime: '2024-08-09',
            temp: 19.5,
            humidity: 48,
            conditions: 'Clear',
            hours: [Array],
          },
        ],
        alerts: [],
        currentConditions: {
          datetime: '03:15:00',
          temp: 18.3,
          humidity: 58.2,
          conditions: 'Partially cloudy',
        },
      }),
    ),
};

const expectedWeatherResult = {
  address: 'moscow',
  resolvedAddress: 'Москва, Центральный федеральный округ, Россия',
  currentConditions: {
    datetime: '03:15:00',
    temp: 18.3,
    humidity: 58.2,
    conditions: 'Partially cloudy',
  },
  tempUnits: '°C',
};

test('Fetch is called', async () => {
  let fetchIsCalled = false;
  function mockWeatherFetch(url, options) {
    fetchIsCalled = true;
    return new Promise((resolve) => resolve(mockWeatherResponse));
  }

  await getWeather(mockWeatherFetch, 'moscow', 'metric');

  expect(fetchIsCalled).toBe(true);
});

test('Fetch from the correct url', () => {
  function mockWeatherFetch(url, options) {
    expect(url).toBe(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/moscow?unitGroup=metric&elements=datetime%2Cname%2Ctemp%2Chumidity%2Cconditions&key=LH7L9BQJ8VA93UEZG77J49J3B&contentType=json',
    );
    return new Promise((resolve) => resolve(mockWeatherResponse));
  }

  getWeather(mockWeatherFetch, 'moscow', 'metric');
});

test('Fetch using CORS', () => {
  function mockWeatherFetch(url, options) {
    expect(options).toEqual({ mode: 'cors' });
    return new Promise((resolve) => resolve(mockWeatherResponse));
  }

  getWeather(mockWeatherFetch, 'moscow', 'metric');
});

test('Get weather returns correct weather conditions', async () => {
  function mockWeatherFetch() {
    return new Promise((resolve) => resolve(mockWeatherResponse));
  }

  const actualResult = await getWeather(mockWeatherFetch, 'moscow', 'metric');
  expect(actualResult).toEqual(expectedWeatherResult);
});
