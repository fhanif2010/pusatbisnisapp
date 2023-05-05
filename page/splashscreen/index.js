import React, {useEffect} from 'react';
import { SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';


const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout( () => {
            navigation.navigate('Login');
    }, 5000)
    },[navigation]);
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <Image source={require("../../asset/image/logo/LogoPB.png")} style={{ width: 200, height: 200, }} />
            <View>
            
            </View>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        hight: '100%'
    },
}