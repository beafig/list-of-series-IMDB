import '../../styles/layout/FilterRating.scss'

function FilterRating({ cleanRatingP1, handleClickRadioLift2, searchRatingP1 }) {

  const handleClickRadio = (ev) => {
    handleClickRadioLift2(ev.target.name)
  }

  const htmlRadio = cleanRatingP1.map(eachRating => {
    return <label
      htmlFor="rating" className="form__label"
      key={eachRating} >
      <input
        className='form__check'
        type="checkbox"
        name={eachRating}
        id='rating'
        onChange={handleClickRadio}
        checked={parseInt({ searchRatingP1 }) === { eachRating }}
      />{eachRating}
    </label >
  })

  return (
    <fieldset>
      <legend className="form__label">
        Selecciona una puntuación:
      </legend>
      <label htmlFor="rating" className="form__label">
        <input type="checkbox" name="all"
          className='form__check'
          id='rating'
          checked={searchRatingP1 === 'all'}
          onChange={handleClickRadio}
        />Todos
      </label >
      {htmlRadio}
    </fieldset>
  )
}
export default FilterRating;