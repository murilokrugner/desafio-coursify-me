import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

import CategoryList from '../../../components/Posts/CategoryList';
import PostsList from '../../../components/Posts/PostsList';
import Footer from '../../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <CategoryList />
      <PostsList />

      <Footer />
    </Container>
  );
};

export default Home;
