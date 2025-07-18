import React, { useState } from 'react';

const SearchBarDefault = ({callBack}) => {

    return (
         <>
              <div
                className="input-group ms-4 w-50 border border-1 p-3 shadow-sm"
                style={{
                  borderRadius: "150px",
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