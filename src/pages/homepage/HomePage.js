import { Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {BackgroundDiv} from '../../temas/homepage_thema/Hp_thema'


function HomePage(props) {
const history = useHistory()

const goAll_person = () => {
history.push('/person')
}

    return(
       
        <BackgroundDiv>
            <Box display = 'flex' width = '150px' height = '100vh' margin= 'auto' alignItems = 'center'>
                <Button onClick = {goAll_person} variant="contained" color="primary">
                    Viajar nessa loucura!!
                </Button>
            </Box>
          
      </BackgroundDiv>  
   
     

 
    )
}

export default HomePage