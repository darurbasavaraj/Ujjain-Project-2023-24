// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = "http://13.200.156.231:8097/poja/getAllPoja";
//     let row = '';
//         // Fetch data from the API
//     fetch(apiUrl)
//         .then(response => response.json())
//             .then(data => {
//                 let userdata = data.data;
//                 userdata.map((item, index) => {
//                     //console.log(item.email)
//                     row += `<div class="slide-card" >
//                     <div class="Traditional_Pujas_div " >
//                           <div class="puja_card_left">
//                             <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" class="Traditional_Pujas_imgs"
//                                 alt="">
//                             <p class="puja_name pujanames_oncard">${item.poojaName}</p>
//                             <div class="Location_pujaname_div">
//                                 <img src="../icons/Location icon.png" class="Traditional_location_img" alt="">
//                                 <span class="Temple_name">${item.templeName}</span>
//                             </div>
//                             <div class = "puja_time_div">
//                               <img src="../icons/time.png" alt="" class= "puja_time_clock">
//                               <span class="puja_time">10 : 00 AM</span>
//                             </div>
//                             <div class="puja_up_price_button">
//                             <span class="puja_price" id="first_puja_price">&#8377; ${item.price}</span>
//                             <button id="puja_Book_btn" class="puja_booknow_btn puja-api-button01"  >Book Now</button>
//                             </div>
//                           </div>
//                           <div class="puja_description">
//                             <p class="puja_description_heading">Description</p>
//                             <p class="puja_description_data">Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
      
//                             <p class="puja_description_data"> Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
       
//                           </div> 
//                         </div> 
//                 </div>`
//                 })
//                 document.getElementById('slider-wrapper').innerHTML = row;
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     });



//     document.addEventListener("DOMContentLoaded", function () {
//         const apiUrl = "http://13.200.156.231:8097/poja/getAllPoja";
//         let row = '';
//             // Fetch data from the API
//         fetch(apiUrl)
//             .then(response => response.json())
//                 .then(data => {
//                     let userdata = data.data;
//                     userdata.map((item, index) => {
//                         //console.log(item.email)
//                         row += `<div class="card1">
//                             <img src="http://13.200.156.231:8097/poja/display/custom?id=${item.id}" alt="" class="ujjainimage1">
//               <div class="hotelname1">${item.poojaName}</div>
//               <div class="templename"> <span class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></span> ${item.templeName}</div>
//               <div class="clock"> <span class="clockicon"><i class="fa-regular fa-clock"></i></span>10 : 00 AM</div>
//               <div><p class="toprate1"> ₹ ${item.price}<span class="btn1"> <div class="btn"><button class="Booknow1" >Book Now</button></div></span></p>
//               </div>
//               </div>
//               `
//                     })
//                     document.getElementById('slider-wrapper1').innerHTML = row;
//                 })
//                 .catch(error => {
//                     console.error("Error fetching data:", error);
//                 });
//         });


