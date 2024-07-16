import React from 'react';
import PropTypes from 'prop-types';

export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100) || 0;

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
    
  return (
    <footer className='stats'>
      <em>
        {percentPacked === 100 ? "You got everything! Ready to go ✈" : `💼 You have ${numItems} items in your list, and you already packed ${numPacked} (${percentPacked}%)`}
        </em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
