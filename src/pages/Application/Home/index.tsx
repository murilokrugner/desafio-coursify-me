import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';

import {Container} from './styles';

import CategoryList from '../../../components/Posts/CategoryList';

import Footer from '../../../components/Footer';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Container>
        <CategoryList />

      </Container>
    </SafeAreaView>
  );
};

export default Home;
