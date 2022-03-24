import React, {useState, useEffect} from 'react';

import {ScrollView} from 'react-native';

import {Container, ContainerTitlePost, TitlePost, ContainerContent, ContentText} from './styles';

import CoverImagePost from '../CoverImagePost';
import Footer from '../../Footer';

const ContentPost: React.FC = ({post}: object) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, []);

  return (
    <ScrollView style={{flex: 1}}>
    <Container>
      <ContainerTitlePost>
        <TitlePost>
          {post.title.rendered}
        </TitlePost>
      </ContainerTitlePost>

      <ContainerContent>
        <ContentText>{post.excerpt.rendered.substring(3, 300)}</ContentText>
      </ContainerContent>
      <CoverImagePost />
      <ContainerContent>
        <ContentText>{post.excerpt.rendered.substring(300, 10000)}</ContentText>
      </ContainerContent>
    </Container>
    <Footer />
    </ScrollView>
  );
};

export default ContentPost;
