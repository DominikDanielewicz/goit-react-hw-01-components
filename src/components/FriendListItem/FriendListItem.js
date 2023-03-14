import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      {isOnline ? (
        <span className={[css.status, css.online].join(' ')}>{isOnline}</span>
      ) : (
        <span className={[css.status, css.offline].join(' ')}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
