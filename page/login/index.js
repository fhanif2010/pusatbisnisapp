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
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    const onHome = () => {
        props.navigation.navigate('Home')
    }
    const onSignUp = () => {
        props.navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <Image source={require("../../asset/image/logo/LogoPB.png")} style={{ width: 150, height: 150, }} />
            </View>
            <KeyboardAvoidingView>
                <View style={{ marginTop: 40, marginBottom: 20 }}>
                    <View style={{ marginBottom: 25, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}>
                        <FontAwesomeIcon icon={faEnvelope} size={15} color='#303481' />
                        <TextInput style={{ flex: 1, paddingHorizontal: 10, marginLeft: 10, fontSize: 18 }}></TextInput>
                    </View>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}>
                        <FontAwesomeIcon icon={faKey} size={15} color='#303481' />
                        <TextInput secureTextEntry={true} style={{ flex: 1, paddingHorizontal: 10, marginLeft: 10, alignItems: 'center', fontSize: 18 }}></TextInput>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={onHome} style={{ backgroundColor: '#303481', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
            <View style={{ marginVertical: 20, alignItems: 'center' }}>
                <Text>Or</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={{ borderRadius: 20, width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../asset/image/icon/outlook.png")} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 20, width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../asset/image/icon/google.png")} style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 20, width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../asset/image/icon/facebook.png")} style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Don`t have an account ?  </Text>
                    <TouchableOpacity onPress={onSignUp}>
                        <Text style={{ fontWeight: 'bold', color: '#303481' }}>Sign Up  </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default Login;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        text: {
            fontWeight: 'bold',
            fontSize: 17
        }
    },
    head: {
        alignItems: 'center',
    }

}