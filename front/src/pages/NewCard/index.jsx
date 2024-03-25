import { Modal } from './styles'

import { Home } from '../Home';
import { ModalNewCard } from '../../components/ModalNewCard';

export function NewCard() {
  return (
    <div>
      <Home />
      <Modal>
        <ModalNewCard />
      </Modal>
    </div>
  )
}