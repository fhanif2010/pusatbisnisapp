import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const onLogin = () => {
        props.navigation.navigate('Login')
    }
    const onCallApiAxios = () => {
        props.navigation.navigate('CallApiAxios')
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.head.nav}>
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={onLogin}>
                            <FontAwesomeIcon icon={faBars} size={25} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                            <FontAwesomeIcon icon={faBell} size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Roboto', color: 'gray' }}>Hello,</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Roboto', color: 'black' }}>Mr Giat Ridhansyah</Text>
                    </View>
                </View>

                <View style={styles.search}>
                    <TouchableOpacity style={styles.search.info}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 60, fontFamily: 'Roboto', color: 'black' }}>9</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'Roboto', color: 'gray' }}>Event the Day</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.content}>
                    <View style={styles.content.menu}>
                        <TouchableOpacity style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../asset/image/icon/Events.png")} style={{ width: 120, height: 120,borderRadius: 10, }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center" }}  onPress={onCallApiAxios}>
                        <Image source={require("../../asset/image/icon/breakfast.png")} style={{ width: 120, height: 120,borderRadius: 10, }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content.menu}>
                        <TouchableOpacity style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../asset/image/icon/Booking.png")} style={{ width: 120, height: 120,borderRadius: 10, }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../asset/image/icon/Newspaper.png")} style={{ width: 120, height: 120, borderRadius: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = {
    container: {
        text: {
            fontWeight: 'bold',
            fontSize: 17
        }
    },
    head: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        height: 200,
        nav: {
            justifyContent: 'space-between',
            flexDirection: 'row',
        }
    },
    search: {
        alignItems: 'center',
        top: -30,
        info: {
            alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        height: 140,
        position: 'absolute',
        }
    },
    content: {
        top: 150,
        alignItems: 'center',
        height: 40,
        backgroundColor: 'gery',
        menu: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '85%',
            marginBottom: 20,
        }
    }

}