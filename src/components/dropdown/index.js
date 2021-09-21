import React, { Component } from 'react';
import DropDownPicker from 'react-native-custom-dropdown';

const state = {
    Bovinos: [ ]
}

export default function Bovinos(){
    return(
        <DropDownPicker
            items={[
                {label: 'Bezerro', value: 'Bezerro',},
                {label: 'Vaca', value: 'Vaca',},
            ]}
            placeholder="Ordenar por"
            multiple={true}
            multipleText="%d itens selecionados"
            min={0}
            max={3}
            defaultValue={state.Bovinos}
            containerStyle={{height: 40, width: 150}}
            style={{backgroundColor: '#fff', borderColor: "#fff"}}
            itemStyle={{
                justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fff'}}
        />
    );
}
