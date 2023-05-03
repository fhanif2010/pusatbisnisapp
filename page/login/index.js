import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
} from 'react-native';

const Login = (props) => {
    const onHome = () => {
        props.navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <Image source={require("../../asset/image/logo/LogoPB.png")} style={{ width: 150, height: 150, }} />
            </View>

            <View style={{ marginVertical: 50 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.container.text}>Email</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 15 }}></TextInput>
                </View>
                <View>
                    <Text style={styles.container.text}>Password</Text>
                    <TextInput style={{ borderWidth: 1, borderRadius: 15,}}></TextInput>
                </View>
            </View>

            <View>
                <Button title="submit" onPress={onHome}/>
            </View>

            <View style={{ marginVertical: 20, alignItems: 'center' }}>
                <Text>Or</Text>
            </View>


            <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{ borderWidth: 1, borderRadius: 20, width: 60, height: 60 }}></View>
                <View style={{ borderWidth: 1, borderRadius: 20, width: 60, height: 60 }}></View>
                <View style={{ borderWidth: 1, borderRadius: 20, width: 60, height: 60 }}></View>
            </View>

            <View style={{alignItems:'center', marginTop: 20}}>
                <View style={{ flexDirection:'row'}}>
                    <Text>Don`t have an account ?  </Text>
                    <Text style={{ fontWeight: 'bold', color: 'blue'}}>Sign Up  </Text>
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