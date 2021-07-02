import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Header } from '../../temas/Allthemas';
import ImgHeader
 from '../../components/ImgHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Epp_details(props) {
  const [episodeDetail, setEpisodeDetail] = useState({})
  const [person1, setPerson1] = useState({})
  const [person2, setPerson2] = useState({})

  useEffect(()=>{
    getDetailPerson()
  
  },[])

const id = useParams().code

    const getDetailPerson = () => {
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((res)=>{
            setEpisodeDetail(res.data)
            getEp1()
            getEp2()
        }).catch((err)=>{   
 
        })
    }


    const getEp1 = (link) => {
     
        axios.get(`${episodeDetail&&episodeDetail.characters[0]}`)
        .then((res)=>{
         
            setPerson1(res.data)
        }).catch((err)=>{
            alert(err.messege)
           
        })
    }
    const getEp2 = (link) => {
     
          axios.get(`${episodeDetail&&episodeDetail.characters[1]}`)
          .then((res)=>{
      
              setPerson2(res.data)
          }).catch((err)=>{
              alert(err.messege)
          })
      }



    return(
        <Box bgcolor = 'black' height = '100vh'>
            <Header>
            <ImgHeader/>
            </Header>
            <Box display = 'flex' flexDirection = 'column' alignItems = 'center' paddingTop = '8%'>
               
               <Box color = 'white'>
                   <p>Name:{episodeDetail.name&&episodeDetail.name}</p>
                  <p>Air date: {episodeDetail.air_date&&episodeDetail.air_date}</p>
                  {person1.characters? person1.characters: <p>loading...</p>}
                   <br/>
                   <br/>
                   {person2.characters? person2.characters: <p>loading...</p>}
               </Box>
            </Box>

        </Box>

 
    )
}

export default Epp_details