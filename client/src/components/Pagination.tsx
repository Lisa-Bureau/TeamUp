import { Link } from "react-router";
import "../styles/Pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <Link
        className="button-nav-pagination"
        to={`/activities/page/${currentPage > 1 ? currentPage - 1 : currentPage}`}
      >
        &lt; Précédent
      </Link>
      {pages.map((page) => (
        <Link
          className={`button-nb-page ${page === currentPage ? "active" : ""}`}
          key={page}
          to={`/activities/page/${page}`}
        >
          {page}
        </Link>
      ))}
      <Link
        className="button-nav-pagination"
        to={`/activities/page/${currentPage < totalPages ? currentPage + 1 : currentPage}`}
      >
        Suivant &gt;
      </Link>
    </div>
  );
}

export default Pagination;
