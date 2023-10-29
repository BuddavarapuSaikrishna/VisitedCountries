import styled from 'styled-components'

export const CountriesListItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-bottom: 1px solid #94a3b8;
  margin-left: 0;
  padding: 20px;
`

export const CountryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CountryName = styled.p`
  color: #ffffff;
`

export const VisitedBtn = styled.button`
  outline: none;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  background-color: ${props => (props.activeColor ? 'transparent' : '#3b82f6')};
  border-radius: 5px;
  color: #ffffff;
`
export const Text = styled.p`
  color: #ffffff;
`
