import React from "react";
import { motion } from "framer-motion";
import './Pagination.css'

const Pagination = ({
  totalPosts,
  pagePerShow,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  const int = Math.ceil(totalPosts / pagePerShow);
  if (int === 1) return null;
  for (let i = 1; i <= int; i++) {
    pages.push(i);
  }

  const nextPage = (e) => {
    e.preventDefault();
    console.log(totalPosts);

    if (currentPage === 2) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      setCurrentPage(2);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="pages__btns"
        onClick={prevPage}
      >
        Prev
      </motion.button>

      {pages.map((page, index) => {
        return (
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={page === currentPage ? "active__page" : "pages__btns"}
            key={index}
            onClick={() => setCurrentPage(page)}
            // disabled={page === 1}
          >
            {page}
          </motion.button>
        );
      })}

      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="pages__btns"
        onClick={nextPage}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
