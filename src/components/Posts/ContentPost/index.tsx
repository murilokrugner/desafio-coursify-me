import React from 'react';

import {ScrollView} from 'react-native';

import {Container, ContainerTitlePost, TitlePost, ContainerContent, ContentText} from './styles';

import CoverImagePost from '../CoverImagePost';

const ContentPost: React.FC = () => {
  return (
    <ScrollView style={{flex: 1}}>
    <Container>
      <ContainerTitlePost>
        <TitlePost>
          como criar uma landing page de alta conversão para o seu curso online
        </TitlePost>
      </ContainerTitlePost>

      <ContainerContent>
        <ContentText>Uma landing page de alta conversão é o que todomundo que vende online precisa ter para otimizarresultados. No mercado competitivo de hoje em dia, é justodizer que quem tem a melhor página de vendasai na frente.</ContentText>
      </ContainerContent>
      <CoverImagePost />
    </Container>
    </ScrollView>
  );
};

export default ContentPost;
