// Define the API key, latitude, and longitude
const apiKey = '6c64597f46da4114b7a54036231610';
const latitude = 'LATITUDE';
const longitude = 'LONGITUDE';

// Construct the API request URL
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

// Make the HTTP request using fetch
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
  const cities = [
    { name: 'Atlanta', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Denver', latitude: 34.0522, longitude: -118.2437 },
    { name: 'Seattle', latitude: 51.5074, longitude: -0.1278 },
    { name: 'San Francisco', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Orlando', latitude: 34.0522, longitude: -118.2437 },
    { name: 'New York', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Chicago', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Austin', latitude: 40.7128, longitude: -74.0060 },
  ];