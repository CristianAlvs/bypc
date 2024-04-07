import { Modal } from './styles'

import { MeusCards } from '../MeusCards';
import { ModalCard } from '../../components/ModalCard';

export function NewCard() {
  return (
    <div>
      <MeusCards />
      <Modal>
        <ModalCard />
      </Modal>
    </div>
  )
}