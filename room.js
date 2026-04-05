// Hotel Booking System

// ─── Room Class ─────────────────────────────────────────

class Room {

  // Static property
  static availableRooms = 4;

  constructor(roomNumber, roomType, price) {
    this.roomNumber = roomNumber;
    this.roomType = roomType;
    this.price = price;

    // Track if a specific room is booked
    this.isBooked = 0;

  }

  // Instance method
  bookRoom() {

    // Check if THIS room is already booked
    if (this.isBooked) {
      console.log(
        `Room ${this.roomNumber} is already booked.`
      );
      return;
    }

    else if (Room.availableRooms > 0) {

      this.isBooked = 1; 
      Room.availableRooms--;

      console.log(
        `Room ${this.roomNumber} (${this.roomType}) booked successfully. Price: $${this.price} per night.`
      );
    } else {
      console.log(
        `No rooms available to book.`
      );
    }
  }

  // Instance method
  cancelBooking() {

    // Only cancel if room was booked
    if (this.isBooked) {

      this.isBooked = false;
      Room.availableRooms++;

      console.log(
        `Booking for Room ${this.roomNumber} cancelled.`
      );

    } else {
      console.log(
        `Room ${this.roomNumber} is not currently booked.`
      );
    }
  }


  // Instance method
  showRoomDetails() {
    console.log(
      `Room ${this.roomNumber} (${this.roomType}): $${this.price} per night`
    );
  }

  // Static method
  static showAvailableRooms() {

    console.log(
      `Available rooms: ${Room.availableRooms}`
    );

  }

}


// ─── Guest Class ─────────────────────────────────────────

class Guest {

  static totalGuests = 0;

  constructor(guestId, name) {

    this.guestId = guestId;
    this.name = name;

    Guest.totalGuests++;

  }

  displayGuestInfo() {

    console.log(
      `Guest ID: ${this.guestId}, Name: ${this.name}`
    );
  }

  registerGuest() {

    console.log(
      `${this.name} (ID: ${this.guestId}) has been registered.`
    );

  }

  reserveRoom(room) {

    console.log(
      `${this.name} is attempting to reserve Room ${room.roomNumber}...`
    );

    room.bookRoom();

  }

  static showTotalGuests() {

    console.log(
      `Total guests registered: ${Guest.totalGuests}`
    );
  }
  

}


// ─── Usage Section ───────────────────────────────────────

// Create room objects
const room1 = new Room(101, "Single", 100);
const room2 = new Room(102, "Double", 150);
const room3 = new Room(103, "Suite", 300);
const room4 = new Room(104, "Single", 100);
const room5 = new Room(105, "Double", 150); 
const room6 = new Room(106, "Penthouse", 500);



// Show room details
room1.showRoomDetails();
room2.showRoomDetails();  
room3.showRoomDetails();
room4.showRoomDetails();
room5.showRoomDetails();
room6.showRoomDetails();


console.log("..............................")
console.log("..............................")
console.log("..............................")


// Create guest objects
const guest1 = new Guest("G001", "Favour Williams");
const guest2 = new Guest("G002", "Chiamaka Onwueze");
const guest3 = new Guest("G003", "Taiwo Olusegun");
const guest4 = new Guest("G004", "Chukwuemeka Okafor");
const guest5 = new Guest("G005", "Miracle Offordile");
const guest6 = new Guest("G006", "Charlie Brown");




// Show guest info
guest1.displayGuestInfo();
guest2.displayGuestInfo();
guest3.displayGuestInfo();
guest4.displayGuestInfo();
guest5.displayGuestInfo();
guest6.displayGuestInfo();

console.log("..............................")
console.log("..............................")
console.log("..............................")


// Use methods

guest1.registerGuest();
guest1.reserveRoom(room1);

console.log("..............................")
console.log("..............................")


guest2.registerGuest();
guest2.reserveRoom(room2);

console.log("..............................")
console.log("..............................")


guest3.registerGuest();
guest3.reserveRoom(room1);

console.log("..............................")
console.log("..............................")


guest4.registerGuest();
guest4.reserveRoom(room3);

console.log("..............................")
console.log("..............................")

guest5.registerGuest();
guest5.reserveRoom(room4);

console.log("..............................")
console.log("..............................")

guest6.registerGuest();
guest6.reserveRoom(room5);

console.log("..............................")
console.log("..............................")





// Cancel booking
room1.cancelBooking();

console.log("..............................")

room6.cancelBooking(); // Trying to cancel a room that wasn't booked

console.log("..............................")
console.log("..............................")

// Try booking again after cancellation
guest3.reserveRoom(room1);

// Show available rooms
Room.showAvailableRooms();

// Total guests registered
Guest.showTotalGuests();
