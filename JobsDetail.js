import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Alert, TouchableOpacity } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../context/reducers'; 
import styles from './JobsDetail.style';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const JobDetail = ({ route }) => {
  const { job } = route.params;
  const dispatch = useDispatch();  
  console.log('Job Details:', job);
  if (!job) {
    return <Text>Detay yüklenemedi, iş bilgisi bulunamadı.</Text>;
  }

  const { width } = useWindowDimensions();

  const handleAddToFavorites = () => {
    if (job && job.id) {
      dispatch(addToFavorites(job));
    } else {
      console.error("Job veya ID eksik, favorilere eklenemedi.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>{job.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Location: </Text>
            {job.locations && job.locations.length > 0 ? job.locations[0].name : 'Unknown'}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Job Level: </Text>
            {job.levels && job.levels.length > 0 ? job.levels[0].name : 'Unknown'}
          </Text>
        </View>
        <Text style={styles.infoHeader}>Jobs Detail</Text>
        <View style={styles.detailContainer}>
          <RenderHTML contentWidth={width} source={{ html: job.contents }} style={styles.detailText} />
        </View>
        <View style={styles.Input}>
          <TouchableOpacity style={styles.submitButton} onPress={() => Alert.alert('Başvuru Gönderildi', 'Başvurunuz başarıyla gönderildi.')}>
            <Icon name="application-import" style={styles.iconSubmit}/>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton} onPress={()=> 
            {handleAddToFavorites(); 
            Alert.alert('SUCCESS','The selected job has been added to your favorites list.')
            }} >
            <Icon name="cards-heart" style={styles.iconFavorite}/>
            <Text style={styles.buttonText}>Favorite Job</Text>
          </TouchableOpacity>
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetail;
