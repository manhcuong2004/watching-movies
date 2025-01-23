import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
function Pagination(data) {
  const curPage =
    data.currentPage.split("_")[data.currentPage.split("_").length - 1];

  const pageNumbers = Array.from(
    { length: data.totalPage },
    (_, index) => index + 1
  );
  return (
    <div className={styles.pageNav}>
      {data && data.totalPage > 1 && curPage !== "1" && (
        <Link
          to={`/${data.type}/${data.category}/page_${(
            parseInt(curPage) - 1
          ).toString()}`}
        >
          <i className={clsx("zmdi zmdi-chevron-left")}></i>
        </Link>
      )}
      {pageNumbers.map((page) => (
        <Link
          className={clsx(
            styles.pageNumber,
            page.toString() === curPage ? styles.active : ""
          )}
          data-value={page}
          to={`/${data.type}/${data.category}/page_${page}`}
        >
          {page}
        </Link>
      ))}
      {data && data.totalPage > 1 && curPage !== data.totalPage.toString() && (
        <Link
          to={`/${data.type}/${data.category}/page_${(
            parseInt(curPage) + 1
          ).toString()}`}
        >
          <i className={clsx("zmdi zmdi-chevron-right")}></i>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
