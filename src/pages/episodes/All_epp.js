import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Box, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ImgHeader from '../../components/ImgHeader';
import { Header, P_goToEpp} from '../../temas/Allthemas';
import {DivGridEpisodes, DivButtons} from '../../temas/epp_themas/EppThemas'
import Paginar from '../../components/Paginar';
import Despaginar from '../../components/Despaginar';


function All_epp() {

    const [episodes, setEpisodes] = useState([])
    const [episodes_Order, setEpisodes_Order] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [order, setOrder] = useState(1)
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        getEpps()

        getEpps()
    }, [])

 

    const getEpps = () => {
        axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then((res) => {
                setEpisodes(res.data.results)
                setEpisodes_Order(res.data.results)
            }).catch((err) => {
                alert(err.messege)
            })
    }

    const history = useHistory()

    const goToEpisodeDetail = (code) => {
     
        history.push(`/episodes/${code}`)
    }



    const mapEpps = episodes.map((episode) => {
        return (
            <Box height = '100%'onClick={() => goToEpisodeDetail(episode.id)}>
                <p >{episode.episode} a</p>
                <Box bgcolor='orange' display='flex' justifyContent='center' >
                    <p>{episode.name}</p>
                </Box>


            </Box>

        )
    })



    episodes_Order.sort((a, b) => {

        return ((a.name > b.name) ? 1 : ((b.name > a.name) ? order : 0));
    })

    const enter = (e) => {
        if (e.key === 'Enter' && filter.length != 0) {
            setSearch(true)
        } else if (filter.length === 0) {
            setSearch(false)
        }
    }

    const filter = episodes_Order.filter((e) => {
        return e.name === inputValue
    })

    const mapFilter = filter.map((episode) => {
        return (
            <Box>
                 <p onClick={() => goToEpisodeDetail(episode.id)}>{episode.episode}</p>
                <Box bgcolor='orange' display='flex' justifyContent='center' >
                    <p>{episode.name}</p>
                </Box>


            </Box>
        )
    })



    const buttonOrder = () => {
        if (order === 1) {
            setOrder(-1)
        }

    }



    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const render = () => {
        if (search === false) {
            return mapEpps
        } else {
            return mapFilter
        }
    }

    const proxPage = () => {
        if(page < 8){
            setPage(page + 1)
            getEpps()
        }
        
    }
    const backPage = () => {
        if(page >= 1){
           setPage(page - 1) 
           getEpps()
        }
        
    }

    return (
        <Box bgcolor='black' height = '100vh'>
            <Header>
                <Button variant='contained' color='primary'
                    onClick={buttonOrder}
                >ORDERNAR</Button>
                <ImgHeader />
                <Input color='secondary' type='text'
                    placeholder="pesquise seu episodio"
                    onChange={handleInput}
                    value={inputValue}
                    onKeyUp={enter}
                >

                </Input>
            </Header>
        <DivButtons>
            
                <Box onClick={proxPage} color='black' bgcolor='orange' height='150px' borderRadius='16px' width=' 150px' display='flex' 
         fontSize='20px' justifyContent='center' alignItems='center' >

                <P_goToEpp>Paginar </P_goToEpp>
            </Box>
            <Box onClick={backPage} color='black' bgcolor='orange' height='150px' borderRadius='16px' width=' 150px' display='flex' 
             fontSize='20px' justifyContent='center' alignItems='center'>
                <P_goToEpp>Despaginar</P_goToEpp>
            </Box>
        </DivButtons>
         
            <DivGridEpisodes>
                {render()}
            </DivGridEpisodes>


        </Box>


    )

}
export default All_epp