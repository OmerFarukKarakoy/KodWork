import React from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import useFetch from '../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';
import styles from './Jobs.style';

const Jobs = () => {
  const { data, loading, error } = useFetch('https://www.themuse.com/api/public/jobs?page=1');
  const navigation = useNavigation();

  const renderJobs = ({ item }) => (
    <TouchableOpacity style={styles.jobItem} onPress={() => navigation.navigate('JobDetail', { job: item })}>
      <Text style={styles.jobTitle}>{item.name}</Text>
      <View style={styles.locations}>
        <Text style={styles.jobLocation}>{item.locations ? item.locations[0].name : 'Konum Bilinmiyor'}</Text>
      </View>
      <View >
        <Text style={styles.jobLevel}>{item.levels ? item.levels[0].name : 'Seviyesi Bilinmiyor'}</Text>
      </View>

    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Hata: {error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderJobs}
      />
    </SafeAreaView>
  );
};

export default Jobs;
