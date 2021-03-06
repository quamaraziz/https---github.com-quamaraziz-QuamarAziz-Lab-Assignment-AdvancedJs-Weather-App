const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  
  let viewResults = (weather) => {
    //console.log(response);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    let dateElement = document.querySelector('.location .date');
    let date = new Date();
    dateElement.innerText = buildAndGetDate(date);
  
  
    let temprature = document.querySelector('.current .temp');
    temprature.innerHTML = `${Math.round(weather.main.temp)} <span>°c</span>`;
  
    let weatherElement = document.querySelector('.current .weather');
    weatherElement.innerText = weather.weather[0].main;
  
    let hiLow = document.querySelector('.current .hi-low');
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  
  };
  
  let buildAndGetDate = (date) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December'];
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      let day = days[date.getDay()];
      let currentDate = date.getDate();
      let month = months[date.getMonth()];
      let year = date.getFullYear();
  
      return `${day} ${currentDate} ${month} ${year}`;
  } 
  
  let fetchResultsFromAPI = (query) => {
    let url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    console.log("Url : ", url);
    fetch(url)
      .then((weather) => {
        return weather.json();
      })
      .then((response) => {
        console.log("Response : ", response);
        viewResults(response);
      });
  };
  
  let setQuery = (event) => {
    if (event.keyCode === 13) {
      fetchResultsFromAPI(searchBox.value);
    }
  };
  
  // const searchBox = document.getElementsByClassName("search-box")[0];
  const searchBox = document.querySelector(".search-box"); //1st matched element with the class name.
  searchBox.addEventListener("keypress", setQuery);