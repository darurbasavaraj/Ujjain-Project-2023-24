
    document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://13.200.156.231:8097/omkareshwar/getAll/omkareshwar";
    let row = '';
        // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
            .then(data => {
                let userdata = data.data;
                userdata.map((item, index) => {
                    //console.log(item.email)
                    row += `<div class="card1">
          <img src="http://13.200.156.231:8097/omkareshwar/displayHotelImage?id=${item.id}" alt="" class="ujjainimg1">
          <div class="hotelname1">${item.name}</div>
          
          </div>`
                })
                document.getElementById('taxiservice1').innerHTML = row;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });