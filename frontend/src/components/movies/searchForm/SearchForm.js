import './SearchForm.css'

function SearchForm() {

  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <input placeholder='Фильм' className='search-form__input'></input>
        <button className='search-form__button'>Найти</button>
        <div className='search-form__checkbox-container'>
          <input type="checkbox" id="search-form__checkbox" className='search-form__checkbox'></input>
          <label htmlFor="search-form__checkbox"></label>
          <p className='search-form__checkbox-description'>Короткометражки</p>
        </div>
      </form>
    </section>
  )
}

// BEM validation done!
export default SearchForm;