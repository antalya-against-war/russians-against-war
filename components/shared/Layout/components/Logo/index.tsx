import logoImg from './images/logo.png';
import { Wrapper, Image } from './styled';

export default function Logo() {
  return (
    <Wrapper>
      <Image
        src={logoImg.src}
        alt="Russians Against War Antalya logo"
      />
    </Wrapper>
  )
}