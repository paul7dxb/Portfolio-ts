import './TravelPopUp.scss'

interface TravelPopUpProps {
    country: string;
}

const TravelPopUp = ({country} : TravelPopUpProps) => {
    return ( <div className="TravelPopUp">
        <p className="TravelPopUp__Country">{country}</p>
    </div> )
}

export default TravelPopUp