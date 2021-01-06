import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const whether_option= {
        Thunderstorm : {
            iconName: "weather-lightning",
            gradient: ["#373B44", "#4286f4"],
            title : '번개',
            subTitle : '외출하면 전기통구이 되는거에요~'
        },
        Drizzle : {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66A6FF"],
            title : '우박',
            subTitle : '외출하면 대가리에 빵꾸납니다.'
        },
        Rain : {
            iconName: "weather-rainy",
            gradient: ["#00C6FB", "#005BEA"],
            title : '비',
            subTitle : '비가내린다 주륵주륵~'
        },
        Snow: {
            iconName: "weather-snowy",
            gradient: ["#7DE2FC", "#B9B6E5"],
            title : '눈',
            subTitle : '눈~눈~ 눈이 옵니다~하늘에서 눈이 옵니다~'
        },
        Atmosphere : {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66A6FF"],
            title : '건조함',
            subTitle : '딱~ 불지르기 좋은 날씨구만'
        },
        Clear : {
            iconName: "weather-sunny",
            gradient: ["#FEF253","#FF7300" ],
            title : '맑음',
            subTitle : '파뤼 투나잇~~'
        },
        Clouds : {
            iconName: "weather-cloudy",
            gradient: ["#D7D2CC", "#304352"],
            title : '먹구름',
            subTitle : '기분도 꿀꿀한데 파전에 막걸리 콜?'
        },
        Haze : {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title : '안개',
            subTitle : '보이지 않아~아직도~내 사랑 하나 못 찾고~'
        },
        Mist : {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title : '습함',
            subTitle : '집에 누워서 넷플릭스나 봐야겠다'
        },
        Dust : {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title : '미세먼지',
            subTitle : '거기 누구없냐?담배 하나만 줘봐라'
        }
}


export default function Weather({temp, condition}){
        return (
            <LinearGradient
            colors={whether_option[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true}></StatusBar>
                <View style={styles.halfContainerWeather}>
                    <MaterialCommunityIcons name={whether_option[condition].iconName} size={100} color="white" />
                    <Text style={styles.tempTxt}>{temp}˚</Text>
                </View>
                <View style={styles.halfContainerTxt}>
                    <Text style={styles.conditionTxt} >{whether_option[condition].title}</Text>
                    <Text style={styles.conditionSub}>{whether_option[condition].subTitle}</Text>
                </View>
            </LinearGradient>
        );
  
} 

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    halfContainerWeather : {
        flex : 1.5,
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    halfContainerTxt : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 30,
        paddingTop: 100,
    },
    tempTxt : {
        fontSize : 40,
        color : '#ffffff',
        marginTop : 10,
        marginLeft : 10
    },
    conditionTxt : {
        fontSize : 25,
        color : '#ffffff'
    },
    conditionSub : {
        fontSize : 18,
        color : '#ffffff',
        fontWeight : "600",
        marginTop : 10
    }
})