import {
  CountriesListItems,
  CountryItem,
  CountryName,
  VisitedBtn,
  Text,
} from './StyledComponents'

const CountriesList = props => {
  const {CountriesDetails, ChangeHandler} = props
  const {name, id, isVisited} = CountriesDetails

  const OnClickCountry = () => {
    ChangeHandler(id)
  }

  const Active = isVisited ? 'Visited' : 'Visit'

  return (
    <CountriesListItems>
      <CountryItem>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <Text>{Active}</Text>
        ) : (
          <VisitedBtn
            activeColor={isVisited}
            type="button"
            onClick={OnClickCountry}
          >
            {Active}
          </VisitedBtn>
        )}
      </CountryItem>
    </CountriesListItems>
  )
}

export default CountriesList
