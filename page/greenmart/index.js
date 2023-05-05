import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Button
} from "react-native";
import axios from 'axios'

const Greenmart = (props) => {
    // let [quote, setQuote] = React.useState('')
    // let [source, setSource] = React.useState('')

    const axiosApiCall = () => {
        axios({
            "method": "GET",
            "url": "https://free-food-menus-api-production.up.railway.app/burgers",
            // "headers": {
            //     // "content-type": "application/octet-stream",
            //     "x-rapidapi-host": "moka-news.p.rapidapi.com",
            //     "x-rapidapi-key": "036babbd57mshdb0103f8d003d1ep1fffddjsnc43129d32b46",
            //     // "useQueryString": true
            // }, 
            // "params": {
            //     // "format": "JSON"
            //     "language_code": "en"
            // }
        })
            .then((result) => {
                console.log(result.data)
                // setQuote(response.data.content);
                // setSource(response.data.originator.name)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Hello Word</Text>
                <Button title='Get Data' onPress={axiosApiCall} />

                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, borderWidth: 1 }} />
                    {/* <Text>{quote}</Text> */}
                    {/* <Text>{source}</Text> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Greenmart;