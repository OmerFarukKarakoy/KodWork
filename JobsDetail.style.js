import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:'bold',
    color:'black',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: 'red',
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  favoriteButton: {
    backgroundColor: 'red',
    padding: 15,
    height:60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    marginLeft:10,
    flexDirection:'row'
  },
  iconFavorite:{
    textAlign:'left',
    fontSize:30,
    color:'white',
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    height:60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    marginRight:10,
    flexDirection:'row'
  },
  iconSubmit:{
    textAlign:'left',
    fontSize:30,
    color:'white',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoHeader:{
    margin:5,
    padding:5,
    fontSize:23,
    fontWeight:'bold',
    textAlign:'center',
  },
  Input:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  
  
});
