import React, {useEffect, useState} from 'react'
import {View ,Text, TouchableOpacity} from 'react-native'

export default function Eqq ({route}){
    const {id} = route.params
    const [equipe, setEquipe] = useState({
        "nomeEquipe": "",
        "jogadores": [
        {
        "posicao": "top",
        "jogador": ""
        },
        {
        "posicao": "mid",
        "jogador": ""
        },
        {
        "posicao": "jg",
        "jogador": ""
        },
        {
        "posicao": "adc",
        "jogador": ""
        },
        {
        "posicao": "sup",
        "jogador": ""
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
                            <TouchableOpacity>
                                <Text>{e.jogador}</Text>
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