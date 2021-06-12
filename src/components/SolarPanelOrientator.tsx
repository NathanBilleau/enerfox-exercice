import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'

import Panel from './Panel'

type SPOProps = {
    title: String
    showOrientation: Boolean
    arrowColor: String
    angleMode: 'Sud_0' | 'Sud_180'
}

const SolarPanelOrientator: FunctionComponent<SPOProps> = ({ title, showOrientation, arrowColor, angleMode }) => {

    const [angle, setAngle] = useState(0)

    useEffect(() => {
        angleReset()
    }, [angleMode])

    const angleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setAngle(parseInt(e.target.value))
    }

    const angleReset = (): void => {
        setAngle(angleMode === 'Sud_0' ? 0 : 180)
    }

    return (
        <div className="solarPanelOrientator">
            <h2>
                {title}
            </h2>
            <div className="actionsContainer">
                <div>
                    <label htmlFor="angleInput">
                        Angle :
                    </label>
                    <input
                        id="angleInput"
                        type="number"
                        value={angle}
                        onChange={angleInputChange}
                        min={angleMode === 'Sud_0' ? -180 : 0}
                        max={angleMode === 'Sud_0' ? 180 : 360} />
                </div>
                <div>
                    <button onClick={angleReset}>Reset</button>
                </div>
            </div>
            <div className="panelContainer">
                {
                    showOrientation && (
                        <>
                            <span className="cardinal north">Nord</span>
                            <span className="cardinal south">Sud</span>
                            <span className="cardinal east">Est</span>
                            <span className="cardinal west">Ouest</span>
                        </>
                    )
                }
                <span className="angle north">{angleMode === 'Sud_0' ? '180° / -180°' : '360°/ 0°'}</span>
                <span className="angle south">{angleMode === 'Sud_0' ? '0°' : '180°'}</span>
                <span className="angle east">{angleMode === 'Sud_0' ? '-90°' : '90°'}</span>
                <span className="angle west">{angleMode === 'Sud_0' ? '90°' : '270°'}</span>
                <Panel angle={angle} angleMode={angleMode} arrowColor={arrowColor} />
            </div>
        </div>
    )
}

export default SolarPanelOrientator