import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitlePost = styled.View`
  width: 352px;
  height: auto;
`;

export const TitlePost = styled.Text`
  color: ${colors.text};

  font-family: ${fonts.primary};
  font-size: 24px;
  font-weight: bold;
  text-transform: lowercase;
  opacity: 1;
  text-align: justify;
`;

export const ContainerContent = styled.View`
  width: 352px;
  height: auto;

  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 26px;
  margin-right: 30px;
`;

export const ContentText = styled.Text`
  color: ${colors.content};

  font-family: ${fonts.primary};
  font-size: 17px;
  text-transform: lowercase;
  opacity: 1;

  text-align: justify;
`;
