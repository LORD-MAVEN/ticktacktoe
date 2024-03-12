import {FaRegCircle, FaTimes, FaPen} from 'react-icons/fa';

function Icon({ name }) {
    if(name=="circle"){
        return <FaRegCircle style={{width: "40px", height: "40px"}}/>
    }
    else if(name=="cross"){
        return <FaTimes style={{width: "40px", height: "40px"}}/>
    }
    else{
        return <FaPen style={{width: "25px", height: "25px"}}/>
    }
}

export default Icon