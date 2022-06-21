import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Linking} from 'react-native';
import { NativeRouter, Route, Routes,Link } from "react-router-native";
import styles from './styles'

export default  ()=>{
    return(

        <View style={styles.body}>

<View style={styles.container}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
<Text style= {styles.top_bar}>
    CODE IT
</Text>
<Text style= {styles.top}>
 Register Here

</Text>

<TextInput  style={styles.input} placeholder='Enter Your Username'/>
<TextInput  style={styles.input} placeholder='Enter Your Email'/>
<TextInput  style={styles.input} placeholder='Enter Your Address'/>
<TextInput  style={styles.input} placeholder='Enter Your Password'/>

<TouchableOpacity  style={styles.button}>
 <Text style={styles.btn_text}>Register</Text>

</TouchableOpacity>
<Link to="/">
  <Text style={styles.links}>Already Have an Acccount</Text>
</Link>



</View>
</View>
    )

}