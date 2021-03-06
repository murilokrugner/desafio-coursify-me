import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  margin-top: 28px;

  margin-left: 17px;
`;

export const ContainerPost = styled.TouchableOpacity`
  flex-direction: column;

  justify-content: space-around;

  align-items: flex-start;

  width: 235px;

  height: 325px;

  margin-right: 38px;
`;

export const ImagePost = styled.Image`
  width: 235px;

  height: 103px;

  box-shadow: 0px 1px 2px #0000000f;

  border-radius: 12px;

  opacity: 1;
`;

export const ContainerTitlePost = styled.View`
  width: 187px;

  height: 44px;

  margin-left: 9px;
`;

export const TitlePost = styled.Text`
  color: ${colors.text};

  opacity: 1;

  font-family: ${fonts.primary};

  font-weight: bold;

  font-size: 17px;
`;

export const ContainerDescriptionPost = styled.View`
  width: 223px;

  height: auto;

  margin-left: 9px;
`;

export const DescriptionPost = styled.Text`
  color: ${colors.description};

  opacity: 1;

  font-family: ${fonts.primary};

  font-size: 17px;

  text-align: left;
`;

export const ContainerReadMore = styled.TouchableOpacity`
  width: 223px;

  height: auto;

  margin-left: 9px;
`;

export const ReadMore = styled.Text`
  color: ${colors.linkYellow};

  opacity: 1;

  font-family: ${fonts.primary};

  font-size: 17px;

  font-weight: bold;

  text-align: justify;
`;
