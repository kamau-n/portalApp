import { View, Text,Button,TouchableOpacity} from 'react-native';
import { DataTable } from 'react-native-paper';
import styles from './styles'
import {useState,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import axios from 'axios'
const Dash = ({navigation}) => {
    axios.defaults.withCredentials = true;
    const [data,setsData] = useState([])
    const [id,setId] =  useState()
    const [data2,setData2] = useState()
    useEffect(()=>{
        axios.get('http://172.18.1.144:4000/logged')
        .then((res)=>{
           // console.warn(res.data)
           //console.log(res.data)
            setsData(res.data.user)
            //console.warn(res.data.user)
        })
        .catch((err)=>{
            console.warn(err)
        })


    },[])

  

   
 
      
      

    
  

    const logout = () => {
        navigation.navigate('Login')
    }




    // a function to display te the user data
    const display = ()=>{
        return data.map((dat)=>{
           
            return (

                

                <View style={styles.display}>
                    <Text style={styles.dat}>  User ID :{dat.id} </Text>
                    <Text style={styles.dat}> USerName : {dat.Name} </Text>
                    <Text style={styles.dat}> UserEmail : {dat.email} </Text>
                    <Text style={styles.dat}> UserAddress : {dat.county} </Text>
                   
                     <View>
                         <DataTable>
                             <DataTable.Header>
                                 <DataTable.Title>
                                     #
                                 </DataTable.Title>
                                 <DataTable.Title>
                                     Name
                                 </DataTable.Title>
                             </DataTable.Header>
                         </DataTable>
                       


                     </View>
                    
                </View>
                
            )

        
           
            
        }
        )
        
    }
    
    


    return (
    
        <View style={styles.content}>
        <Text> id is : {id}</Text>
        <Text style={styles.top}>UserData</Text>
     <Text>{display()}</Text>

     
       

        




    </View>



       


      
        
        
    );
}

export default Dash;