import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';

import styles from './styles'
import {useState} from "react"
import axios from 'axios'

export default  ({navigation})=>{
    const [username,setUsername] =  useState();
    const [email,setEmail] =  useState();
    const [address,setAddress] =  useState();
    const [password,setPassword] =  useState();
    const [confirm,setConfirm] = useState();
    const handleRegister= ()=>{
       // console.warn(username,email,password,address)
        axios.post('{ip address to the server}/register',{
            name:username,
            password:password,
            county:address,
            email:email,

        })
        .then((res)=>{
           // console.warn(res.data)
            setConfirm(res.data.message)
            

        })
        .catch((err)=>{
            console.warn(err)

        })

    }



    


    return(

        <View style={styles.body}>

<View style={styles.container}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>


<Image style={styles.img}
            source={require('./codeit.png')}
            />

<Text style={styles.error}>{confirm}</Text>

<TextInput  style={styles.input} placeholder='Enter Your Username' onChangeText={(val)=>{
    setUsername(val)
}} />
<TextInput  style={styles.input} placeholder='Enter Your Email' onChangeText={(val)=>{
    setEmail(val)
}} />
<TextInput  style={styles.input} placeholder='Enter Your Address' onChangeText={(val)=>{
    setAddress(val)
}} />
<TextInput  style={styles.input} placeholder='Enter Your Password' onChangeText={(val)=>{
    setPassword(val)
}} />

<TouchableOpacity  style={styles.button} onPress={handleRegister}>
 <Text style={styles.btn_text}>Register</Text>

</TouchableOpacity>

<Text style={styles.link} onPress={()=>{
    navigation.navigate('Login')

}}>
Already have an Account


</Text>


</View>
</View>
    )

}
