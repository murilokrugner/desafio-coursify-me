import React, {useState, useEffect} from 'react';
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
import api from '../../../services/api';

const PostsList: React.FC = ({data, loading}) => {
  const [loadingData, setLoadingData] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  function handleNavigation(id: number) {
    navigation.navigate('ViewPost', id);
  }

  async function loadImagePost() {
    setLoadingData(true);
    for (var i = 0; i < data.length; i++) {
      var response = await api.get(`media?include=${data[i].featured_media}`);

      var dataPosts = {
        post: data[i],
        image: response.data[0].guid.rendered,
      }
      
      setPosts(oldState => [...oldState, dataPosts]);
    }
    setLoadingData(false);
  }

  useEffect(() => {
    if (!loading) {
      loadImagePost();
      return () => {
        setPosts([]);
      };
    }
  }, [loading]);

  return (
     <Container>
      {!loadingData && !loading ? (      
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={posts}
        keyExtractor={item => item.post.id + Math.random()}
        renderItem={({item, index}) => (          
          <ContainerPost>    
              <ImagePost source={{uri: item.image}} />           
              <ContainerTitlePost>
                <TitlePost>{item.post.title.rendered}</TitlePost>
              </ContainerTitlePost>

              <ContainerDescriptionPost>
                <DescriptionPost>
                  {item.post.excerpt.rendered.substring(3, 100)}...
                </DescriptionPost>
              </ContainerDescriptionPost>

              <ContainerReadMore
                onPress={() => {
                  handleNavigation(1);
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
