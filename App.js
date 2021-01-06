import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';


const WEATHER_API_KEY = '9a8de0bc1768dd8cbe8daa901586f680';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       isLoading : true
    };
    
  }



  getWheather = async(latitude,longitude) => {
    const {
      data:{
        main : {temp}
        , weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
    this.setState({isLoading : false, temp , condition : weather[0].main});
  }
  
  getLocation = async()=>{
    try{
      await Location.requestPermissionsAsync()
      const location = await Location.getCurrentPositionAsync();
      
      const {coords: { latitude, longitude}} = location;
      // send to API so get weather!!
      this.getWheather(latitude,longitude)
      
    }catch(error){
      console.log(error);
      Alert.alert("You not permission so Can't find you", "bye!!");
    }
  }

  componentDidMount(){
    this.getLocation();
  }


  render(){
    const { isLoading, temp, condition } = this.state;

    return (
      isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />
    );
  }
  
}


