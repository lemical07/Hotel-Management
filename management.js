let rooms = [];

function menu() {
   let opc =prompt(
       "===Welcome to Hotel Management System===\n" +
       "1. Add Room\n" +
       "2. Room List\n" +
       "3. Serch Room by Number\n" +
       "4. Change Room Status\n" +
       "5. Delete Room\n" +
       "6. Exit"
   );


   switch (opc) {
       case "1":
           addRoom(menu);
           break;
       case "2":
           checkRoomStatus(menu);
           break;
       case "3":
           searchRoomByNumber(menu);
           break;
       case "4":   
           changeRoomStatus(menu);
           break;
       case "5":
           deleteRoom(menu);
           break;
       case "6":
           console.log("Thank you for using the Hotel Management System!");
           break;
       default:
           console.log("Invalid option. Please try again.");
           menu();
   }         
}
menu();
function addRoom(callback) {
   let roomNumber = prompt("Enter room number:");
   let roomType = prompt("Enter room type:");
   let roomStatus = prompt("Enter room status:");
   let priceNight = parseFloat(prompt("Enter price per night:"));
   let guestName = prompt("Enter guest name :");


   let newRoom = {
       Number: roomNumber,
       Type: roomType,
       Status: roomStatus,
       priceNight: priceNight,
       GuestName: guestName
   };


   console.log("Saving to database...");


   setTimeout(function(){
       rooms.push(newRoom);
       console.log("Room added successfully!");
       if (callback)callback();
   }, 2000);
}
function checkRoomStatus(callback)  {
    console.log("===Room List===");
 
 
   
    if (rooms.length === 0) {
        console.log("No rooms registered yet.");
    } else {
        rooms.forEach(room => {
            console.log(
                `Room Number: ${room.Number},
                Type: ${room.Type},
                Status: ${room.Status},
                Price per Night: ${room.priceforNight},
                Guest Name: ${room.GuestName || "None"}`
            );
        });
    }
    if (typeof callback === "function") {
        callback();
    }
 }

 function searchRoomByNumber(callback) {
    let roomNumber = prompt("Enter room number to search:");
    console.log("Consulting hotel database...");
    setTimeout(function() {
        let room = rooms.find(room => room.Number === roomNumber);
 
 
    if (room) {
        console.log("===Room Information===");
        console.log(
            `Room Number: ${room.Number},
            Type: ${room.Type},
            Status: ${room.Status},
            Price per Night: ${room.priceforNight},
            Guest Name: ${room.GuestName}`);
    } else {
        console.log("Room not found.");
    }
    if (typeof callback === "function") {
        callback();
    }
    }, 2000);
 }
 

 function changeRoomStatus(callback) {
    let roomNumber = prompt("Enter the Room Number to modify:");
    console.log("Waiting for the hotel staff...");
    setTimeout(function() {
        let room = rooms.find(r => r.Number === roomNumber);
        if (room) {
            let newStatus = prompt("Enter the mew status:").toLowerCase();
            room.Status = newStatus;
            if (newStatus === "busy") {
                let guest = prompt("Enter the guest's name:");
                room.GuestName = guest;
            } else if (newStatus === "Vacant") {
                room.GuestName = "";
            }
            console.log(`Room status ${roomNumber} successfully updated.`);
        } else {
            console.log("Error:Room doesn't exist.");
        }
        if (typeof callback === "function") {
            callback();
        }

    }, 3000); 
}
function deleteRoom(callback) {
    let roomNumber = prompt("Enter Room Number for delete:");
    let index = rooms.findIndex(room => room.Number === roomNumber);
    if (index !== -1) {
        rooms.splice(index, 1);
        console.log(`Room Number ${roomNumber} was removed successfully.`);
    } else {
        console.log("Error: Room doesn't exist.");
    }
    if (typeof callback === "function") {
        callback();
    }
}