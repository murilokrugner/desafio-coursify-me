import React from 'react';
import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { Container, TitlePicker, ContainerPicker } from './styles';
import fonts from '../../global/styles/fonts';

const PickerFilter: React.FC = ({selectFilter, setSelectFilter}) => {

  return (
    <Container>
      <TitlePicker>ORDERNAR POR: </TitlePicker>
      <ContainerPicker>
      <Picker
        selectedValue={selectFilter}
        style={{color: '#000', backgroundColor:'#fff',width: 150, height: 5}}
        dropdownIconColor={'#000'}        
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) =>
          setSelectFilter(itemValue)
        }>
        <Picker.Item label="Padrão" value="Padrão"  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    fontSize: 14,
                    fontFamily: `${fonts.primary}`
                }}/>
        <Picker.Item label="A-Z" value="A-Z"  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    fontSize: 14,
                    fontFamily: `${fonts.primary}`
                }}/>
        <Picker.Item label="Z-A" value="Z-A"  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    fontSize: 14,
                    fontFamily: `${fonts.primary}`
                }}/>
        <Picker.Item label="Mais visualizados" value="Mais visualizados"  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    fontSize: 14,
                    fontFamily: `${fonts.primary}`
                }}/>
        <Picker.Item label="Menos visualizados" value="Menos visualizados"  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    fontSize: 14,
                    fontFamily: `${fonts.primary}`
                }}/>
      </Picker>
      </ContainerPicker>
      <Text style={{width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
    </Container>
  );
}

export default PickerFilter;