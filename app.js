window.addEventListener("load", () => {
    let long;
    let lat;

    let degreeC = document.querySelector(".degree_c");
    // let degreeF = document.querySelector(".degree_f");
    let locationC = document.querySelector(".location_C");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span");

    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}http://api.weatherapi.com/v1/current.json?key=0e4977fd1b304dd8a70100434222206&q=${lat},${long}&aqi=no`;
            console.log(api);
            fetch(api)
                .then(response => {
                    
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // console.log(data.current.temp_c);
                    // console.log(data.location.country);

                    const {temp_c,temp_f} = data.current;
                    const {country} = data.location;
                    // Set DOM elements from the API

                    degreeC.textContent = temp_c;
                    // degreeF.textContent = temp_f;
                    locationC.textContent = country;

                    // Formula For celsuis
                    let celsius = (degreeC - 32) * (5 / 9);

                    temperatureSection.addEventListener("click" , () => {
                        if(temperatureSpan.textContent === "F" ){
                            temperatureSpan.textContent = "C";
                            degreeC.textContent = celsius;
                        }else{
                            temperatureSpan.textContent = "F";
                        }
                    })
                })
        });
    }
    // function setIcons(icon , iconID){
    //     const skycons = new Skycons({color: "red"});
    //     const curentIcon = icon.replace(/-/g, "_").toUpperCase();
    //     skycons.play();
    //     return skycons.set(iconID, Skycons[currentIcon]);
    // }
});