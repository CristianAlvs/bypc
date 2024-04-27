import { Modal } from './styles'
import { useParams } from 'react-router-dom';

import { MeusCards } from '../MeusCards';
import { NewCard } from '../../components/NewCard';
import { EditCard } from '../../components/EditCard';
import { DeleteCard } from '../../components/DeleteCard';

export function ModalCard() {
  const { action, id } = useParams();

  const renderModal = (modalType) => {
    switch (modalType) {
      case 'edit':
        return <EditCard id={id} />;
      case 'delete':
        return <DeleteCard id={id} />;
      case 'new':
        return <NewCard />;
      default:
        return null;
    }
  };

  return (
    <div>
      <MeusCards />
      <Modal>
        {renderModal(action)}
      </Modal>
    </div>
  )
}