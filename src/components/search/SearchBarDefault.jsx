import React, { useState } from 'react';

const SearchBarDefault = ({callBack}) => {

    return (
         <>
            <span className="fw-bold fs-1 text-success">Job-X</span>
              <div
                className="input-group ms-4 w-50"
                style={{
                  border: "2px solid #198754",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <button
                  className="btn btn-outline-none"
                  type="button"
                  id="button-addon1"
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: "0 1rem",
                  }}
                >
                  <i className="bi bi-search" style={{ color: "#198754" }}></i>
                </button>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="검색어를 입력하세요"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  readOnly
                  onClick={() => callBack()}
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
         </>
    )
}

export default SearchBarDefault