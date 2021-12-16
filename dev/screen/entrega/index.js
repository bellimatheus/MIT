
import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'


export default function ped ({route}){
    const {id_pedido} = route.params
    const [array, setArray] = useState([]);
    const ex = () => {
        let url = "http://10.87.207.2:3000/entregas/entregues/" + id_pedido;
        fetch(url, {
            method: 'PUT',
        })
        .then((res) => {res.json()})
        .then((data) => {setArray(data)} )
        
    } 
console.log(array)
    
    useEffect(ex, [])

    return (
        <View>
            {
                array.map((e, index) => {
                    console.log(e)
                    return(
                        
                        <TouchableOpacity key={index} >
                            <Text style={style.coisa}>{e.cliente}</Text>
                            <Text style={style.coisa}>{e.endereco}</Text>
                            <Text style={style.coisa}>{e.produto}</Text>
                            <Text style={style.coisa}>{e.valor}</Text>

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
