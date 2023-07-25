import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/reducer';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}
