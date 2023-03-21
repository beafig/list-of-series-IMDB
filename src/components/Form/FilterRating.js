import '../../styles/layout/FilterRating.scss'

function FilterRating({ cleanRatingP1, handleClickRadioLift2, searchRatingP1 }) {

  const handleClickRadio = (ev) => {
    handleClickRadioLift2(ev.target.id)
  }

  const htmlRadio = cleanRatingP1.map(eachRating => {
    console.log(eachRating);
    console.log(searchRatingP1);
    return <label
      htmlFor="rating" className="form__label"
      key={eachRating} >
      <input
        className='form__check'
        type="radio"
        name='rating'
        id={eachRating}
        onChange={handleClickRadio}
        checked={searchRatingP1 === eachRating.toString()}
      />{eachRating}
    </label >
  })


  return (
    <fieldset>
      <legend className="form__label">
        Selecciona una puntuación:
      </legend>
      <label htmlFor="rating" className="form__label">
        <input type="radio"
          className='form__check'
          id='all'
          name='rating'
          checked={searchRatingP1 === 'all'}
          onChange={handleClickRadio}
        />Todos
      </label >
      {htmlRadio}
    </fieldset>
  )
}
export default FilterRating;