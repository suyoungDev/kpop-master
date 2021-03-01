import React from 'react';

import { CustomButtonContainer } from './CustomButton_style';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
