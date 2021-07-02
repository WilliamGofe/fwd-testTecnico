import styled from 'styled-components'

export const Card = styled.div`
height: 350px;
background-color:white;
border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 18px;
cursor: pointer;
:hover {
    -webkit-transform:scale(1.10);
}
`
export const DivGridPersons = styled.div`
margin-top: 16px;
padding-left: 125px;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
  gap:10px; 

`