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
                    row += `<div class="card">
                        <img src="http://13.200.156.231:8097/omkareshwar/displayHotelImage?id=${item.id}" alt="" class="ujjainimage">
          <div class="rectangle"><span class="star"> &#9733; </span>${item.rating}</div>
          <div class="hotelname">${item.name}</div>
          <div><p class="toprate"> ₹ ${item.price}<span class="btn1"> <div class="btn"><button class="Booknow" >Book Now</button></div></span></p></div>
          </div>`
                })
                document.getElementById('omkareshwar').innerHTML = row;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });



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
          <div class="rectangle1"><span class="star"> &#9733; </span>${item.rating}</div>
          <div class="hotelname1">${item.name}</div>
          <div><p class="toprate1"> ₹ ${item.price}<span class="btn1"> <div class="btn1"><button class="Booknow1" >Book Now</button></div></span></p></div>
          </div>`
                })
                document.getElementById('omkareshwar1').innerHTML = row;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });