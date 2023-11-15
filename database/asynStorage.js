/** @format */
import { AsyncStorage } from "async-storage";
import QRCode from "react-native-qrcode-svg";
import { v4 as uuidv4 } from "uuid";
// import QRCode from "qrcode";

const BOOKING_STORAGE_KEY = "booking_db";

// Function to create a new booking
export const createBooking = async (booking) => {
	try {
		// Generate a unique ID for the booking
		const id = uuidv4();

		// Generate the date, time, and QR code for the booking
		const { session, point } = booking;
		const date = new Date().toLocaleDateString("en-US");
		const time = new Date().toLocaleTimeString("en-US");
		const qrCode = await generateQRCode(booking);

		// Get existing bookings from AsyncStorage
		const existingBookings = await getBookings();

		// Add the new booking to the existing bookings
		const updatedBookings = [
			...existingBookings,
			{ id, session, point, date, time, qrCode }
		];

		// Store the updated bookings in AsyncStorage
		await AsyncStorage.setItem(
			BOOKING_STORAGE_KEY,
			JSON.stringify(updatedBookings)
		);

		console.log(
			"Booking created successfully.",
			id,
			session,
			point,
			date,
			time
		);

		return id; // Return the ID of the newly created booking
	} catch (error) {
		console.log("Error creating booking:", error);
		throw error;
	}
};

// Function to retrieve all bookings
export const getBookings = async () => {
	try {
		const bookings = await AsyncStorage.getItem(BOOKING_STORAGE_KEY);

		if (bookings) {
			return JSON.parse(bookings);
		} else {
			return [];
		}
	} catch (error) {
		console.log("Error retrieving bookings:", error);
		throw error;
	}
};

// Function to retrieve a single booking by ID
export const getBookingById = async (id) => {
	try {
		const bookings = await getBookings();
		const booking = bookings.find((item) => item.id === id);

		if (booking) {
			return booking;
		} else {
			throw new Error("Booking not found.");
		}
	} catch (error) {
		console.log("Error retrieving booking by ID:", error);
		throw error;
	}
};

// Function to update a booking by ID
export const updateBookingById = async (id, updatedBooking) => {
	try {
		const bookings = await getBookings();
		const index = bookings.findIndex((item) => item.id === id);

		if (index !== -1) {
			const updatedBookings = [...bookings];
			updatedBookings[index] = {
				...updatedBookings[index],
				...updatedBooking
			};

			await AsyncStorage.setItem(
				BOOKING_STORAGE_KEY,
				JSON.stringify(updatedBookings)
			);

			console.log("Booking updated successfully.");
		} else {
			throw new Error("Booking not found.");
		}
	} catch (error) {
		console.log("Error updating booking:", error);
		throw error;
	}
};

// Function to delete a booking by ID
export const deleteBookingById = async (id) => {
	try {
		const bookings = await getBookings();
		const updatedBookings = bookings.filter((item) => item.id !== id);

		await AsyncStorage.setItem(
			BOOKING_STORAGE_KEY,
			JSON.stringify(updatedBookings)
		);

		console.log("Booking deleted successfully.");
	} catch (error) {
		console.log("Error deleting booking:", error);
		throw error;
	}
};

// Helper function to generate a unique booking ID
const generateBookingId = () => {
	const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
	return uuid;
};

// Helper function to generate QR code for a booking
const generateQRCode = async (booking) => {
	try {
	  // Generate a unique booking ID
	  const bookingId = generateBookingId();
  
	  // Combine booking ID and other details into a unique string
	  const uniqueString = `${bookingId}-${booking.date}-${booking.session}-${booking.time}-${booking.point}`;
  
	  // Return the booking ID and unique string
	  return { bookingId, uniqueString };
	} catch (error) {
	  console.log("Error generating QR code:", error);
	  throw error;
	}
  };
  
  const QRCodeComponent = ({ booking }) => {
	const generateQRCodeAsync = async () => {
	  try {
		const { bookingId, uniqueString } = await generateQRCode(booking);
		return { bookingId, qrCode: uniqueString };
	  } catch (error) {
		console.log("Error generating QR code:", error);
		throw error;
	  }
	};
  
	const qrCodeData = generateQRCodeAsync();
  
	return (
	  <View>
		<QRCode value={qrCodeData.qrCode} />
	  </View>
	);
  };