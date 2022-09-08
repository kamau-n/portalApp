import { View, Text,Button,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator} from  '@react-navigation/native-stack';


const Main = () => {
    return (
        <View>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Button title='Login' onPress={()=>{
               // navigation.navigate('Login')
            }}/>

           <Button title='Register' onPress={()=>{
                //navigation.navigate('Register')
            }}/>

        </View>

        
    );
}

export default Main;