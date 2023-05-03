import Axios from 'axios';
import react, { useEffect, useState } from 'react'
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import { err } from 'react-native-svg/lib/typescript/xml';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    length
} from 'react-native';
import { BounceInRight } from 'react-native-reanimated';

const CallApiAxios = () => {
    const [dataUser, setDataUser] = useState({
        // id: '',
        // img: '',
        // name: '',
        // dsc: '',
        // price: '',
        // rate: '',
        // country: ''

        avatar: '',
        email : '',
        name :'',
        year : ' '
    })

    const getData = () => {
        Axios.get('https://restaurant-api.dicoding.dev')
            .then(result => {
                console.log(result.data)
                // setDataUser(result.data.data);
            })
    }

    return (
        <View style={Styles.container}>
            <Text>Get Data</Text>
            <Button title='Get Data' onPress={getData} />
                <View style={{ marginTop: 40}}>
                   {/* <Image source={{uri: dataUser.avatar}} /> */}
                    
                    <Text>{dataUser.name}</Text>
                    <Text>{dataUser.year}</Text>
                </View>
        </View>
    )
}

const Styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    }
}
export default CallApiAxios;