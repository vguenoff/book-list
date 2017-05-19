import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

const BookList = ({ books, selectBook }) => (
  <ul className="list-group col-sm-4">
    {books.map(book => (
      <li
        className="list-group-item"
        key={book.title}
        onClick={() => selectBook(book)}
      >{book.title}</li>
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }
  ).isRequired).isRequired,
  selectBook: PropTypes.func.isRequired
};

// the glue between react and redux; generating the props
const mapStateToProps = state => ({ books: state.books });
// on SelectBook call the result goes to the reducers
const mapDispatchToProps = dispatch => bindActionCreators({ selectBook }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
