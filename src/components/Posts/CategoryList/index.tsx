import React from 'react';
import {View} from 'react-native';

import {
  Container,
  CategoryName,
  ButtonViewMore,
  TextButtonViewMore,
} from './styles';

const CategoryList: React.FC = () => {
  return (
    <Container>
      <CategoryName>CURSOS ONLINE</CategoryName>
      <ButtonViewMore>
        <TextButtonViewMore>VER MAIS ►</TextButtonViewMore>
      </ButtonViewMore>
    </Container>
  );
};

export default CategoryList;
