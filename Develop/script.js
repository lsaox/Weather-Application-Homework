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
    { name: 'Atlanta', latitude: 33.74470758742555, longitude:  -84.40401172646862 },
    { name: 'Denver', latitude: 39.746978665122896, longitude:  -104.982891722931 },
    { name: 'Seattle', latitude: 47.608013, longitude: -122.335167 },
    { name: 'San Francisco', latitude: 37.773972, longitude: -122.431297 },
    { name: 'Orlando', latitude: 28.538336, longitude:  -81.379234 },
    { name: 'New York', latitude: 40.730610, longitude:  -73.935242 },
    { name: 'Chicago', latitude: 41.881832, longitude:  -87.623177 },
    { name: 'Austin', latitude: 30.266666, longitude:  -97.733330 },
  ];