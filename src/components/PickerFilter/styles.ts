import styled from 'styled-components/native';
import colors from '../../global/styles/colors';
import fonts from '../../global/styles/fonts';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: auto;

  margin-top: 26px;

`;

export const TitlePicker = styled.Text`
  color: ${colors.description};
  font-size: 18px;
  font-weight: bold;
  font-family: ${fonts.primary};
`;

export const ContainerPicker = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-radius: 10px;
  border-width: 1px;
  overflow: hidden;
  border-color: #000;

`;
