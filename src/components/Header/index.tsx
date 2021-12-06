import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps{
  onOpenTransactionNewModal: () => void
}

export function Header({ onOpenTransactionNewModal }: HeaderProps) {
    return (
      <Container>
        <Content>
          <img src={logo} alt='dt money' />
          <button type='button' onClick={onOpenTransactionNewModal}>
            Nova transação
          </button>
        </Content>
      </Container>
    );
}
