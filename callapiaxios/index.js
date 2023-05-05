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
    FlatList
} from 'react-native';
import { BounceInRight } from 'react-native-reanimated';

const CallApiAxios = () => {

    const [dataUser, setDataUser] = useState({
        email: '',
        name: '',
        year: ' '
    })

    //API Data Pegawai (https://reqres.in/api/user/1)

    const getData = () => {
        Axios.get('https://reqres.in/api/user/1')
            .then(result => {
                console.log(result.data)
                setDataUser(result.data.data);
            })
    }

    return (
        <View style={Styles.container}>
            <Text>Get Data</Text>
            <Button title='Get Data' onPress={getData} />
            
            <View style={{ marginTop: 40 }}>
                <View style={{ width: 50, height: 50, borderWidth: 1}}/>
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