import React from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../context/reducers';  
import styles from './FavoritedJobs.style';  

const FavoritedJobs = () => {
  const favoritedJobs = useSelector(state => state.favoritedJobs);  
  const dispatch = useDispatch();

  const handleRemove = (job) => {
    if (job && job.id) {
      dispatch(removeFromFavorites(job));  
    } else {
      console.error("Job veya ID eksik, favorilerden çıkarılamadı.");
    }
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobContainer}>  
      <Text style={styles.jobTitle}>{item.name}</Text> 
      <View style={styles.locations}>
        <Text style={styles.jobLocation}>{item.locations ? item.locations[0].name : 'Konum Bilinmiyor'}</Text>
      </View>
      <View >
        <Text style={styles.jobLevel}>{item.levels ? item.levels[0].name : 'Seviyesi Bilinmiyor'}</Text>
      </View> 
      <TouchableOpacity onPress={() => handleRemove(item) } style={styles.removeButton} >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoritedJobs}  
        keyExtractor={item => item.id.toString()}  
        renderItem={renderJobItem} 
      />
      
    </SafeAreaView>
  );
};

export default FavoritedJobs;
