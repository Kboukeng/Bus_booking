/** @format */
import React from "react";
import { View, Text} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Style } from "../stylesheets/TicketsDStyles";

const TicketDetails = ({ navigation, route }) => {
	const { booking } = route.params;

	const handleBackPress = () => {
		navigation.goBack();
	};

	return (
		<View style={Style.container}>
			<View style={Style.detailsContainer}>
				<Text style={Style.detailText}>Date: {booking.date}</Text>
				<Text style={Style.detailText}>Time: {booking.time}</Text>
				<Text style={Style.detailText}>Session: {booking.session}</Text>
				<Text style={Style.detailText}>Point: {booking.point}</Text>
				{/* Render the QR code here */}
				<View style={Style.qrCodeContainer}>
					<QRCode
						value={booking.ticketCode} // Assuming you have a ticketCode property in the booking object
						size={150}
					/>
				</View>
			</View>
		</View>
	);
};


export default TicketDetails;
