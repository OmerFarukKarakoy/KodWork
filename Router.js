import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobsDetail';  
import FavoritedJobs from './pages/FavoritedJobs';
import { Provider } from 'react-redux';
import store from './context/store';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Jobs" 
      component={Jobs} 
      options={{ 
        title: 'Jobs List', 
        headerTintColor:'red', 
        headerTitleAlign:'center'
      }}  
    />
    <Stack.Screen 
      name="JobDetail" 
      component={JobDetail} 
      options={{ 
        title: 'Jobs List Back', 
        headerTintColor:'red',
        headerTitleStyle:{fontSize:15}
      }} 
    />
  </Stack.Navigator>
);

const Router = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Jobs" screenOptions={{drawerActiveTintColor:'red'}}>
        <Drawer.Screen 
          name="Jobs" 
          component={JobsStack}
          options={{headerTintColor:'red'}}  
        />
        <Drawer.Screen 
          name="FavoritedJobs" 
          component={FavoritedJobs} 
          options={{ title: 'Favorited Jobs', headerTintColor:'red', }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
);

export default Router;
