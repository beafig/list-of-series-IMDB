import '../../styles/layout/FilterTitle.scss'

function FilterTitle({ handleInputTitleLift2, searchTitleP1 }) {

  // FUNCIÓN MANEJADORA DEL INPUT DE BUSCAR POR TÍTULO HACIENDO LIFTING
  const handleInputTitle = (ev) => {
    handleInputTitleLift2(ev.target.value)
  }

  return (
    <label htmlFor="title" className="form__label"> Busca un título: {' '}
      <input type="text" id='title' className="form__input" onInput={handleInputTitle} value={searchTitleP1}
        placeholder='ej: The Last of Us' />
    </label>
  )
}
export default FilterTitle;