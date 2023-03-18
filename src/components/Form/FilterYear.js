import '../../styles/layout/FilterYear.scss'

function FilterYear({ cleanYearP1, handleInputYearLift2 }) {

  const htmlSelect = cleanYearP1.map(eachYear => <option key={eachYear} id={eachYear} value={eachYear} className="form__option">{eachYear}</option>)

  const handleInputYear = (ev) => {
    handleInputYearLift2(ev.target.value)
  }

  return (
    <label htmlFor="year" className="form__label"> Selecciona un año: {' '}
      <select name="year" onChange={handleInputYear}>
        <option id='all' value='all' className="form__option">Todos</option>
        {htmlSelect}
      </select>
    </label>
  )
}
export default FilterYear;