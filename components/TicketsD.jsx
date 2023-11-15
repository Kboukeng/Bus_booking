import React from 'react';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

const TicketD = ({ route }) => {
  const { booking } = route.params;

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Text>Session: {booking.session}</Text>
      <Text>Point: {booking.point}</Text>
      <Text>Date: {booking.date}</Text>
      <Text>Time: {booking.time}</Text>
      <SvgXml xml={booking.qrCode} width={200} height={200} />
    </View>
  );
};

export default TicketD;