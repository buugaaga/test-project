import React from 'react'
import { Input, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'

interface ISearchBarProps {
  search: string
  setSearch: any
}

export const SearchBar: React.FC<ISearchBarProps> = ( { search, setSearch }) => {


  return (
    <>
      <Input
        value={search}
        onChange={ (e) => setSearch(e.target.value)}
      />
      <Search />
    </>
  )
}