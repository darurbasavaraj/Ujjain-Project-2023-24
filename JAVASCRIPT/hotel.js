document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://13.200.156.231:8097/hotels/getAllHotels";
    let row = '';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let userdata = data.data;
            userdata.forEach((item, index) => {
                // Check if the hotel rating is greater than 4.2
                const imageUrl = Array.isArray(item.images) && item.images.length > 0 ? `http://13.200.156.231:8097${item.images[0]}` : ''; 
                if (item.rating > 4.2) {
                    row += `<div class="card">
                                <img src="${imageUrl}" alt="" class="ujjainimage">
                                <div class="rectangle"><span class="star"> &#9733; </span>${item.rating}</div>
                                <div class="hotelname">${item.hotelName}</div>
                                <div class="type-member" style="width: 100%;">
                                    <div class="member" style="float: left; width: 30%;">
                                        <img class="memberimg" src="../icons/members.png" alt="">
                                        <p class="number">${item.occupancy}</p>
                                    </div>
                                    <div class="hoteltype" style="float: right; width: 70%;">
                                        <img src="../icons/diamond.png" class="hotelimg" alt="">
                                        <p class="hoteltypename">${item.roomCategory}</p>
                                    </div>
                                </div>
                                <div><p class="toprate"> ₹ ${item.pricing}<span class="btn1"> 
                                    <div class="btn">
                                        <button class="Booknow" data-hotel-id="${item.id}">Book Now</button>
                                    </div>
                                </span></p></div>
                            </div>`;
                }
            });

            document.getElementById('ujjainhome').innerHTML = row;

            // Add event listener to "Book Now" buttons
            document.querySelectorAll('.Booknow').forEach(button => {
                button.addEventListener('click', function () {
                    // Get the hotel ID from the data-hotel-id attribute
                    const hotelId = this.getAttribute('data-hotel-id');
                    
                    // Redirect to the hotel booking page with the hotel ID
                    window.location.href = `index.html?hotelId=${hotelId}`;
                });
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = "http://13.200.156.231:8097/hotels/getAllHotels";
//     let row = '';

//     // Fetch data from the API
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             let userdata = data.data;
//             userdata.map((item, index) => {
//                 row += `<div class="card">
//                             <img src="http://13.200.156.231:8097/hotels/displayHotelImage/${item.id}" alt="" class="ujjainimage">
//                             <div class="rectangle"><span class="star"> &#9733; </span>${item.rating}</div>
//                             <div class="hotelname">${item.hotelName}</div>
//                             <div class="type-member" style="width: 100%;">
//                                 <div class="member" style="float: left; width: 30%;">
//                                     <img class="memberimg" src="../icons/members.png" alt="">
//                                     <p class="number">${item.occupancy}</p>
//                                 </div>
//                                 <div class="hoteltype" style="float: right; width: 70%;">
//                                     <img src="../icons/diamond.png" class="hotelimg" alt="">
//                                     <p class="hoteltypename">${item.roomCategory}</p>
//                                 </div>
//                             </div>
//                             <div><p class="toprate"> ₹ ${item.pricing}<span class="btn1"> 
//                                 <div class="btn">
//                                     <button class="Booknow" data-hotel-id="${item.id}">Book Now</button>
//                                 </div>
//                             </span></p></div>
//                         </div>`;
//             });

//             document.getElementById('ujjainhome').innerHTML = row;

//             // Add event listener to "Book Now" buttons
//             document.querySelectorAll('.Booknow').forEach(button => {
//                 button.addEventListener('click', function () {
//                     // Get the hotel ID from the data-hotel-id attribute
//                     const hotelId = this.getAttribute('data-hotel-id');
                    
//                     // Redirect to the hotel booking page with the hotel ID
//                     window.location.href = `index.html?hotelId=${hotelId}`;
//                 });
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = "http://13.200.156.231:8097/hotels/getAllHotels";
//     let row = '';
//         // Fetch data from the API
//     fetch(apiUrl)
//         .then(response => response.json())
//             .then(data => {
//                 let userdata = data.data;
//                 userdata.map((item, index) => {
//                     //console.log(item.email)
//                     row += `<div class="card">
//                         <img src="http://13.200.156.231:8097/hotels/displayHotelImage?id=${item.id}" alt="" class="ujjainimage">
//           <div class="rectangle"><span class="star"> &#9733; </span>${item.rating}</div>
//           <div class="hotelname">${item.hotelName}</div>
//           <div class="type-member" style="width: 100%;">
//             <div class="member" style="float: left; width: 30%;">
//                 <img class="memberimg" src="../icons/members.png" alt="">
//                 <p class="number">${item.occupancy}</p>
//             </div>
//             <div class="hoteltype" style="float: right; width: 70%;">
//                 <img src="../icons/diamond.png" class="hotelimg" alt="">
//                 <p class="hoteltypename">${item.roomCategory}</p>
//             </div>
//           </div>
//           <div><p class="toprate"> ₹ ${item.pricing}<span class="btn1"> <div class="btn"><button class="Booknow" >Book Now</button></div></span></p></div>
//           </div>`
//                 })
//                 document.getElementById('ujjainhome').innerHTML = row;
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     });