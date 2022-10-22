

function updatemap() {
    // // url ="\data.json";
    fetch("\data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                longitude = element.longitude
                latitude = element.latitude
                cases = element.infected
                if (cases>255) {
                    color = "Rgb(255,0, 0)"
                    
                }
                else{
                    color = `Rgb(${cases},0,0)`
                }

                // Set options


                var marker = new maplibregl.Marker({
                    color: color,
                    draggable: false
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })   

}
updatemap();  
           