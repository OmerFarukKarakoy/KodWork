import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  jobContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,  
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  locations:{
    borderRadius:5,
    border:5,
    backgroundColor:'#ff6b6b',
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
    color:'#ff6b6b',
    margin:5,
    textAlign:'right'
  },
});
