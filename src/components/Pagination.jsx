

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    window.scrollTo(0, 0);
  };

  const getPageNumbers = () => {
    const delta = 5;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link bg-light border-light text-dark"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>

        {getPageNumbers().map((page, idx) =>
          page === '...' ? (
            <li key={idx} className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : (
            <li
              key={idx}
              className={`page-item ${currentPage === page ? 'active text-light' : 'text-dark'}`}
            >
              <button className="page-link border-light" onClick={() => goToPage(page)}>
                {page}
              </button>
            </li>
          )
        )}
        <li className="page-item">
          <button
            className="page-link bg-light border-light text-dark"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
