
import React, {useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Button} from 'react-native'

 
export default function ped ({route}){
    function entregue (){
        const {id_pedido} = route.params
    
        let url = "http://10.87.207.2:3000/entregas/entregues/" + id_pedido;
        fetch(url, {
            method: 'PUT',
         })
        .then((res) => {
            if(resp.status == 200) {
                return resp.json();
            }
        })
        .then((data) => {console.log(data)} )
        .catch (err => {console.log(err)})

        }
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
                            <Button onPress={() => {entregue()}></Button>

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
