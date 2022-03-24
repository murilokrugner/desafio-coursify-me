import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';

import {Container} from './styles';

import PickerFilter from '../../../components/PickerFilter';
import CategoryList from '../../../components/Posts/CategoryList';

const Home: React.FC = () => {
  const [selectFilter, setSelectFilter] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <PickerFilter selectFilter={selectFilter} setSelectFilter={setSelectFilter}/>
        <CategoryList selectFilter={selectFilter} />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
