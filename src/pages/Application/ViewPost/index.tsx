import React from 'react';

import {Container} from './styles';

import ContentPost from '../../../components/Posts/ContentPost';
import Footer from '../../../components/Footer';

const ViewPost: React.FC = () => {
  return (
    <Container>
      <ContentPost />
      <Footer />
    </Container>
  );
};

export default ViewPost;
