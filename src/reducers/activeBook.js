// state is the state of the reducer
const activeBook = (state = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.book;
    default:
      return state;
  }
};

export default activeBook;
