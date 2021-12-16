import React, { useEffect, useState } from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import style from './sty'

export default function Home ({navigation}){


    const [list, setList] = useState([]);

    const ex = () => {
        let url = "http://10.87.207.2:3000/entregas/entregadores"
        fetch(url)
        .then((res) => res.json())
        .then((data) => {setList(data) })
    }

    useEffect(ex, [])

    return (
        <View>
            <Text>Entregadores:</Text>
            {
                list.map((e, index) => {
                    console.log(e)
                    return(
                        <TouchableOpacity key={index} onPress={() => {navigation.navigate("Pedidos", e)}}>
                            <Text style={style.coisa}>{e.nome}</Text>
                            
                        </TouchableOpacity>
                    )
                })
            }
            
        </View>
    )
}