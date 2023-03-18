import '../../styles/layout/FilterTitle.scss'

function FilterRating({ cleanRatingP1, handleClickRadioLift2, searchRatingP1 }) {

  const handleClickRadio = (ev) => {
    handleClickRadioLift2(ev.target.name)
  }

  const htmlRadio = cleanRatingP1.map(eachRating => {
    return <label
      htmlFor="rating" className="form__label"
      key={eachRating} >
      <input
        type="radio"
        name={eachRating}
        id='rating'
        onChange={handleClickRadio}
        checked={parseInt({ searchRatingP1 }) === { eachRating }}
      />{eachRating}
    </label >
  })
  // const type = typeof (parseInt({ searchRatingP1 }))
  // console.log(type);

  return (
    <fieldset>
      <legend className="form__label">
        Selecciona una puntuación:
      </legend>
      <label htmlFor="rating" className="form__label">
        <input type="radio" name="all"
          id='rating'
          checked={searchRatingP1 === 'all'}
          onChange={handleClickRadio}
        /> Todos
      </label >
      {htmlRadio}
    </fieldset>
  )
}
export default FilterRating;