import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './style';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose
}: TransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-close-modal'
      >
        <img src={closeImg} alt='Fechar' />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input type='number' placeholder='Valor' />

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
