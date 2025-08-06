import React from 'react';
import { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import Pagination from '../components/Pagination';
import { searchNews } from '../utils/api';

const NewsPage = () => {

  const findText = new URLSearchParams(useLocation().search).get('text');
  const [newsList, setNewsList] = useState([])
  const [searchKey, setSearchKey] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage , setCurrentPage] = useState(1);

  useEffect(() => {
    setSearchKey(prev => prev + 1);
    setCurrentPage(1);
  }, [findText]);

  useEffect(() => {

      const getLatestNews = async () => {
        try {
          const response = await searchNews(findText,currentPage,8);
          const data = await response.json();
          setNewsList(data['newsList'])
          setTotalCount(data['totalCount'])

        } catch (error) {
          console.error('최신 뉴스 검색 중 오류:', error);
        }
      };

      getLatestNews();

  }, [searchKey,currentPage]);



  return (
    <div className="w-100 mx-auto d-flex flex-column w-50">
        <div className="w-100">
            <section className="mb-12 text-center w-75 mx-auto bg-primary p-5 mb-2 rounded">
                  <div className="mb-2 text-center ">
                    <h1 className="h3 fw-bold mb-1 text-light">
                      {findText
                        ? `‘${findText}’ 검색 결과`
                        : '최신 커리어 뉴스'}
                    </h1>

                  </div>
                <div className="d-flex flex-column mb-4">
                     <span className="fw-semibold mb-1" style={{ color: '#EAEAEA', fontSize: '0.9rem'  }}>
                       총 <span className="fw-bold" style={{ color: '#ffffff', fontSize: '1.0rem' }}>{totalCount}</span> 건의 뉴스가 있습니다.
                     </span>

                     <span className="text-lg fw-semibold" style={{ color: '#EAEAEA', fontSize: '0.9rem' }}>
                       성장하는 당신을 위한 모든 소식
                     </span>
                </div>

                <SearchBar
                     isJobSearch={false}
                 />

            </section>

        </div>

       <section>
         <div className="row g-4 w-75 mx-auto">
              {newsList.map((news, index) => (
                 <div className="col-md-6 col-lg-3" key={index}>
                   <a
                     href={news.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-decoration-none text-dark"
                   >
                     <div className="card shadow-sm border-0">
                       <img
                         src={news.urlToImage}
                         className="card-img-top"
                         alt="People collaborating in a modern office."
                         style={{ height: '180px', objectFit: 'cover' }}
                       />
                       <div className="card-body d-flex flex-column justify-content-start align-items-start">
                         <small className="text-muted">{news.author}</small>
                         <span
                           className="card-title mt-2 text-start mb-2 fw-bold"
                           style={{ fontSize: '1.05rem' }}
                         >
                           {news.title}
                         </span>
                         <p className="card-text text-start text-secondary">
                           {news.description.length > 60
                             ? news.description.slice(0, 60) + '...'
                             : news.description}
                         </p>
                       </div>
                     </div>
                   </a>
                 </div>
               ))}
         </div>
       </section>

      <div className="d-flex justify-content-center mt-4">
            {totalCount !== 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalCount / 8)}
                onPageChange={(page) => {
                    setCurrentPage(page)
                }}
              />
             )}
      </div>


    </div>
  );
};

export default NewsPage;