function addDynamicStyles() {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
  
    // Define your dynamic styles
    const dynamicStyles = `
    

  
  input,
  button,
  textarea {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }
  
  
  
  
  /* Basis */
  
  .btn {
    font-family: 'Open Sans';
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #fff;
    // color: #262626;
    color: orangered;
    border-radius: 10px;
    height: 50px;
    font-weight: 600;
    min-width: 100px;
    padding: 0px 20px;
    transition: 0.2s ease;
    cursor: pointer;
    outline: 0;
  }
  
  .btn:hover {
    color: #FFF;
    // background: #455AF7;
    background: gray;
  
  }
  
  .btn-small {
    min-width: 50px;
  }
  
  
  .btn-day {
    font-family: 'Open Sans';
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 99;
    outline: 0;
    border-radius: 10px;
    transition: 0.4s all;
  }
  
  .btn-day.active {
    color: #FFF;
    font-weight: 600;
    z-index: 99;
  }
  
  .btn-day.active::before {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    // background: #455AF7;
    background: orangered;
    border-radius: 50%;
    z-index: -1;
  }
  
  .text-field {
    padding: 10px;
    height: 50px;
    width: 200px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    margin: 0px 10px 0 0;
  }
  
  .title {
    font-size: 1.3em;
  }
  
  .subtitle {
    font-size: 1.1em;
  }
  
  /* Calendar */
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
  
  .calendar-assets {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 50px;
  }
  
  #currentDate{
  text-align:center;
  font-size:20px;
  }
  
  .field {
    display: flex;
    width: auto;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 20px 0;
  }
  
  .field label {
    margin: 2px;
  }
  
  .form-input {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .day-assets {
    display: flex;
    justify-content: space-between;
    width: 324px;
  }
  
  
  
  .day-assets .btn:nth-child(2) i {
    padding: 0 10px 0 0 !important;
  }
  
  .calendar {
    height: 370px;
    width: 324px;
    border-radius: 18px;
    background: #ffffff;
    padding: 10px;
    user-select: none;
  }
  
  .header123 {
    display: flex;
    
    align-items: center;
    // border-radius: 18px 18px 0px 0px;
    padding: 15px;
    height: 50px;
    // width: 100%;
    color: #262626;
  }
  
  .month {
    font-size: 0.7em;
  }
  
  .icon {
    padding: 10px;
    font-size: 1em;
    margin: 0 0 0 5px;
    background: #ffffff;
    color: #455af7;
    border: none;
    cursor: pointer;
    outline: 0;
  }
  
  .icon:hover {
    cursor: pointer;
  }
  
  #calendar {
    width: 100%;
  }
  
  .weekends th {
    font-size: 1em;
    color: orangered;
    font-weight: 400;
    width: 40px;
    margin: 10px 0;
  }
  
  #calendar tr {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 3px;
  }
  
  #calendar td {
    display: flex;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 99;
  }
    `;
  
    // Inject dynamic styles into the style element
    if (styleElement.styleSheet) {
       styleElement.styleSheet.cssText = dynamicStyles;
    } else {
       styleElement.appendChild(document.createTextNode(dynamicStyles));
    }
  
    // Append the style element to the document's head
    document.head.appendChild(styleElement);
  }
  
  // Call the function to add dynamic styles
  addDynamicStyles();
  
  function loading(){
      sessionStorage.removeItem('clickedButton')
    }
    // window.onload = () =>{
    //   if(restart){
    //   sessionStorage.removeItem('clickedButton')
    //   }
    
    // }
    document.addEventListener("DOMContentLoaded", function () {
      const apiUrl = `http://13.200.156.231:8097/poja/getAllPoja`;
      let row = '';
    
      // Fetch data from the API
      fetch(apiUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              let userdata = data.data;
    
              if (!Array.isArray(userdata)) {
                  console.error("Data is not an array:", userdata);
                  return;
              }
    
              userdata.map((product, index) => {
                  row += `<div class="slide-card" >
                  <div class="Traditional_Pujas_div " >
                        <div class="puja_card_left">
                          <img src="http://13.200.156.231:8097/poja/display/custom/${product.pojaId}" class="Traditional_Pujas_imgs"
                              alt="">
                          <p class="puja_name pujanames_oncard">${product.poojaName}</p>
                          <div class="Location_pujaname_div">
                              <img src="../icons/Location icon.png" class="Traditional_location_img" alt="">
                              <span class="Temple_name">${product.templeName}</span>
                          </div>
                          <div class = "puja_time_div">
                            <img src="../icons/time.png" alt="" class= "puja_time_clock">
                            <span class="puja_time">${product.time}</span>
                          </div>
                          <div class="puja_up_price_button">
                          <span class="puja_price" id="first_puja_price">&#8377; ${product.price}</span>
                          <button  id="bookButton_${product.pojaId}" class="puja_booknow_btn puja-api-button01" onclick="pujaPackageBooking(${product.pojaId}, ${index})">Book Now</button>
                         
                          </div>
                        </div>
                        <div class="puja_description">
                          <p class="puja_description_heading">Description</p>
                          <p class="puja_description_data">Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
    
                          <p class="puja_description_data"> Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
     
                        </div> 
                      </div> 
              </div>`;
              });
    
              document.getElementById('traditionalPuja').innerHTML = row;
          })
          .catch(error => {
              console.error("Error fetching or processing data:", error);
          });
    });
    
    
    
    document.addEventListener("DOMContentLoaded", async function () {
      const apiUrl = `http://13.200.156.231:8097/poja/getAllPoja`;
      let row = '';
    
      // Fetch data from the API
      await fetch(apiUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              let userdata = data.data;
    
              if (!Array.isArray(userdata)) {
                  console.error("Data is not an array:", userdata);
                  return;
              }
    
              userdata.map((product, index) => {
                console.log("product",product)
                  row += `<div class="slide-card" style="width:180;" onmouseover="this.style.width='380px'" onmouseout="this.style.width='170px'">
                  <div class=" ujjainFamous_puja">
                    <div class="Ujjain_FamousPujas_div">
                      <div class="puja_card_left">
                      <img src="http://13.200.156.231:8097/poja/display/custom/${product.pojaId}" class="Ujjain_FamousPujas_imgs"
                            alt="" srcset="">
                        <p class="Famous_puja_name">${product.poojaName}</p>
                        <div class="Famous_Location_pujaname_div">
                            <img src="../icons/Location icon.png" class="Famous_location_img" alt="">
                            <span class="Famous_Temple_name">${product.templeName}</span>
                        </div>
                        <div class = "puja_time_down_div">
                          <img src="../icons/time.png" alt="" class= "puja_time_down_clock">
                          <span class="puja_time_down">${product.time}</span>
                        </div>
                        <div class="puja_price_btn">
                          <span class="Famous_puja_price">₹ ${product.price} </span>
                          <input type="button" class="Famous_puja_booknow_btn" value="Book Now">
                        </div>
                      </div>
                        <div class="puja_description_down">
                          <p class="puja_description_heading_down">Description</p>
                          <p class="puja_description_data_down">Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data. Some content will be here in the live data.</p>
                       </div> 
                    </div>
                </div>  
              </div> `;
              });
              // generateCalendar();
              document.getElementById('ujjainFamousPujas').innerHTML = row;
          })
          .catch(error => {
              console.error("Error fetching or processing data:", error);
          });
    });
    
    
    let apiData= [];
    
        function renderData(pojaId){
          console.log("id",pojaId)
    
          const finalArray = JSON.parse(sessionStorage.getItem('clickedButton'));
          let arrayOfObjects = [].concat(...finalArray)
          console.log('arrayofobjects',arrayOfObjects)
          apiData=arrayOfObjects
    
          if(apiData.length==1){
          const finaDiv = document.getElementById('final')
          finaDiv.innerHTML = '';
            apiData.forEach((data)=> {
            
              const pujaPackageDiv = document.createElement('div');
              pujaPackageDiv.classList.add('single_puja_booking');         
              document.getElementsByClassName('popup_pujapackage_name')[0].innerText=" "
              document.getElementsByClassName('popup_pujabooking_h3')[0].innerText="Puja Booking"
              document.getElementsByClassName('pujabooking_instructions')[0].style.display="none"
              document.getElementById('totalPrice_btn').style.display="none"
  
              document.getElementById('bookButton_'+data.pojaId).innerText ="Added"
              const button = document.getElementById('bookButton_'+data.pojaId);
              button.disabled = true;
              pujaPackageDiv.innerHTML= `
              <div id="packagename">
              <div style="display:flex;">
                <img class="singlePackage_imgs" src="http://13.200.156.231:8097/poja/display/custom?id=${data.pojaId}" alt="" srcset="">
                <img class="singlePackage_imgs" src="http://13.200.156.231:8097/poja/display/custom?id=${data.pojaId}" alt="" srcset=""></div>
    
                <div>
                  <span class="singlepujaNames puja-api-popup-name01">${data.poojaName}</span>
                  <div style="display: flex;">
                      <img class="singlePackage_location_img" src="../icons/Location icon.png" alt="" srcset="">
                      <span class="Package_templeName puja-api-popup-name02">${data.templeName}</span>
                      
                      <img class="Package_puja_time_icon" src="../icons/time.png" alt="" srcset="">
                      <span class="Package_puja_time">${data.time}</span>
                      <span class="Package_pricenum puja-api-popup-name04">&#8377; ${data.price}</span>
                  </div>
                </div>
                 
                 
                <div class="puja_needfull_things" id="puja_needfull_things">
                    <h4>Needfull Things :</h4>
                    <ol class="puja_need_items">
                        <li>Turmeric Powder <span style="margin-left: 30px;">: 100 grams</span></li>
                        <li>Lemons <span style="margin-left: 79px;">: 3</span></li>
                        <li>Nava Dhanya <span style="margin-left: 49px;">: 1 Packet</span></li>
                        <li>Coconut <span style="margin-left: 78px;">: 2</span></li>
                        <li>Flower Garland <span style="margin-left: 40px;">: 2</span></li>
                        <li>Seperate Flowers <span style="margin-left: 27px;">: 2</span></li>
                        <li>Red & Black cloth <span style="margin-left: 27px;">: 1 each</span></li>
                    </ol> 
                </div>
              </div>
  
                  <div id="select_booking_date" style="display:none">Select Booking Date</div>
  
                    <div class="Container" id="table1" style="display:none;">
                      <div class="calendar-assets">
                       
                       
                        <div class="day-assets">
                            <button class="btn" onclick="prevMonth()" title="Dia anterior"><i class="fas fa-chevron-left"></i> </button>
                            <button class="btn" onclick="resetDate()" title="Dia atual"><i class="fas fa-calendar-day"></i><div class="month" id="month-header"></button>
                            <button class="btn" onclick="nextMonth()" title="Próximo dia"><i class="fas fa-chevron-right"></i> </button>
                        </div>
                    </div>
                    <div class="calendar" id="table" >
                       
                    </div>
                    
                </div>
                <span class="total_fare">Total Fare</span>
                <span class="Package_totalprice puja-api-price" id="Package_totalprice">&#8377;</span>
                <input type="button" class="popup_puja_btn" value="Book Puja" onclick="popup_pujaBooking_btn()">
                <input type="button" class="popup_puja_btn" value="Book Puja" onclick="popup_pujaBookingConf_btn1()" style="display:none;">
                
                  `;
                 
                 
                finaDiv.appendChild(pujaPackageDiv);
              // }
            })
            console.log('id', apiData.pojaId)
          
            const totalPrice = arrayOfObjects.reduce((accumulator,currentValue) => {
              return accumulator + currentValue.price;
            },0);
            document.getElementById('Package_totalprice').innerText='₹ '+ totalPrice
            console.log("totalprice",totalPrice)
        }
        else{
          const totalPrice = arrayOfObjects.reduce((accumulator,currentValue) => {
            return accumulator + currentValue.price;
          },0);
          document.getElementById('Package_totalprice1').innerHTML='₹ '+ totalPrice
          console.log("totalprice",totalPrice)
  
          const finaDiv = document.getElementById('final')
          finaDiv.innerHTML = '';
            apiData.forEach((data)=> {
              // if (isduplicate) {
              const pujaPackageDiv = document.createElement('div');
              pujaPackageDiv.classList.add('puja_package_divs');
              // document.getElementById('bookButton_'+data.id).style.display="none"
              // document.getElementById('bookButton_'+data.id).disable = true
              document.getElementById('totalPrice_btn').style.display="block"
              document.getElementsByClassName('popup_puja_btn')[0].innerText="Book Puja Package"
    
              document.getElementsByClassName('popup_pujapackage_name')[0].innerText="Selected Pujas"
    
              document.getElementsByClassName('popup_pujabooking_h3')[0].innerText="Puja Package Booking"
    
              document.getElementsByClassName('pujabooking_instructions')[0].style.display="block"
    
              document.getElementById('bookButton_'+data.pojaId).innerText ="Added"
              const button = document.getElementById('bookButton_'+data.pojaId);
              button.disabled = true;
              // document.getElementById('added_'+data.id).style.display="block"
              pujaPackageDiv.innerHTML= `
          
                <img class="Package_imgs" src="http://13.200.156.231:8097/poja/display/custom?id=${data.pojaId}" alt="" srcset="">
                <div>
                  <span class="pujaNames puja-api-popup-name01">${data.poojaName}</span>
                  <div style="display: flex;">
                      <img class="Package_location_img" src="../Images/Location icon.png" alt="" srcset="">
                      <span class="Package_templeName puja-api-popup-name02">${data.templeName}</span>
                      
                      <img class="Package_puja_time_icon" src="../Images/time.png" alt="" srcset="">
                      <span class="Package_puja_time">10 : 00 AM</span>
                      <span class="Package_pricenum puja-api-popup-name04">&#8377; ${data.price}</span>
                  </div>
                </div>
                 <img class="Package_delete_icon" onclick="pujaCardDelete(${data.pojaId})"  src="../Images/delete_icon.png" alt=""> 
  
  
              
              
                 `;
                finaDiv.appendChild(pujaPackageDiv);
              // }
            })
            console.log('id Basavaraj_Darur', apiData.pojaId)
          
            // const totalPrice = arrayOfObjects.reduce((accumulator,currentValue) => {
            //   return accumulator + currentValue.price;
            // },0);
            // document.getElementBypojaId('Package_totalprice1').innerHTML='₹ '+ totalPrice
            // console.log("totalprice",totalPrice)
            
        }
        }
    
        function pujaCardDelete(pojaId){
    
          const filterData = apiData.filter(each => each.pojaId !== pojaId)
          sessionStorage.setItem('clickedButton', JSON.stringify(filterData));
          sessionStorage.removeItem(pojaId)
          // let result= JSON.parse(sessionStorage.getItem('clickedButton'));
          // console.log('result', result)
          // document.getElementById('bookButton_'+id).style.display="block"
          document.getElementById('bookButton_'+pojaId).innerText="Book Now"
          const button = document.getElementById('bookButton_'+pojaId);
          button.disabled = false;
          // document.getElementById('added_'+id).style.display="none"
    
          renderData();
    
        }
    
        function pujaPackageBooking(pojaId, index) {
    
        // document.getElementById('puja_Book_btn').style.display= "none"
        if(!sessionStorage.getItem('clickedButton')){
          sessionStorage.setItem('clickedButton',JSON.stringify([]));
        }
          document.getElementsByClassName("puja-api-button01")[index].addEventListener("click",function() {
          document.getElementById('PujaBooking_popup').style.display = "block";
          document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";      
          let updatedData
          const clickedButton = JSON.parse(sessionStorage.getItem('clickedButton'))
          fetch(`http://13.200.156.231:8097/poja/getPojaById/${pojaId}`)
            .then((res) => res.json())
          .then((data) => {
            updatedData = data.data
            clickedButton.push(updatedData)
            console.log('updateddata',updatedData)
            console.log('clicked button',clickedButton)
            sessionStorage.setItem('clickedButton', JSON.stringify(clickedButton));
            renderData(pojaId);
          
          }) 
        })
       
         
      }
    
    function pujaPackageBooking_closePopUp(){
      document.getElementById('pujaPackageBooking_popupdiv').style.display = "none";
    
    }
    function pujaBooking_closePopUp(){
      document.getElementById('puja_booking_popup').style.display = "none";
    }
    function popup_pujaBooking_btn() {
      // Show the calendar container
      document.getElementById('table1').style.display = "block";
      document.getElementById('packagename').style.display = "none";
      document.getElementById('select_booking_date').style.display = "block";
      // document.getElementsByClassName('pujabooking_instructions')[0].style.display= "none"
      document.getElementById('totalPrice_btn').style.display="none";
      document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
      document.getElementsByClassName('popup_puja_btn')[1].style.display= "block"
      
      // document.getElementById('puja_package_divs').style.display = "none";
  
  
      // Add any additional logic for handling the button click here
    }
  
    function popup_pujaBookingConf_btn1(){
        document.getElementById('puja_needfull_things-cnf').style.display="block"
        document.getElementById('packagename').style.display = "none";
        document.getElementById('table1').style.display = "none";
        document.getElementById('select_booking_date').style.display = "none";
        document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
        document.getElementsByClassName('popup_puja_btn')[1].style.display= "none"
      // document.getElementsByClassName('puja_scroll')[0].style.display = "block";
  
  
      // document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
      // document.getElementById('puja_package_divs').style.display = "none";


    //   -------------------------post method for single puja booking--------------------------------------------

      const selectedData = sessionStorage.getItem('clickedButton')
      selectedData.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          console.log(`Key: ${key}, Value: ${value}`);
        });
      });
        console.log("formdata",selectedData[0])
      var formdata = new FormData();
    //   formdata.append("userId", user_id);
    //   formdata.append("pojaId", pujaId);
      formdata.append("pojaname",selectedData[0].poojaName)
      var requestOptions = {  method: 'POST',  body: formdata,  redirect: 'follow'};
 
      fetch(`http://13.200.156.231:8097/poja/save`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))  
      .catch(error => console.log('error', error));
      
  
    }
    function popup_pujaPackageBooking_btn(){
      // document.getElementById('packageBook').style.display = "none";
      document.getElementById('select_pujabooking_date').style.display = "block";
      document.getElementById('table2').style.display = "block";
      document.getElementsByClassName('popup_pujapackage_name')[0].innerText=""
  
      document.getElementsByClassName('pujabooking_instructions')[0].style.display="none"
      document.getElementsByClassName('puja_scroll')[0].style.display = "none";
      document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
      document.getElementsByClassName('popup_puja_btn')[1].style.display= "block"
  
    }

    // function popup_pujaPackageBooking_btn1(){
    //     document.getElementById('puja_needfull_things-cnf').style.display="block"

    //     document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
    //     document.getElementsByClassName('popup_puja_btn')[1].style.display= "none"
    //     document.getElementById('select_pujabooking_date').style.display = "none";
    //     document.getElementById('table2').style.display = "none";

    //     // post method for multiple cards


    // }
    function popup_pujaPackageBooking_btn1(userId, pojaIds, fromDate) {
      // Assuming userId, pojaIds, and fromDate are provided as arguments to the function
      // Assuming data is in the format expected by the API
      document.getElementById('puja_needfull_things-cnf').style.display="block"

      document.getElementsByClassName('popup_puja_btn')[0].style.display= "none"
      document.getElementsByClassName('popup_puja_btn')[1].style.display= "none"
      document.getElementById('select_pujabooking_date').style.display = "none";
      document.getElementById('table2').style.display = "none";
      
      const postData = {
          userId: userId,
          pojaIds: pojaIds,
          fromDate: fromDate
          // Add more data as needed
      };

  console.log('Post_Details',postData);
 
      // Making a POST request to the API endpoint
      fetch(`http://13.200.156.231:8097/admin/api/poja/book/${userId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Handle response data if needed
          console.log(data);
      })
      .catch(error => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];
  
  
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  
  
  
  // Váriavel principal
  let date = new Date();
  
  // Função que retorna a data atual do calendário 
  function getCurrentDate(element, asString) {
      if (element) {
          if (asString) {
              return element.textContent = weekdays[date.getDay()] + ', ' + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
          }
          return element.value = date.toISOString().substr(0, 10);
      }
      return date;
  }
  
  
  // Função principal que gera o calendário
  function generateCalendar() {
  
      // Pega um calendário e se já existir o remove
      const calendar = document.getElementById('calendar');
      if (calendar) {
          calendar.remove();
      }
  
      // Cria a tabela que será armazenada as datas
      const table = document.createElement("table");
      table.id = "calendar";
  
      // Cria os headers referentes aos dias da semana
      const trHeader = document.createElement('tr');
      trHeader.className = 'weekends';
      weekdays.map(week => {
          const th = document.createElement('th');
          const w = document.createTextNode(week.substring(0, 3));
          th.appendChild(w);
          trHeader.appendChild(th);
      });
  
      // Adiciona os headers na tabela
      table.appendChild(trHeader);
  
      //Pega o dia da semana do primeiro dia do mês
      const weekDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          1
      ).getDay();
  
      //Pega o ultimo dia do mês
      const lastDay = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
      ).getDate();
  
      let tr = document.createElement("tr");
      let td = '';
      let empty = '';
      let btn = document.createElement('button');
      let week = 0;
  
      // Se o dia da semana do primeiro dia do mês for maior que 0(primeiro dia da semana);
      while (week < weekDay) {
          td = document.createElement("td");
          empty = document.createTextNode(' ');
          td.appendChild(empty);
          tr.appendChild(td);
          week++;
      }
  
      // Vai percorrer do 1º até o ultimo dia do mês
      for (let i = 1; i <= lastDay;) {
          // Enquanto o dia da semana for < 7, ele vai adicionar colunas na linha da semana
          while (week < 7) {
              td = document.createElement('td');
              let text = document.createTextNode(i);
              btn = document.createElement('button');
              btn.className = "btn-day";
              btn.id="fromDate";
              btn.addEventListener('click', function () { changeDate(this) });
              week++;
  
  
  
              // Controle para ele parar exatamente no ultimo dia
              if (i <= lastDay) {
                  i++;
                  btn.appendChild(text);
                  td.appendChild(btn)
              } else {
                  text = document.createTextNode(' ');
                  td.appendChild(text);
              }
              tr.appendChild(td);
          }
          // Adiciona a linha na tabela
          table.appendChild(tr);
  
          // Cria uma nova linha para ser usada
          tr = document.createElement("tr");
  
          // Reseta o contador de dias da semana
          week = 0;
      }
      // Adiciona a tabela a div que ela deve pertencer
      const content = document.getElementById('table');
      content.appendChild(table);
      changeActive();
      changeHeader(date);
      document.getElementById('date').textContent = date;
      getCurrentDate(document.getElementById("currentDate"), true);
      getCurrentDate(document.getElementById("date"), false);
  }
  
  // Altera a data atráves do formulário
  function setDate(form) {
      let newDate = new Date(form.date.value);
      date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
      generateCalendar(date);
      return false;
  }
  
  // Método Muda o mês e o ano do topo do calendário
  function changeHeader(dateHeader) {
      const month = document.getElementById("month-header");
      if (month.childNodes[0]) {
          month.removeChild(month.childNodes[0]);
      }
      const headerMonth = document.createElement("h1");
      const textMonth = document.createTextNode(months[dateHeader.getMonth()].substring(0, 3) + " " + dateHeader.getFullYear());
      headerMonth.appendChild(textMonth);
      month.appendChild(headerMonth);
  }
  
  // Função para mudar a cor do botão do dia que está ativo
  function changeActive() {
      let btnList = document.querySelectorAll('button.active');
      btnList.forEach(btn => {
          btn.classList.remove('active');
      });
      btnList = document.getElementsByClassName('btn-day');
      for (let i = 0; i < btnList.length; i++) {
          const btn = btnList[i];
          if (btn.textContent === (date.getDate()).toString()) {
              btn.classList.add('active');
          }
      }
  }
  
  // Função que pega a data atual
  function resetDate() {
      date = new Date();
      generateCalendar(date);
  }
  
  // Muda a data pelo numero do botão clicado
  function changeDate(button) {
      let newDay = parseInt(button.textContent);
      date = new Date(date.getFullYear(), date.getMonth(), newDay);
      generateCalendar(date);
  }
  
  // Funções de avançar e retroceder mês e dia
  function nextMonth() {
      date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      generateCalendar(date);
  }
  
  function prevMonth() {
      date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      generateCalendar(date);
  }
  
  
  function prevDay() {
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
      generateCalendar(date);
  }
  
  function nextDay() {
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      generateCalendar(date);
  }
  
  document.onload = generateCalendar(date);
  
  
  
  
  
    
    