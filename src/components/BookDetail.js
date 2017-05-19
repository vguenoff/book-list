import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
  if (!book) {
    return <p>Select a book to get started.</p>;
  }
  return (
    <div>
      <h4>Details for:</h4>
      <h3>
        {book.title}
      </h3>
      Pages: {book.pages}
    </div>
  );
};

BookDetail.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string
  })
};

// the glue between react and redux; generating the props
const mapStateToProps = state => ({ book: state.activeBook });
export default connect(mapStateToProps)(BookDetail);
