import './Cards.css'
import Icon from './Icon'
function Card({ box, endGame, player, onPlay, index }) {

    let icon = <Icon />
    let tempColor = "rgba(236, 102, 12, 0.966)";

        if(player=='X'){
            icon = <Icon name="cross"/>
        }
        else if(player=='O'){
            icon = <Icon name="circle"/>
        }
        if(box[0]==index||box[1]==index||box[2]==index){
            tempColor="rgb(10, 185, 10)"
        }
        else if(box[0]==-1){
            tempColor="red"
        }

        return(
            
            <>
                <div className="card" style={{backgroundColor: tempColor}} onClick={() => !endGame && player=="" && onPlay(index)}>
                    {icon}
                </div>
            </>
        )

}

export default Card
