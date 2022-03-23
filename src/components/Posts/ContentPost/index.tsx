import React from 'react';

import {View} from 'react-native';

import {Container, ContainerTitlePost, TitlePost} from './styles';

import CoverImagePost from '../CoverImagePost';

const ContentPost: React.FC = () => {
  return (
    <Container>
      <ContainerTitlePost>
        <TitlePost>
          como criar uma landing page de alta conversão para o seu curso online
        </TitlePost>
      </ContainerTitlePost>
      <CoverImagePost />
    </Container>
  );
};

export default ContentPost;
