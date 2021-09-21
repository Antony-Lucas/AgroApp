import React, { Component } from 'react';
import DropDownPicker from 'react-native-custom-dropdown';

const state = {
    diaSemana: [ ]
}

export default function Vaqueiros(){
    return(
        <DropDownPicker
            items={[
                {label: 'Segunda', value: 'Segunda',},
                {label: 'Terça', value: 'Terça',},
                {label: 'Quarta', value: 'Quarta',},
                {label: 'Quinta', value: 'Quinta',},
                {label: 'Sexta', value: 'Sexta',},
                {label: 'Sábado', value: 'Sábado',},
                {label: 'Domingo', value: 'Domingo',},
            ]}
            placeholder="Selecione"
            multiple={true}
            multipleText="%d dias"
            min={0}
            max={7}
            defaultValue={state.diaSemana}
            containerStyle={{height: 40, width: 150}}
            style={{backgroundColor: '#f5f5f5', borderColor: "#fff"}}
            itemStyle={{
                justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fff'}}
        />
    );
}
