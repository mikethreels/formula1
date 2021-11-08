/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const {
    categories,
    callback,
    value,
  } = props;
  return (
    <div>
      <label htmlFor="category">CONSTRUCTOR FILTER: </label>
      <select id="category" onChange={callback} value={value}>
        <option selected>All</option>
        {categories.map(x => <option key={x}>{x}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  callback: PropTypes.func,
  value: PropTypes.string,
};

CategoryFilter.defaultProps = {
  categories: [],
  callback: null,
  value: 'All',
};

export default CategoryFilter;
