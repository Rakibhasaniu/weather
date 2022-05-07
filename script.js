// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`; 
// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
 const  submitBtn= document.getElementById('btn');
 submitBtn.addEventListener('click', function(){
     const inputvalue =document.getElementById('inputvalue').value;
     
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue+'&appid=21f2bd44a4b1b7199c603b94301169a6')
     .then(response => response.json())
     .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const  temp =tem - 273.15;
        const des =data.weather[0].description;
        const humiDity =data.main.humidity;
        const speed = data.wind.speed;




        document.getElementById('city').innerText=cityName;
        document.getElementById('temperature').innerText=temp.toFixed(2);
        document.getElementById('descrip').innerText= des;
        document.getElementById('humidity').innerText= humiDity;
        document.getElementById('wind').innerText= speed ;
        
     })
     .catch(res => alert("Please Type Right City Name"))
 })
