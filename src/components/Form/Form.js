import FilterRating from './FilterRating';
import FilterTitle from './FilterTitle';
import FilterYear from './FilterYear';

import '../../styles/layout/Form.scss'

function Form({ handleInputTitleLift1, searchTitleP, cleanYearP, handleInputYearLift1, searchYearP }) {

  // FUNCIÓN PARA PREVENIR QUE LA PÁGINA SE REFRESQUE AL DARLE INTRO EN LOS INPUTS 
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <FilterTitle
        handleInputTitleLift2={handleInputTitleLift1}
        searchTitleP1={searchTitleP} />
      <FilterYear
        cleanYearP1={cleanYearP}
        handleInputYearLift2={handleInputYearLift1}
        searchYearP1={searchYearP} />
      <FilterRating />
    </form>
  )
}
export default Form;