import styled from "styled-components";

import Adornment from "ui/Adornment";
import Button from "ui/Button";
import Container from "ui/Container";
import Icon from "ui/Icon";
import Logos from "app/Logos";

const HeaderRoot = styled(Container)`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizing.x6l};
`;
const HeaderButtonTheme = styled(Button)`
  margin-left: auto;
`;
const HeaderButtonNews = styled(Button)`
  margin-left: ${({ theme }) => theme.sizing.sm};
`;

export default function Header() {
  return (
    <HeaderRoot as="header">
      <Logos />
      <HeaderButtonTheme>
        <Adornment>
          <Icon>Sun</Icon>
        </Adornment>
      </HeaderButtonTheme>
      <HeaderButtonNews
        href="https://ufal.br/noticias?tag=Ufal60anos"
        rel="noreferrer"
        target="_blank"
      >
        Notícias
        <Adornment $edge="end">
          <Icon>Exit</Icon>
        </Adornment>
      </HeaderButtonNews>
    </HeaderRoot>
  );
}
