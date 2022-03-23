import React from 'react';

import {
  Container,
  CategoryName,
  ButtonViewMore,
  TextButtonViewMore,
} from './styles';

import PostsList from '../PostsList';

const CategoryList: React.FC = () => {
  return (
    <>
      <Container>
        <CategoryName>CURSOS ONLINE</CategoryName>

        <ButtonViewMore>
          <TextButtonViewMore>VER MAIS ►</TextButtonViewMore>
        </ButtonViewMore>
      </Container>

      <PostsList />
    </>
  );
};

export default CategoryList;
