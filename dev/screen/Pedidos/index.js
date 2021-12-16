import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './sty.js'

export default function ped ({navigation, route}){
    const {id_entregador} = route.params;
    const [array, setArray] = useState([]);
    const ex = () => {
        let url = "http://10.87.207.2:3000/entregas/entregadores/"+id_entregador;
        fetch(url)
        .then((res) => {return res.json()})
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
                        
                        <TouchableOpacity key={index} onPress={() =>{navigation.navigate("Entrega", e)}}>
                            <Text style={style.coisa}>{e.endereco}</Text>

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

