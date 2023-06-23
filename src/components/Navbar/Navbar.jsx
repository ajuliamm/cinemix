import React from "react";
import { Nav, Ul, Li, StyledLink } from "./Styles";

const Navbar = () => {
    return(
        <Nav>
            <Ul>
                <Li>
                    <StyledLink to="/Filmes">Filmes</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/Series">Séries</StyledLink>
                </Li>
            </Ul>

        </Nav>

    )
}
export default Navbar;