import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import style from "./style.js"

export default function ({route}) {
    const capitulo = route.params;
    console.log(capitulo);

    return (
        <View style={style.viu}>
            {
               
                capitulo.map((i, index) => 
                        <TouchableOpacity key={index} style={style.killjoy} onPress={() => { 
                            window.location.href = i.link;
                         }}>
                            <Text>{i.cap}</Text>
                        </TouchableOpacity>
                )
            }
        </View>

    );

}