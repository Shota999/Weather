window.addEventListener("load" , ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://amindi.ge/api/weather/${lat},${long}`;
            fetch(api)
            .then(data =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
            });
        });
    }
});