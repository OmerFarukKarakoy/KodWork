import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  jobItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    borderWidth:0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locations:{
    borderRadius:5,
    border:5,
    backgroundColor:'#ef2525',
    borderRadius:50,
    width:110,
    padding:5,
    
  },
  jobLocation: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
    textAlign:'center',
    fontWeight:'bold',
  },
  jobLevel:{
    fontSize:13,
    color:'red',
    margin:5,
    textAlign:'right'
  },
});
