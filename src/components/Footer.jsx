import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="logo_white" />
                
                <Flex>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit, aliquid maxime atque ea pariatur.</li>
                        <li>+48 123 123 123</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2023 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}