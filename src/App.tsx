import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { Dashboard } from './components/Dashboard';
import { TransactionProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root');

export function App() {
  const [newTransactionModal, setTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setTransactionModal(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />

      <Header onOpenTransactionNewModal={handleOpenNewTransactionModal} />

      <TransactionModal 
      isOpen={newTransactionModal} 
      onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </TransactionProvider>
  );
};
