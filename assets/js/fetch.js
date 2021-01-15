class Fetch {

   async getCurrent(input) {
     const myKey = 'c7a6c04d169efed49058cfeff0b02919'

     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
     );

     const data = await reponse.json();

     console.log(data);

     return data;
   }
}
