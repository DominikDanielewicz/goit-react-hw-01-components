import css from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={css.tableRow} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
