import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getBookings } from "../database/asynStorage";

const Ticket = () => {
  const navigation = useNavigation();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = useCallback(async () => {
    try {
      const bookingsData = await getBookings();
      setBookings(bookingsData.reverse());
    } catch (error) {
      console.log("Error fetching bookings:", error);
      // Handle the error appropriately
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleTicketPress = (booking) => {
    navigation.navigate("TicketDetails", { booking });
  };

  const renderTicketItem = ({ item }) => (
    <TouchableOpacity
      style={styles.ticketItem}
      onPress={() => handleTicketPress(item)}
    >
      <Text style={styles.ticketText}>{item.session}</Text>
      <Text style={styles.ticketText}>{item.date}</Text>
      <Text style={styles.ticketText}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        renderItem={renderTicketItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  ticketItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  ticketText: {
    fontSize: 16,
  },
};

export default Ticket;