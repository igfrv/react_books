import * as React from 'react'
import { useSelector } from 'react-redux'

import style from './Filter.module.css'
import { Button } from 'components'

import { useAppDispatch } from 'redux/redux-hook'
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} from 'redux/filter/slice'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from 'redux/filter/selectors'

export default function Filter() {
  const dispatch = useAppDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.currentTarget.value))
  }

  const handleAuthorFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setAuthorFilter(e.currentTarget.value))
  }

  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type='text'
        placeholder='search by title...'
        value={titleFilter}
        onChange={handleTitleFilterChange}
      />
      <input
        className={style.input}
        type='text'
        placeholder='search by author...'
        value={authorFilter}
        onChange={handleAuthorFilterChange}
      />

      <label className={style.label}>
        <input
          type='checkbox'
          checked={onlyFavoriteFilter}
          onChange={handleOnlyFavoriteChange}
        />{' '}
        Favorite
      </label>

      <Button
        className={style.button}
        type='button'
        onClick={handleResetFilters}
      >
        Reset filters
      </Button>
    </div>
  )
}
