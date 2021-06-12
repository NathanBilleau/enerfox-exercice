import { FunctionComponent } from "react"
import solarPanelImage from '../assets/images/solarPanel.png'


type PProps = {
    angle: number
    arrowColor: String
    angleMode: 'Sud_0' | 'Sud_180'
}
const Panel: FunctionComponent<PProps> = ({ angle, angleMode, arrowColor }) => {

    return (
        <div className="panel" style={{ transform: `rotate(${angle - (angleMode === 'Sud_0' ? 180 : 0)}deg)` }}>
            <img src={solarPanelImage} alt="Panneau solaire" />
            <svg className="arrow" viewBox="0 50 100 50" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50 50, 100 100, 0 100" fill={arrowColor.toString()} />
            </svg>
        </div>
    )
}

export default Panel