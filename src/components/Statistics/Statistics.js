import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { setBg } from './color';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: setBg() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
