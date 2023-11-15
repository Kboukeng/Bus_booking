import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    dropdown: {
      marginBottom: 25,
      height: 45,
      borderBottomColor: 'gray',
      width: "85%",
      alignSelf: "center",
      borderBottomWidth: 0.5,
      backgroundColor: "#ffffff",
      borderRadius: 10,
    },
    icon: {
      marginHorizontal: 15
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
  },
    iconStyle: {
      width: 20,
      height: 20,
      marginRight: 15
    },
    inputSearchStyle: {
      height: 30,
      fontSize: 16,
    },


    container: {
        flex: 1,
        backgroundColor : "rgba(3, 26, 36, 0.60))",
        alignItems: 'center',
        justifyContent: 'center',
    },
    View : {
        backgroundColor : "white" ,
        height : 250,
        width : 275,
        borderRadius : 20,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        elevation: 10
    },
    text : {
        fontSize : 30,
        color : "blue",
        marginBottom:20,
        marginTop: 20,
        fontWeight: "bold",
        alignSelf: 'center'
    },
    text_1 : {
        fontSize : 18,
        color : "black",
        marginBottom: 5,
        marginLeft: 20
    },
    btn_View: {
      justifyContent: "center",
      flex: 2,
      flexDirection: "row",
      marginTop: 25,
      gap: 20,
      width: '100%'
    },
    button_1 : {
        height: 45,
        width: 90,
        borderRadius: 20,
        elevation: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#ffffff"
    },
    btn_text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "red"

    },
    btn_text_1: {
      fontSize: 18,
      fontWeight: "bold",
      color: "green"
    },



    button: {
        color: "#ffffff",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "blue",
        width: "30%",
        alignSelf: "center",
        shadowColor: "black",
        borderRadius: 30,
        height: 50,
        width: 150,
        zIndex: 1,
        elevation: 10,
        marginBottom: 15,
        marginTop: 10,
        borderColor: "black",
        borderWidth:0.5,
        borderTopWidth: 2,
        shadowColor: "black",
        shadowOffset: {
          width: 0.5,
          height: 0.5
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,

      },
    
      buttonText: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "bold"
      },    



  });

  export default Styles;