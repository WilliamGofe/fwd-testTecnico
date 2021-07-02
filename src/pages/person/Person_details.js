import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Header } from '../../temas/Allthemas';
import ImgHeader
    from '../../components/ImgHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Person_details(props) {
    const [personDetail, setPersonDetail] = useState({})
    const [ep1, setEp1] = useState({})
    const [ep2, setEp2] = useState({})

    useEffect(() => {
        getDetailPerson()

    }, [])

    const id = useParams().id

    const getDetailPerson = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => {
                setPersonDetail(res.data)
                getEp1()
                getEp2()
            }).catch((err) => {
                
            })
    }



    const getEp1 = () => {

        axios.get(`${personDetail && personDetail.episode[0]}`)
            .then((res) => {

                setEp1(res.data)
            }).catch((err) => {
                alert(err.messege)
            })
    }
    const getEp2 = () => {

        axios.get(`${personDetail && personDetail.episode[1]}`)
            .then((res) => {

                setEp2(res.data)
            }).catch((err) => {
                alert(err.messege)
            })
    }



    return (
        <Box bgcolor='black' height='100vh'>
            <Header>
                <ImgHeader />
            </Header>
            <Box display='flex' flexDirection='column' alignItems='center' paddingTop='8%'>
                <Box>
                    <img src={personDetail && personDetail.image}></img>
                </Box>
                <Box color='white'>
                    <p>Name:{personDetail.name && personDetail.name}</p>
                    <p>Origin: {personDetail.origin && personDetail.origin.name}</p>
                    <h3>Episodes</h3>
                    {ep1.name ? ep1.name : <p>loading...</p>}
                    <br />
                    <br />
                    {ep2.name ? ep2.name : <p>loading...</p>}
                </Box>
            </Box>

        </Box>


    )
}

export default Person_details