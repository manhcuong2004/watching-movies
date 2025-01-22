import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Pagination(data) {
  const [curPage, setCurPage] = useState(
    data.currentPage.split("_")[data.currentPage.split("_").length - 1]
  );
  useEffect(() => {
    if (data.totalPage < 2) return;
    const pageNav = document.querySelector(`.${styles.pageNav}`);
    const arrow_left =
      pageNav.querySelector(".zmdi-chevron-left").parentElement;
    const arrow_right = pageNav.querySelector(
      ".zmdi-chevron-right"
    ).parentElement;
    const pageNumberList = pageNav.querySelectorAll("[data-value]");
    pageNumberList.forEach((page) => {
      if (page.getAttribute("data-value") === curPage) {
        page.classList.add(styles.active);
      } else {
        page.classList.remove(styles.active);
      }
    });
    if (curPage === "1") {
      arrow_left.classList.add(styles.hidden);
    } else {
      arrow_left.classList.remove(styles.hidden);
    }
    if (
      pageNumberList[pageNumberList.length - 1].getAttribute("data-value") ===
      curPage
    ) {
      arrow_right.classList.add(styles.hidden);
    } else {
      arrow_right.classList.remove(styles.hidden);
    }
  }, [curPage, data.totalPage]);
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    if (value) {
      setCurPage(value);
    }
  };
  const handelNextPage = () => {
    setCurPage((prev) => (parseInt(prev) + 1).toString());
  };
  const handelPrevPage = () => {
    setCurPage((prev) => (parseInt(prev) - 1).toString());
  };
  const pageNumbers = Array.from(
    { length: data.totalPage },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pageNav}>
      {data && data.totalPage > 1 && (
        <Link
          to={`/${data.type}/${data.category}/page_${(
            parseInt(curPage) - 1
          ).toString()}`}
          onClick={handelPrevPage}
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
          onClick={(e) => handleClick(e)}
          to={`/${data.type}/${data.category}/page_${page}`}
        >
          {page}
        </Link>
      ))}
      {data && data.totalPage > 1 && (
        <Link
          to={`/${data.type}/${data.category}/page_${(
            parseInt(curPage) + 1
          ).toString()}`}
          onClick={handelNextPage}
        >
          <i className={clsx("zmdi zmdi-chevron-right")}></i>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
