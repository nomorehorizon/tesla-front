import React from 'react';

import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model S',
            'Model Y',
            'Model 3',
            'Model X',
            'Lowest Cost Solar Panels in America',
            'Solar for New Roofs',
            'Acessories',
          ].map(modelName => (
            <ModelSection 
            key={modelName} // Todo elemento usando map precisa de key
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}

        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}

export default Page;