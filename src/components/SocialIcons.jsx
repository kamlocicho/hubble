import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
    return(
        <StyledSocialIcons>
            <li>
                <a href="http://twitter.com"><FaTwitter/></a>
            </li>
            <li>
                <a href="http://facebook.com"><FaFacebook/></a>
            </li>
            <li>
                <a href="http://linkedin.com"><FaLinkedin/></a>
            </li>
        </StyledSocialIcons>
    )
}