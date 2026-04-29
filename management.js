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
