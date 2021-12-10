import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import style from "./style.js"

export default function ({navigation}){
    const json = [
        {
            "Capa": "https://static3.mangalivre.net/cdnwp3/capas/IyO4Yg2wIkBqE5o4AAf9fg/9189/6037ed034e8eaexternal_cover.jpg",
            "capitulos": [
                {
                    "cap": "Mash Vandead e o Corpo dos Deuses",
                    "link": "https://mangalivre.net/ler/mashle/online/207527/capitulo-1"

                },
                {
                    "cap": "Mash Vandead e o Labirinto Misterioso",
                    "link": "https://mangalivre.net/ler/mashle/online/207973/capitulo-2"
                    
                },
                {
                    "cap": "Mash Vandead e o Boneco da Morte",
                    "link": "https://mangalivre.net/ler/mashle/online/209015/capitulo-3"
                    
                },
                {
                    "cap": "Mash Vandead e a Limpeza Total",
                    "link": "https://mangalivre.net/ler/mashle/online/209914/capitulo-4"
                    
                },
                {
                    "cap": "Mash Vandead e o Valentão Cruel",
                    "link": "https://mangalivre.net/ler/mashle/online/210695/capitulo-5"
                    
                }
            ]
        }
    ]
    return (
        <View style={style.vendo}>
            
            {
                json.map((item, index) => {
                    return (                    
                        <TouchableOpacity key={index} onPress={() =>{navigation.navigate("Apag", item.capitulos)}} style={style.capa}>
                            <Image source={{uri:item.Capa}} style={style.imagem}/>
                            <Text>Mashle</Text>
                        </TouchableOpacity>
                    )

                })
            }
        </View>
    )

}