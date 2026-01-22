const weatherData = {
    poznan: { 
        temp: 15, 
        desc: "Przelotny deszcz", 
        icon: "🌦️", 
        wind: 18, 
        humidity: 55,
        color: "#e8f5e9",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=16.85,52.35,17.00,52.45&layer=mapnik"
    },
    warszawa: { 
        temp: 12, 
        desc: "Pochmurno", 
        icon: "☁️", 
        wind: 15, 
        humidity: 60,
        color: "#d4d4d4",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=20.9,52.1,21.1,52.3&layer=mapnik"
    },
    krakow: { 
        temp: 18, 
        desc: "Słonecznie", 
        icon: "☀️", 
        wind: 5, 
        humidity: 40,
        color: "#fff7cd",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=19.8,50.0,20.0,50.1&layer=mapnik"
    },
    gdansk: { 
        temp: 10, 
        desc: "Wietrznie", 
        icon: "💨", 
        wind: 45, 
        humidity: 80,
        color: "#e0f7fa", 
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.5,54.3,18.8,54.4&layer=mapnik"
    },
    wroclaw: { 
        temp: 22, 
        desc: "Burze", 
        icon: "⚡", 
        wind: 25, 
        humidity: 70,
        color: "#cfd8dc",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=16.9,51.0,17.1,51.2&layer=mapnik"
    }
};


const selectElement = document.getElementById('city-select');
const resultDiv = document.getElementById('weather-result');
const iconDiv = document.getElementById('weather-icon');
const tempDiv = document.getElementById('weather-temp');
const descDiv = document.getElementById('weather-desc');
const windSpan = document.getElementById('wind');       
const humiditySpan = document.getElementById('humidity'); 
const mapFrame = document.getElementById('city-map');   
const body = document.body;                            


selectElement.addEventListener('change', (event) => {
    const selectedCity = event.target.value;

    if (!selectedCity) {
        resultDiv.classList.add('hidden');
        body.style.backgroundColor = "white";
        return;
    }

    const data = weatherData[selectedCity];

    iconDiv.textContent = data.icon;
    tempDiv.textContent = `${data.temp}°C`;
    descDiv.textContent = data.desc;
    windSpan.textContent = data.wind;
    humiditySpan.textContent = data.humidity;


    mapFrame.src = data.mapUrl;

    document.querySelector('.main').style.backgroundColor = data.color;

    resultDiv.classList.remove('hidden');
});