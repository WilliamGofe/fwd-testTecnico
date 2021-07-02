import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Card, DivGridPersons } from '../../temas/persons/PersonThema';
import { Box, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ImgHeader from '../../components/ImgHeader';
import { Header, P_goToEpp } from '../../temas/Allthemas';
import ButtonEpp from '../../components/ButtonEpp';
import Paginar from '../../components/Paginar';
import Despaginar from '../../components/Despaginar';


function All_person(props) {

    const [persons, setPersons] = useState([])
    const [persons_Order, setPersons_Order] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [order, setOrder] = useState(1)
    const [search, setSearch] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPersons()

    }, [])

    const getPersons = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((res) => {
                setPersons(res.data.results)
                setPersons_Order(res.data.results)
            }).catch((err) => {
                alert(err.messege)
            })
    }

    const history = useHistory()

    const goToPersonDetail = (id) => {
        history.push(`/person/${id}`)
    }


    const mapPersons = persons.map((person) => {
        return (
            <Card>
                <img src={person.image} onClick={() => goToPersonDetail(person.id)}></img>
                <Box bgcolor='orange' display='flex' justifyContent='center' >
                    <p>{person.name}</p>
                </Box>


            </Card>

        )
    })


    persons_Order.sort((a, b) => {

        return ((a.name > b.name) ? 1 : ((b.name > a.name) ? order : 0));
    })

    const enter = (e) => {
        if (e.key === 'Enter' && filter.length != 0) {
            setSearch(true)
        } else if (filter.length === 0) {
            setSearch(false)
        }
    }

    const filter = persons_Order.filter((e) => {
        return e.name === inputValue
    })

    const mapFilter = filter.map((person) => {
        return (
            <Card>
                <img src={person.image} onClick={() => goToPersonDetail(person.id)}></img>
                <Box bgcolor='orange' display='flex' justifyContent='center' >
                    <p>{person.name}</p>
                </Box>

            </Card>
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
            return mapPersons
        } else {
            return mapFilter
        }
    }

    const GoToEpp = () => {
        history.push('/episodes')
    }

    const proxPage = () => {
        if (page < 8) {
            setPage(page + 1)
            getPersons()
        }

    }
    const backPage = () => {
        if (page >= 1) {
            setPage(page - 1)
            getPersons()
        }

    }

    return (
        <Box bgcolor='black' height='100vh'>
            <Header>
                <Button variant='contained' color='primary'
                    onClick={buttonOrder}
                >ORDERNAR</Button>
                <ImgHeader />
                <Input color='secondary' type='text'
                    placeholder="pesquise seu personagem"
                    onChange={handleInput}
                    value={inputValue}
                    onKeyUp={enter}
                >

                </Input>
            </Header>
            <div onClick={GoToEpp} >
                <ButtonEpp />
            </div>
            <div onClick={proxPage}>
                <Paginar />
            </div>

            <div onClick={backPage}>
                <Despaginar />
            </div>

            <DivGridPersons>
                {render()}
            </DivGridPersons>


        </Box>


    )

}
export default All_person