# Hotel Booking System

## Title

**Hotel Booking System**

---

## Description

The **Hotel Booking System** allows guests to view available rooms and make reservations.  
It keeps track of room availability, guest bookings, and updates the number of available rooms when bookings are made or cancelled.

This system is used by hotel staff and guests to manage room reservations efficiently.

---

## Objectives

- Allow guests to view available rooms
- Enable guests to make room reservations
- Update room availability automatically
- Allow booking cancellation
- Help hotel staff manage reservations efficiently

---

## UML Class Diagram

You can view the UML Class Diagram using the link below:

🔗 [View UML Diagram](https://drive.google.com/file/d/1fc7-n9ED0ecR-tuzC2g-mOdI0wbxiNad/view?usp=sharing)

---

## Different Classes Used

### 1. Class Room

Represents a hotel room and manages room availability.

**Attributes:**

- roomNumber
- roomType
- price
- isbooked

**Methods:**

- bookRoom()
- cancelRoom()
- showRoomDetails()
- showAvailableRooms()

---

### 2. Class Guest

Represents a guest who books rooms.

**Attributes:**

- name
- guestID
- totalGuest

**Methods:**

- displayGuestInfo()
- registerGuest()
- reserveRoom()
- showtotalRooms()

---

## 🧠 OOP Principles Used

### 1. Encapsulation

Each class stores its own data (attributes) and controls access to it through methods.

### 2. Abstraction

The system hides complex booking logic and provides simple methods like:

- bookRoom()
- cancelBooking()

### 3. Association

Guest interacts with Room objects to book, reserve and cancel booking.
