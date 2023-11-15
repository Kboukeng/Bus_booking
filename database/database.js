import React from 'react';
import * as SQLite from 'expo-sqlite';
import { SvgXml } from 'react-native-svg';

const db = SQLite.openDatabase('booking.db');


export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS booking (id INTEGER PRIMARY KEY AUTOINCREMENT, session TEXT, point TEXT, time TEXT, date TEXT, qrCode TEXT);',
      [],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          console.log('Database initialized successfully');
        } else {
          console.log('Booking inserted successfully');
        }},  
      (_, error) => {
        console.log('Error initializing database', error);
      }
    );
  });
};


const generateQRCode = ({ session, point, date, time }) => {
  const qrCodeData = JSON.stringify({ session, point, date, time });
  const qrCodeSettings = {
    value: qrCodeData,
    size: 200,
    backgroundColor: 'white',
    color: 'black',
    ecl: 'H',
  };

  const qrCodeString = JSON.stringify(qrCodeSettings);
  const qrCodeSvg = <SvgXml xml={qrCodeString} width={qrCodeSettings.size} height={qrCodeSettings.size} />;
  return qrCodeSvg.props.xml.toString();
};


export const insertBooking = (bookingData) => {
    const { session, point } = bookingData;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const qrCode = generateQRCode({ session, point, date, time });
     
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO booking (session, point, time, date, qrCode) VALUES (?, ?, ?, ?, ?);',
        session, point, time, date, qrCode,
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Booking inserted successfully', insertId, bookingData);
          } else {
            console.log('Failed to insert booking');
          }
        },
        (_, error) => {
          console.log('Error inserting booking', error);
        }
      );
    });
  };


  export const getBookings = () => {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * FROM booking;",
					[],
					(_, result) => {
						resolve(result.rows._array);
					},
					reject
				);
			});
		});
	}; 