import { View, Text,Button} from 'react-native';
import { useEffect,useState} from 'react';
import axios from 'axios'
import { DataTable } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const Book = () => {
    axios.defaults.withCredentials = true;
    const [data,setData] = useState([])
    const [data2,setData2] =  useState([])
    const [id,setId] =  useState()
    const [success,setSuccess] =  useState('')

    useEffect(()=>{
        book();
        axios.get('http://172.18.1.144:4000/units')
        .then((res)=>{
            //console.warn(res.data)
            setData(res.data)

        })
        .catch((err)=>{
            console.warn(err)

        })

    },[]);

    const book = (cid) => {
        axios.get('http://172.18.1.144:4000/getid')
        .then((res)=>{
           // console.warn(res.data)
            setData2(res.data)
        })
        .catch((err)=>{
            console.warn(err)
        })


        data2.map((dat)=>{
            setId(dat.id)

      })


    axios.post('http://172.18.1.144:4000/book',{
        userId : id,
        courseId:cid
    })
    .then((res)=>{
       //console.warn(res.data)
       setSuccess(res.data.message)
    })
    .catch((err)=>{
        console.warn(err)
    })


    

     
    }
    const display = ()=>{
        return data.map((dat)=>{
            return (<DataTable.Row>
                <DataTable.Cell>{dat.id}</DataTable.Cell>
                <DataTable.Cell>{dat.Name}</DataTable.Cell>
              
                <DataTable.Cell>{dat.Moderator}</DataTable.Cell>
              
                <DataTable.Cell>{dat.fee}</DataTable.Cell>
              
                <DataTable.Cell>
                    <Button title="book"
                    onPress={()=>{
                        book(dat.id)


                    }}
                    />
  
                    
                </DataTable.Cell>
              
              

           


            </DataTable.Row>)
        })
    }
    return (
        <View style={styles.container2}>
            <Text style={styles.head}>
                Select Unit To Book
            </Text>
            <Text style={styles.error}>{success}</Text>
            <View>
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Id</DataTable.Title>
      <DataTable.Title>Name</DataTable.Title>
      <DataTable.Title>Moderator</DataTable.Title>
      <DataTable.Title>Fee</DataTable.Title>
      <DataTable.Title>Select</DataTable.Title>

    </DataTable.Header>




{display()}


  </DataTable>



</View>
        </View>        
    );
}

export default Book;