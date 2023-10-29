import './index.css'

const VisitedCountries = props => {
  const {VisitedDetails, RemoveBtn} = props
  const {name, imageUrl, id} = VisitedDetails

  const OnClickRemove = () => {
    RemoveBtn(id)
  }

  return (
    <div className="Visited-container">
      <img className="country-img" src={imageUrl} alt="thumbnail" />
      <div className="RemoveBtn-container">
        <p>{name}</p>
        <button className="remove-btn" type="button" onClick={OnClickRemove}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default VisitedCountries
