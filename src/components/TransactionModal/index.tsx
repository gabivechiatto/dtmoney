import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { api } from '../../services/api';

import { Container, TransactionContainer, RadioBox } from './style';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose
}: TransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  const data = {
    title,
    value,
    category,
    transactionType,
  };

  api.post('/transactions', data);

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionContainer>
          <RadioBox
            type='button'
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
