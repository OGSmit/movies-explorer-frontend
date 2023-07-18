import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, query, setInfoTool, onCheckBoxClick, CheckBoxState }) {
  const [searchQuery, setSearchQuery] = useState(query);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery < 1) {
      setInfoTool({ text: '«Нужно ввести ключевое слово».', statusOk: false, opened: true })
    } else {
      onSearch(searchQuery);
    }
  };

  return (
    <section className='search-form'>
      <form className='search-form__container' noValidate onSubmit={handleSubmit}>
        <div className='search-form__input-container'>
          <input
            maxLength={24}
            required
            placeholder='Фильм'
            className='search-form__input'
            value={searchQuery}
            onChange={handleInputChange}
          ></input>
          <button type='submit' className='search-form__button'>
            Найти
          </button>
        </div>
        <div className='search-form__checkbox-container'>
          <input
            type='checkbox'
            id='search-form__checkbox'
            className='search-form__checkbox'
            checked={CheckBoxState}
            onChange={onCheckBoxClick}
          ></input>
          <label htmlFor='search-form__checkbox'></label>
          <p className='search-form__checkbox-description'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;



