import React, { useState } from 'react';
import SearchBarAccordion from './SearchBarAccordion';
import SearchBarDefault from './SearchBarDefault';
import RankList from '../../components/rank/RankList';

const SearchBar = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchBarContentCd, setSearchBarContentCd] =useState(null);

  return (
    <>
      {isSearchBarOpen ? (
// {/*             <SearchBarAccordion */}
// {/*                callBack={() => setIsSearchBarOpen(false)} */}
// {/*             /> */}
            <SearchBarDefault
                callBack={() => setIsSearchBarOpen(true)}
             />
      ) : (
            <SearchBarDefault
                callBack={() => setIsSearchBarOpen(true)}
             />
      )}
    </>
  );
};

export default SearchBar;
