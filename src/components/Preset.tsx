import { FunctionComponent, MouseEventHandler } from "react"

type PProps = {
    angle: number
    color: string
    angleMode: 'Sud_0' | 'Sud_180'
    tilt: number
    enablePreset: Function
    orientationEnabled: boolean
}

const Preset: FunctionComponent<PProps> = ({ enablePreset, angle, tilt, color, angleMode, orientationEnabled }) => {
    return (
        <button className="preset" onClick={() => enablePreset(color, angle, tilt, angleMode, orientationEnabled)} style={{ backgroundColor: color }}>
            <span>{angle}deg</span>
            <span>{tilt}deg</span>
            <span>{angleMode}</span>
        </button>
    )
}

export default Preset