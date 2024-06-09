import { Modal } from './styles'
import { useParams } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

import { MeusCards } from '../MeusCards';
import { NewCard } from '../../components/NewCard';
import { EditCard } from '../../components/EditCard';
import { DeleteCard } from '../../components/DeleteCard';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';

export function ModalCard({ action }) {
  const { id } = useParams();

  const { user } = useAuth();

  const renderModal = (modalType) => {
    switch (modalType) {
      case 'edit':
        return <EditCard id={id} />;
      case 'delete':
        return <DeleteCard id={id} />;
      case 'new':
        return <NewCard />;
      case 'login':
        return <SignIn />;
      case 'signup':
          return <SignUp />;
      default:
        return null;
    }
  };

  return (
    <div>
      <MeusCards state={user ? "" : "default"}/>
      <Modal>
        {renderModal(action)}
      </Modal>
    </div>
  )
}