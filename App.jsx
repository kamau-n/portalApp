import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Linking,Button,LogoTitle} from 'react-native';
import styles from './styles'
//import { NativeRouter, Route, Routes,Link } from "react-router-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

//import HomePage from './Homepage'
import Register from './Register'
import Portal from './Portal'
import Main from './Main'
import Login from './Login'
import Book from './Book'
import Dash from './Dash'
//import createNavigateSt
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator} from  '@react-navigation/native-stack';

const Stack  = createNativeStackNavigator();

export default function App() {
  return (


   



  
  <NavigationContainer>
  <Stack.Navigator>

    
   
    <Stack.Screen name ="Login" component={Login} />
    <Stack.Screen name ="Register" component={Register} />
    <Stack.Screen name ="Portal" component={Portal} />
    <Stack.Screen name ="Book" component={Book} />
    <Stack.Screen name ="Dash" component={Dash} />

    

   

    
    



  </Stack.Navigator>
  </NavigationContainer>

  )







    /*
  <View>
    <NativeRouter>
      
      
      <Routes>
      <Route path="/"   element={<Home/>}/>
      <Route path="/register"   element={<Register/>}/>
      <Route path="/portal"  element={<Portal/>} />

  
      </Routes>


    </NativeRouter>


  </View>
  */
  
}


