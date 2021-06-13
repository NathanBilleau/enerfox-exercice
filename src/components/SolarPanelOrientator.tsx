
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'

import Panel from './Panel'

type SPOProps = {
    title: string
    showOrientation: boolean
    arrowColor: string
    angleMode: 'Sud_0' | 'Sud_180'
}

const SolarPanelOrientator: FunctionComponent<SPOProps> = ({ title, showOrientation, arrowColor, angleMode }) => {

    const [settings, setSettings] = useState({
        angle: 0,
        tilt: 0,
        orientationEnabled: showOrientation,
        angleMode,
        arrowColor,
    })

    const [efficiency, setEfficiency] = useState(0)

    const factors = {
        angle: {
            0: 1,
            1: 0.9888888889,
            2: 0.9777777778,
            3: 0.9666666667,
            4: 0.9555555556,
            5: 0.9444444444,
            6: 0.9333333333,
            7: 0.9222222222,
            8: 0.9111111111,
            9: 0.9,
            10: 0.8888888889,
            11: 0.8777777778,
            12: 0.8666666667,
            13: 0.8555555556,
            14: 0.8444444444,
            15: 0.8333333333,
            16: 0.8222222222,
            17: 0.8111111111,
            18: 0.8,
            19: 0.7888888889,
            20: 0.7777777778,
            21: 0.7666666667,
            22: 0.7555555556,
            23: 0.7444444444,
            24: 0.7333333333,
            25: 0.7222222222,
            26: 0.7111111111,
            27: 0.7,
            28: 0.6888888889,
            29: 0.6777777778,
            30: 0.6666666667,
            31: 0.6555555556,
            32: 0.6444444444,
            33: 0.6333333333,
            34: 0.6222222222,
            35: 0.6111111111,
            36: 0.6,
            37: 0.5888888889,
            38: 0.5777777778,
            39: 0.5666666667,
            40: 0.5555555556,
            41: 0.5444444444,
            42: 0.5333333333,
            43: 0.5222222222,
            44: 0.5111111111,
            45: 0.5,
            46: 0.4888888889,
            47: 0.4777777778,
            48: 0.4666666667,
            49: 0.4555555556,
            50: 0.4444444444,
            51: 0.4333333333,
            52: 0.4222222222,
            53: 0.4111111111,
            54: 0.4,
            55: 0.3888888889,
            56: 0.3777777778,
            57: 0.3666666667,
            58: 0.3555555556,
            59: 0.3444444444,
            60: 0.3333333333,
            61: 0.3222222222,
            62: 0.3111111111,
            63: 0.3,
            64: 0.2888888889,
            65: 0.2777777778,
            66: 0.2666666667,
            67: 0.2555555556,
            68: 0.2444444444,
            69: 0.2333333333,
            70: 0.2222222222,
            71: 0.2111111111,
            72: 0.2,
            73: 0.1888888889,
            74: 0.1777777778,
            75: 0.1666666667,
            76: 0.1555555556,
            77: 0.1444444444,
            78: 0.1333333333,
            79: 0.1222222222,
            80: 0.1111111111,
            81: 0.1,
            82: 0.08888888889,
            83: 0.07777777778,
            84: 0.06666666667,
            85: 0.05555555556,
            86: 0.04444444444,
            87: 0.03333333333,
            88: 0.02222222222,
            89: 0.01111111111,
            90: 0,
        },
        tilt: {
            0: 0.4,
            1: 0.42,
            2: 0.44,
            3: 0.46,
            4: 0.48,
            5: 0.5,
            6: 0.52,
            7: 0.54,
            8: 0.56,
            9: 0.58,
            10: 0.6,
            11: 0.62,
            12: 0.64,
            13: 0.66,
            14: 0.68,
            15: 0.7,
            16: 0.72,
            17: 0.74,
            18: 0.76,
            19: 0.78,
            20: 0.8,
            21: 0.82,
            22: 0.84,
            23: 0.86,
            24: 0.88,
            25: 0.9,
            26: 0.92,
            27: 0.94,
            28: 0.96,
            29: 0.98,
            30: 1,
            31: 0.9833333333,
            32: 0.9666666667,
            33: 0.95,
            34: 0.9333333333,
            35: 0.9166666667,
            36: 0.9,
            37: 0.8833333333,
            38: 0.8666666667,
            39: 0.85,
            40: 0.8333333333,
            41: 0.8166666667,
            42: 0.8,
            43: 0.7833333333,
            44: 0.7666666667,
            45: 0.75,
            46: 0.7333333333,
            47: 0.7166666667,
            48: 0.7,
            49: 0.6833333333,
            50: 0.6666666667,
            51: 0.65,
            52: 0.6333333333,
            53: 0.6166666667,
            54: 0.6,
            55: 0.5833333333,
            56: 0.5666666667,
            57: 0.55,
            58: 0.5333333333,
            59: 0.5166666667,
            60: 0.5,
            61: 0.4833333333,
            62: 0.4666666667,
            63: 0.45,
            64: 0.4333333333,
            65: 0.4166666667,
            66: 0.4,
            67: 0.3833333333,
            68: 0.3666666667,
            69: 0.35,
            70: 0.3333333333,
            71: 0.3166666667,
            72: 0.3,
            73: 0.2833333333,
            74: 0.2666666667,
            75: 0.25,
            76: 0.2333333333,
            77: 0.2166666667,
            78: 0.2,
            79: 0.1833333333,
            80: 0.1666666667,
            81: 0.15,
            82: 0.1333333333,
            83: 0.1166666667,
            84: 0.1,
            85: 0.08333333333,
            86: 0.06666666667,
            87: 0.05,
            88: 0.03333333333,
            89: 0.01666666667,
            90: 0,
        }
    }

    useEffect(() => {
        // relative angle to south depending on angleMode
        // @ts-ignore
        let absoluteAngle = Math.abs(parseInt(settings.angle))
        if (settings.angleMode === 'Sud_180') {
            absoluteAngle -= 180
            absoluteAngle = Math.abs(absoluteAngle)
        }

        // @ts-ignore
        setEfficiency((factors.angle[absoluteAngle] || 0) * factors.tilt[parseInt(settings.tilt)] * 100)

    }, [settings.angle, settings.tilt])

    useEffect(() => {
        reset()
        // eslint-disable-next-line
    }, [angleMode])

    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value, checked, type } = e.target

        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const setOrientation = (angle: number): void => {
        setSettings({
            ...settings,
            angle
        })
    }

    const reset = (): void => {
        setSettings({
            angle: 0,
            tilt: 0,
            orientationEnabled: showOrientation,
            angleMode,
            arrowColor,
        })
    }

    return (
        <div className="solarPanelOrientator">
            <h2>
                {title}
            </h2>
            <div className="container">
                <div className="actionsContainer">
                    <div>
                        <label htmlFor="angleInput">
                            Angle
                        </label>
                        <input
                            id="angleInput"
                            type="number"
                            name="angle"
                            value={settings.angle}
                            onChange={inputChange}
                            min={angleMode === 'Sud_0' ? -180 : 0}
                            max={angleMode === 'Sud_0' ? 180 : 360} />
                    </div>

                    <div>
                        <label htmlFor="tiltInput">
                            Inclinaison
                        </label>
                        <input
                            id="tiltInput"
                            type="number"
                            name="tilt"
                            value={settings.tilt}
                            onChange={inputChange}
                            min={0}
                            max={90} />
                    </div>

                    <div>
                        <label htmlFor="cardinalInput">
                            Afficher les points cardinaux
                        </label>
                        {settings.orientationEnabled}
                        <input
                            id="cardinalInput"
                            type="checkbox"
                            name="orientationEnabled"
                            className="toggle"
                            value={settings.orientationEnabled ? 'on' : 'off'}
                            onChange={inputChange} />

                    </div>

                    <div>
                        <label htmlFor="arrowColorInput">
                            Couleur de la flèche
                        </label>
                        <input
                            id="arrowColorInput"
                            type="color"
                            name="arrowColor"
                            value={settings.arrowColor}
                            onChange={inputChange} />
                    </div>

                    <div>
                        <label htmlFor="angleModeInput_0">
                            SUD 0
                        </label>
                        <input
                            id="angleModeInput_0"
                            type="radio"
                            name="angleMode"
                            value="Sud_0"
                            checked={settings.angleMode === 'Sud_0'}
                            onChange={inputChange} />

                        <label htmlFor="angleModeInput_180">
                            SUD 180
                        </label>
                        <input
                            id="angleModeInput_180"
                            type="radio"
                            name="angleMode"
                            value="Sud_180"
                            checked={settings.angleMode === 'Sud_180'}
                            onChange={inputChange} />

                    </div>

                    <div>
                        <button className="btn secondary" onClick={reset}>Reset</button>
                    </div>

                </div>
                <div className="panelContainer">
                    {
                        settings.orientationEnabled && (
                            <>
                                <span className="cardinal north">Nord</span>
                                <span className="cardinal south">Sud</span>
                                <span className="cardinal east">Est</span>
                                <span className="cardinal west">Ouest</span>
                            </>
                        )
                    }
                    <button
                        className="angle north"
                        onClick={() => setOrientation(settings.angleMode === 'Sud_0' ? 180 : 360)}
                    >
                        {settings.angleMode === 'Sud_0' ? '180° / -180°' : '360°/ 0°'}
                    </button>
                    <button
                        className="angle south"
                        onClick={() => setOrientation(settings.angleMode === 'Sud_0' ? 0 : 180)}
                    >
                        {settings.angleMode === 'Sud_0' ? '0°' : '180°'}
                    </button>
                    <button
                        className="angle east"
                        onClick={() => setOrientation(settings.angleMode === 'Sud_0' ? -90 : 90)}
                    >
                        {settings.angleMode === 'Sud_0' ? '-90°' : '90°'}
                    </button>
                    <button
                        className="angle west"
                        onClick={() => setOrientation(settings.angleMode === 'Sud_0' ? 90 : 270)}
                    >
                        {settings.angleMode === 'Sud_0' ? '90°' : '270°'}
                    </button>
                    <Panel angle={settings.angle} tilt={settings.tilt} angleMode={settings.angleMode} arrowColor={settings.arrowColor} efficiency={efficiency} />
                </div>
            </div>
        </div>
    )
}

export default SolarPanelOrientator