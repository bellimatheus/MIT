import React, {useEffect, useState} from 'react'
import {View ,Text, TouchableOpacity} from 'react-native'

export default function Eqq ({route}){
    const {id} = route.params
    const [equipe, setEquipe] = useState({
        "nomeEquipe": "",
        "jogadores": [
        {
        "posicao": "top",
        "nome": ""
        },
        {
        "posicao": "mid",
        "nome": ""
        },
        {
        "posicao": "jg",
        "nome": ""
        },
        {
        "posicao": "adc",
        "nome": ""
        },
        {
        "posicao": "sup",
        "nome": ""
        }
        ],
        "nomeCoach": ""
        });

    

    const ex = () => {
        let url = "http://10.87.207.20:8080/api/equipe/"+id;
        fetch(url)
        .then((res) => {return res.json()}) 
        .then((data => {setEquipe(data) })
    )}

    useEffect(ex, [])

    return(
        <View>
            <Text>{equipe.nomeEquipe}</Text>
            <View>
                {
                    equipe.jogadores.map((e, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <Text>{e.nome}</Text>
                                <Text>{e.posicao}</Text>
                            </TouchableOpacity>
                        )
                    }) 
                }
            </View>
            <Text>{equipe.nomeCoach}</Text>
        </View>
    )
}