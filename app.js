window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://any.ge/weather/api2.php?get=daily&id=611717${lat},${long}`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
    }
});