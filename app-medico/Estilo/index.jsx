import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container : {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
   },
   imagem : {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    margin: 30
   },
   button : {
    width : '80%',
    margin: 30,
    borderRadius: 20,
    height: 60,
    backgroundColor: '#154360'
   },
   buttontext: {
    fontFamily : 'Arial',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15,
    color: '#ffffff'
   },
   buttontext2 : {
    fontFamily : 'Arial',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 1,
    color: '#ffffff'
   },
   card : {
     marginLeft: 20,
     marginRight: 20,
     width: '90%',
     backgroundColor : '#d3d3d3',
     padding: 10,
     height: 350   
   },
   header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#153460'
   },
   input : {
    width:'90%',
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: '#081534',
    borderRadius: 10,
    fontSize: 15,
    backgroundColor : '#ffffff'
   },
   containercard: {
      width: '90%',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 12,
      marginVertical: 8,
      alignSelf: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {width:0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4
   },
   texto: {
      fontSize: 15,
      color: '#333',
      fontWeight: '500'
   },
   contentList: {
      flex: 1,
      width: '100%',
      alignSelf: 'center',
      backgroundColor: '#E4EEF1',
      paddingTop: 10
   },
   cardList: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 12,
      marginVertical:8,
      alignSelf: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {width:0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4
   },
   cardlinha: {
    flexDirection: 'row',
   },
   buttonitem: {
     backgroundColor: '#154360',
     width: '45%',
     height: 30,
     marginTop: 5,
     marginLeft: 5,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 30,
     marginLeft: 5
   },
   cardContent: {
     flexDirection: 'column',
     gap: 6
   },
   cardcoluna: {
     flexDirection: 'column'
   },
   botoesacoes: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     marginTop: 10,
     gap: 18
   },
   emptyListContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
   },
   emptyListText: {
    fontSize: 18,
    color: 'gray'
   }
});

export default styles;