import { FunctionComponent } from "react"
import solarPanelImage from '../assets/images/solarPanel.png'


type PProps = {
    angle: number
    arrowColor: String
    angleMode: 'Sud_0' | 'Sud_180'
    tilt: number
    efficiency: number
}
const Panel: FunctionComponent<PProps> = ({ angle, tilt, angleMode, arrowColor, efficiency }) => {
    return (
        <div className="panel" style={{ transform: `rotate(${angle - (angleMode === 'Sud_0' ? 180 : 0)}deg)` }}>
            <img
                src={solarPanelImage}
                style={{
                    transform: `perspective(500px) rotateX(${tilt}deg)`,
                }}
                alt="Panneau solaire" />
            <svg className="arrow" viewBox="0 50 100 50" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50 50, 100 100, 0 100" stroke="#000" strokeWidth={2} fill={arrowColor.toString()} fillOpacity={efficiency / 100} />
            </svg>
        </div>
    )
}

export default Panel