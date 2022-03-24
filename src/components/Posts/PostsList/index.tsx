import React from 'react';
import {FlatList} from 'react-native';
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

interface Props {
  data: object;
  loading: boolean;
}

const PostsList: React.FC<Props> = ({data, loading}: Props) => {
  const navigation = useNavigation();

  function handleNavigation(post: object, image: object) {
    navigation.navigate('ViewPost', {post, image});
  }

  return (
     <Container>
      {!loading ? (      
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={data}
        keyExtractor={item => item.postData.id + Math.random()}
        renderItem={({item, index}) => (          
          <ContainerPost onPress={() => {
            handleNavigation(item.postData, item.image);
          }}>    
              {item.image ? (
                <ImagePost source={{uri: item.image.guid.rendered}} />      
                ) : (
                <ImagePost source={ImageLogo} />      
              )}
              <ContainerTitlePost>
                <TitlePost>{item.postData.title.rendered}</TitlePost>
              </ContainerTitlePost>

              <ContainerDescriptionPost>
                <DescriptionPost>
                  {item.postData.excerpt.rendered.substring(3, 100)}...
                </DescriptionPost>
              </ContainerDescriptionPost>

              <ContainerReadMore
                onPress={() => {
                  handleNavigation(item.postData, item.image);
                }}>
                <ReadMore>Ler mais</ReadMore>
              </ContainerReadMore>
            </ContainerPost>
            
        )}
      />  
      ): (<></>)}
    </Container> 
    
  );
};

export default PostsList;