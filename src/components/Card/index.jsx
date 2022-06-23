import { StyledCard } from "./style"
import { MdDeleteOutline } from "react-icons/md"

const Card = ({title, status, handleRemove, id, handleEdition } ) => {


    return(
            <StyledCard>
                <div className="divCard" onClick={handleEdition}>
                    <h3>{title}</h3>
                    <p>{status}</p>
                </div>
                <button onClick={() => handleRemove(id)}><MdDeleteOutline size={13}/></button>
            </StyledCard>
    )
}

export default Card;