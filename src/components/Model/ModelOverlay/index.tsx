import React from 'react';

import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  model: CarModel
}

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  return (
    <Container>{children}</Container>
  );
}

export default ModelOverlay;