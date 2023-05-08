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
import { faBars, faBell, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const onLogin = () => {
        props.navigation.navigate('Login')
    }
    const onCallApiAxios = () => {
        props.navigation.navigate('CallApiAxios')
    }
    const onGreenmart = () => {
        props.navigation.navigate('Greenmart')
    }
    const onSplashScreen = () => {
        props.navigation.navigate('SplashScreen')
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.head.nav}>
                        <TouchableOpacity style={{ paddingHorizontal: 8, width: '85%', height: 40, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: '#F5F5F5', flexDirection: 'row' }} >
                            <FontAwesomeIcon icon={faSearch} size={25} color="gray" />
                            <TextInput placeholder="Cari kebutuhan anda disini" style={{ flex: 1, marginHorizontal: 7 }}></TextInput>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={onSplashScreen}>
                            <FontAwesomeIcon icon={faUserCircle} size={40} color="white" />
                            <View style={{ backgroundColor: 'red', borderRadius: 20, width: 20, height: 20, position: 'absolute', top: -5, right: -2 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Roboto', color: '#BBBFCA' }}>Hello,</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Roboto', color: 'white' }}>Mr Giat Ridhansyah</Text>
                    </View>
                </View>



                <View style={styles.content}>
                    <View style={{ height: "30%", width: "100%", borderRadius: 30, backgroundColor: '#D6E6F2', marginBottom: 40 }}>

                    </View>

                    <View style={styles.content.menu}>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/calendar.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/hotel.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Hotel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/foodstall.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Gren Cafe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/firstaidkit.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Poliklinik</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/warehouse.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Room</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/books.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Training Institute</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/pool.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Sauna</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content.menu.btn}>
                            <Image source={require("../../asset/image/icon/app.png")} style={styles.content.menu.img} />
                            <Text style={styles.content.menu.text}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={{width: '100%', paddingHorizontal: 20}}>
                    <View style={{backgroundColor: 'gray', paddingBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Nikmati Promo Menarik</Text>
                        <Text>Dapatkan diskon menarik sekarang juga, sebelum kehabisan !</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: "100%", height: 60}}>

                    </View>
                </View> */}
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
        paddingHorizontal: 15,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#303481',
        // height: "30%",
        nav: {
            justifyContent: 'space-between',
            flexDirection: 'row',
        }
    },

    content: {
        // height: "58%",
        borderRadius: 30,
        marginTop: -30,
        backgroundColor: '#F5F5F5',
        paddingVertical: 20,
        paddingHorizontal: 20,
        menu: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
            flexWrap: 'wrap',
            btn: {
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                marginHorizontal: 5,
                marginBottom: 15

            },
            img: {
                width: 50,
                height: 50,
                borderRadius: 10,
                marginBottom: 5
            },
            text: {
                fontSize: 14,
            }

        }
    }

}