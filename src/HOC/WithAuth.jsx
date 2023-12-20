import { useSelector} from "react-redux"; 
import {Navigate} from 'react-router-dom'
const WithAuth = ({childern}) => {
    const {token,} = useSelector((state) => state.loginReducer) 
    if(token !== null){ 
        return childern
    } 
    return <Navigate to={'/login'}/>
}

export default WithAuth