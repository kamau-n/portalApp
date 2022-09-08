import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';
//import {  } from "react-router-native";
import {useState,useEffect} from 'react'
import styles from './styles'
import axios from 'axios';

const Login =  ({navigation})=>{
    axios.defaults.withCredentials = true;
    const [username,setUsername]= useState();
    const [password,setPassword] = useState();
    const [confirm,setConfirm] = useState()





    const [verified,setVerified] = useState(false)
    

    //Function to handle the submit
    const redirect = ()=>{
        if(verified) {
            navigation.navigate('Portal')
            
        }
        else{
            setConfirm(res.data.message)
            console.warn(res.data.message)
        }

    }

    const handleSubmit =()=>{
       // console.warn(confirm)
       // console.warn(username,password)
        axios.post('http://172.18.1.144:4000/login',{
            name:username,
            password:password
        })
        .then((res)=>{
            if(res.data.verified)
            {
                navigation.navigate('Dash')
            }
      
       
    
        })
        .catch((err)=>{
           // console.warn(err)
            console.log(err)
        })

      

     
     


    }
    return(
        <View style={styles.body}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

            <Image style={styles.img}
            source={require('./codeit.png')}
            />

           


<View style={styles.container}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "silver" translucent = {true}/>

{ /*
<Text style= {styles.top}>
 Login Here

</Text>

*/}
<Text style={styles.error}>{confirm}</Text>







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

<Text style={styles.link} onPress={()=>{
    navigation.navigate('Register')

}}>
Create an Account


</Text>













</View>
</View>
    )

}

export default Login