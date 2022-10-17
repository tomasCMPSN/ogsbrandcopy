import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledLinkNavbar = styled(NavLink)`
color: black;
text-decoration: none;

&:hover{
    color: black;
}

@media only screen and (max-width: 1200px){
    display: none;
}
`