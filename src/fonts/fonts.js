import { createGlobalStyle } from 'styled-components'

import RalewayWoff from './Raleway.woff'
import RalewayWoff2 from './Raleway.woff2'
import RalewayBlackWoff from './Raleway-Black.woff'
import RalewayBlackWoff2 from './Raleway-Black.woff2'

export default createGlobalStyle`
 @font-face {
     font-family: 'Raleway';
     src: local('Raleway'), local('Raleway'),
     url(${RalewayWoff2}) format('woff2'),
     url(${RalewayWoff}) format('woff');
     font-weight: 400;
    font-style: normal;
 }

 @font-face {
     font-family: 'Raleway';
     src: local('Raleway'), local('Raleway'),
     url(${RalewayBlackWoff2}) format('woff2'),
     url(${RalewayBlackWoff}) format('woff');
     font-weight: 900;
     font-style: bold;
 }

 *{
    font-family: 'Raleway';
 }
`