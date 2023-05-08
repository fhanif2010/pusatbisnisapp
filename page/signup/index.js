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
import { faAt, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const SignUp = (props) => {

    const onLogin = () => {
        props.navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <Image source={require("../../asset/image/logo/LogoPB.png")} style={styles.head.image} />
            </View>
            <KeyboardAvoidingView>
                <View style={{ marginTop: 40}}>
                    <View style={{ marginBottom: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}>
                        <FontAwesomeIcon icon={faEnvelope} size={15} color='#303481' />
                        <TextInput style={{ flex: 1, paddingHorizontal: 5, marginLeft: 10, fontSize: 18 }} placeholder="Email"></TextInput>
                    </View>
                    <View style={{ marginBottom: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}>
                        <FontAwesomeIcon icon={faKey} size={15} color='#303481' />
                        <TextInput secureTextEntry={true} style={{ flex: 1, paddingHorizontal: 5, marginLeft: 10, alignItems: 'center', fontSize: 18 }} placeholder="Password"></TextInput>
                    </View>
                    <View style={{ marginBottom: 25, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, borderColor: 'gray' }}>
                        <FontAwesomeIcon icon={faKey} size={15} color='#303481' />
                        <TextInput secureTextEntry={true} style={{ flex: 1, paddingHorizontal: 5, marginLeft: 10, alignItems: 'center', fontSize: 18 }} placeholder="Confirm Password"></TextInput>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={onLogin} style={{ backgroundColor: '#303481', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
            
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>I have an account ?  </Text>
                    <TouchableOpacity onPress={onLogin}>
                        <Text style={{ fontWeight: 'bold', color: '#303481' }}>Sign In  </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignUp;

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
        image: {
            width: 150, 
            height: 150,
        }
    }

}