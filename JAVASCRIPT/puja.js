document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://13.200.156.231:8097/poja/getAllPoja";
    let row = '';
        // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
            .then(data => {
                let userdata = data.data;
                userdata.map((item, index) => {
                    //console.log(item.email)
                    row += `<div class="card">
                        <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" alt="" class="ujjainimage">
          <div class="hotelname">${item.poojaName}</div>
          <div class="templename"> <span class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></span> ${item.templeName}</div>
          <div class="clock"> <span class="clockicon"><i class="fa-regular fa-clock"></i></span>10 : 00 AM</div>
          <div><p class="toprate"> ₹ ${item.price}<span class="btn1"> <div class="btn"><button class="Booknow" >Book Now</button></div></span></p></div>
          </div>`
                })
                document.getElementById('puja').innerHTML = row;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const apiUrl = "http://13.200.156.231:8097/poja/getAllPoja";
        let row = '';
            // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
                .then(data => {
                    let userdata = data.data;
                    userdata.map((item, index) => {
                        //console.log(item.email)
                        row += `<div class="card">
                            <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" alt="" class="ujjainimage">
              <div class="hotelname">${item.poojaName}</div>
              <div class="templename"> <span class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></span> ${item.templeName}</div>
              <div class="clock"> <span class="clockicon"><i class="fa-regular fa-clock"></i></span>10 : 00 AM</div>
              <div><p class="toprate"> ₹ ${item.price}<span class="btn1"> <div class="btn"><button class="Booknow" >Book Now</button></div></span></p></div>
              </div>`
                    })
                    document.getElementById('puja').innerHTML = row;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        });





 