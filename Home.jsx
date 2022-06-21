import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Linking} from 'react-native';
import { NativeRouter, Route, Routes,Link } from "react-router-native";
import {useState,useEffect} from 'react'
import styles from './styles'
import axios from 'axios';
//import {android.os.Bundle}
export default  ()=>{
    const [username,setUsername]= useState();
    const [password,setPassword] = useState();
    const [confirm,setConfirm] = useState('')

    //Function to handle the submit

    const handleSubmit =()=>{
        console.warn(username,password)
        axios.post('http://172.18.1.220:4000/login',{
            name:username,
            password:password
        })
        .then((res)=>{
        if(res.data.verified){
            Navigator
        }

        })
        .catch((err)=>{
            console.warn("there was an err")
            console.log(err)
        })


    }
    return(
        <View style={styles.body}>

<View style={styles.container}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "silver" translucent = {true}/>
<Text style= {styles.top_bar}>
    CODE IT
</Text>
<Text style= {styles.top}>
 Login Here

</Text>

<TextInput  style={styles.input} placeholder='Enter Your Username' onChangeText={(val)=>{
    setUsername(val)
}}/>
<TextInput  style={styles.input} placeholder='Enter Your Password'onChangeText={(val)=>{
    setPassword(val)
}}/>
<Text style={styles.link}>Forgot Password?</Text>

<TouchableOpacity  style={styles.button} onPress={handleSubmit}>
 <Text style={styles.btn_text}>Login</Text>

</TouchableOpacity>
<Link to="/register">
  <Text style={styles.links}>Create an Account</Text>
</Link>




</View>
</View>
    )

}