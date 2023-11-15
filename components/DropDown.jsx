/** @format */
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import Styles from "../stylesheets/DropdownStyle";
import { Sessions, Points } from "../database/data";
import { View, Text, Modal, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBooking } from "../database/asynStorage";

const DropDown = () => {
	const [session, setSession] = useState("");
	const [point, setPoint] = useState("");
	const [modal, setModal] = useState(false);

	const handleBooking = () => {
		if (!session || !point) {
			alert("Please select both a session and a point");
		} else {
			setModal(true);
		}
	};

  const handleConfirmation = async () => {
	  
      // Create the booking object
      const booking = {
        session: session,
        point: point,
      };

      // Call the createBooking function to insert the booking into AsyncStorage
      const bookingId = await createBooking(booking);

      setSession("");
      setPoint("");
      setModal(false);
  };
	return (
		<>
			<Dropdown
				style={Styles.dropdown}
				placeholderStyle={Styles.placeholderStyle}
				selectedTextStyle={Styles.selectedTextStyle}
				inputSearchStyle={Styles.inputSearchStyle}
				iconStyle={Styles.iconStyle}
				data={Sessions}
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder="Select a trip session"
				searchPlaceholder="Search..."
				label={session}
				onChange={(item) => {
					setSession(item.label);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={Styles.icon}
						color="black"
						name="Safety"
						size={20}
					/>
				)}
			/>

			<Dropdown
				style={Styles.dropdown}
				placeholderStyle={Styles.placeholderStyle}
				selectedTextStyle={Styles.selectedTextStyle}
				inputSearchStyle={Styles.inputSearchStyle}
				iconStyle={Styles.iconStyle}
				data={Points}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder="Select a point"
				searchPlaceholder="Search..."
				label={point}
				onChange={(item) => {
					setPoint(item.label);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={Styles.icon}
						color="black"
						name="Safety"
						size={20}
					/>
				)}
			/>

			<TouchableOpacity style={Styles.button} onPress={handleBooking}>
				<Text style={Styles.buttonText}>BOOK</Text>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				blurType="dark"
				coverScreen={true}
				transparent={true}
				visible={modal}
				onRequestClose={() => {
					console.warn("closed");
				}}>
				<View style={Styles.container}>
					<View style={Styles.View}>
						<Text style={Styles.text}>Confirm booking</Text>
						<Text style={Styles.text_1}>Session: {session}</Text>
						<Text style={Styles.text_1}>Point: {point}</Text>
						<View style={Styles.btn_View}>
							<Pressable
								onPress={() => {
									setModal(!modal);
								}}
								style={Styles.button_1}>
								<Text style={Styles.btn_text}>Cancel</Text>
							</Pressable>
							<Pressable onPress={handleConfirmation} style={Styles.button_1}>
								<Text style={Styles.btn_text_1}>Confirm</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
};

export default DropDown;
