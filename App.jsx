import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Linking} from 'react-native';
import styles from './styles'
import { NativeRouter, Route, Routes,Link } from "react-router-native";
import Home from './Home'
import Register from './Register'
import Portal from './Portal'
//import createNavigateSt


export default function App() {
  return (
  <View>
    <NativeRouter>
      
      
      <Routes>
      <Route path="/"   element={<Home/>}/>
      <Route path="/register"   element={<Register/>}/>
      <Route path="/portal"  element={<Portal/>} />


  
      </Routes>


    </NativeRouter>


  </View>
  );
}


