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
                    row += `<div class="slide-card" >
                    <div class="Traditional_Pujas_div " >
                          <div class="puja_card_left">
                            <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" class="Traditional_Pujas_imgs"
                                alt="">
                            <p class="puja_name pujanames_oncard">${item.poojaName}</p>
                            <div class="Location_pujaname_div">
                                <img src="../icons/Location icon.png" class="Traditional_location_img" alt="">
                                <span class="Temple_name">${item.templeName}</span>
                            </div>
                            <div class = "puja_time_div">
                              <img src="../icons/time.png" alt="" class= "puja_time_clock">
                              <span class="puja_time">10 : 00 AM</span>
                            </div>
                            <div class="puja_up_price_button">
                            <span class="puja_price" id="first_puja_price">&#8377; ${item.price}</span>
                            <button id="puja_Book_btn" class="puja_booknow_btn puja-api-button01"  >Book Now</button>
                            </div>
                          </div>
                          <div class="puja_description">
                            <p class="puja_description_heading">Description</p>
                            <p class="puja_description_data">Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
      
                            <p class="puja_description_data"> Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
       
                          </div> 
                        </div> 
                </div>`
                })
                document.getElementById('slider-wrapper').innerHTML = row;
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
                        row += `<div class="card1">
                            <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" alt="" class="ujjainimage1">
              <div class="hotelname1">${item.poojaName}</div>
              <div class="templename"> <span class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></span> ${item.templeName}</div>
              <div class="clock"> <span class="clockicon"><i class="fa-regular fa-clock"></i></span>10 : 00 AM</div>
              <div><p class="toprate1"> ₹ ${item.price}<span class="btn1"> <div class="btn"><button class="Booknow1" >Book Now</button></div></span></p></div>
              </div>`
                    })
                    document.getElementById('slider-wrapper1').innerHTML = row;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        });