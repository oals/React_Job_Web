import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBarDefault = ({callBack}) => {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

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
//                   readOnly
//                   onClick={() => callBack()}
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (keyword.trim()) {
                        navigate(`/search?text=${encodeURIComponent(keyword)}`);
                      }
                    }
                  }}
                />
              </div>
         </>
    )
}

export default SearchBarDefault