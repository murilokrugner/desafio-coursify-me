import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';

export const ContainerMenuButton = styled.TouchableOpacity`
  background-color: ${colors.second};
  border-radius: 70px;
  opacity: 1;

  width: 37px;
  height: 37px;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerUnion = styled.View`
  width: 16px;
  height: 21px;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const UnionMenuButton = styled.View`
  width: 21px;
  height: 4px;

  background-color: ${colors.primary};
  opacity: 1;

  border-radius: 20px;
`;
