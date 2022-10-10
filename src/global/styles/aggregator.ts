import { createGlobalStyle } from 'styled-components';
import { resetStyles } from './resetStyles';
import { defaultStyles } from './defaultStyles';
import { animations } from './animations';

export default createGlobalStyle`
  ${resetStyles}
  ${defaultStyles}
  ${animations}
`;
