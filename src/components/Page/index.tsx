import React from 'react';

import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection 
            key={modelName} // Todo elemento usando map precisa de key
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label="Model One"
                  description="Order Online for Delivery"
                />
              }
            />
          ))}

        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;