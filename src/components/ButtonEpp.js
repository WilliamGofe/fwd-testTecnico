import { Box } from "@material-ui/core"
import { P_goToEpp } from "../temas/Allthemas"

function ButtonEpp(params) {
    return(
        <Box color='black' bgcolor='orange' height='50px' marginTop='375px' marginRight='8px' borderRadius='16px' width=' 120px' display='flex' position='fixed' right='0' fontSize='20px' justifyContent='center' alignItems='center'>
        <P_goToEpp>Episodíos {'>'} </P_goToEpp>
    </Box>
    ) 
 }
 export default ButtonEpp