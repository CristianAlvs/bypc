import { Modal } from './styles'
import { useParams } from 'react-router-dom';

import { MeusCards } from '../MeusCards';
import { NewCard } from '../../components/NewCard';
import { EditCard } from '../../components/EditCard';

export function ModalCard() {
  const params = useParams();

  return (
    <div>
      <MeusCards />
      <Modal>
        {params.id ? <EditCard id={params.id}/> : <NewCard />}
      </Modal>
    </div>
  )
}