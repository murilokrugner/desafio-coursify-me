import React from 'react';

import {useNavigation} from '@react-navigation/native';
import ImageLogo from '../../../assets/logo.png';

import {
  Container,
  ContainerPost,
  ImagePost,
  ContainerTitlePost,
  TitlePost,
  ContainerDescriptionPost,
  DescriptionPost,
  ContainerReadMore,
  ReadMore,
} from './styles';

const PostsList: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigation(id: number) {
    navigation.navigate('ViewPost', id);
  }

  return (
    <Container>
      <ContainerPost>
        <ImagePost source={ImageLogo} />

        <ContainerTitlePost>
          <TitlePost>Como criar uma landing page de alta...</TitlePost>
        </ContainerTitlePost>

        <ContainerDescriptionPost>
          <DescriptionPost>
            Uma landing page de alta conversão é o que todo mundo que vende
            online precisa ter para otimizar...
          </DescriptionPost>
        </ContainerDescriptionPost>

        <ContainerReadMore
          onPress={() => {
            handleNavigation(1);
          }}>
          <ReadMore>Ler mais</ReadMore>
        </ContainerReadMore>
      </ContainerPost>
    </Container>
  );
};

export default PostsList;
