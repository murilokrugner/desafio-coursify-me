import React from 'react';

import {SafeAreaView} from 'react-native';

import {Container} from './styles';

import CategoryList from '../../../components/Posts/CategoryList';

import PostsList from '../../../components/Posts/PostsList';

import Footer from '../../../components/Footer';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <CategoryList />

        <Footer />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
