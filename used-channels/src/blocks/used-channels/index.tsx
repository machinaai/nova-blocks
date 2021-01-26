import React from 'react'
import { dataFixture } from './fixtures/request.fixture';
import styles from './index.less';
import { Props } from './interfaces/dataInterface.interface';
export const UsedChannels: React.FC<Props> = ({ dataDevices = dataFixture, fontTitle = 'Signika-Regular_Regular', valOp }) => {
    let nameOp1;
    let nameOp2;
    let nameOp3;
    let valStyleOp1 = styles.optionContainer;
    let valStyleOp2 = styles.optionContainer;
    let valStyleOp3 = styles.optionContainer;

    if (valOp === 0) {
        nameOp1 = dataDevices[0].name;
        valStyleOp1 = styles.optionContainer1;
    } else if (valOp === 1) {
        nameOp2 = dataDevices[1].name
        valStyleOp2 = styles.optionContainer1;
    } else {
        nameOp3 = dataDevices[2].name
        valStyleOp3 = styles.optionContainer1;
    }
    return (
        <>
            <div className={styles.containerLegend}>
                <div className={valStyleOp1} onClick={dataDevices[0].action} style={{ backgroundColor: dataDevices[0].backgroungCol }}>
                    <div className={styles.box}>
                        <p className={styles.titleDev} style={{ fontFamily: `${fontTitle}` }}>{nameOp1}</p>
                        <img src={dataDevices[0].icon} alt={dataDevices[0].name}></img>
                    </div>
                </div>
                <div className={valStyleOp2} onClick={dataDevices[1].action} style={{ backgroundColor: dataDevices[1].backgroungCol }}>
                    <div className={styles.box}>
                        <p className={styles.titleDev} style={{ fontFamily: `${fontTitle}` }}>{nameOp2}</p>
                        <img src={dataDevices[1].icon} alt={dataDevices[1].name}></img>
                    </div>
                </div>
                <div className={valStyleOp3} onClick={dataDevices[2].action} style={{ backgroundColor: dataDevices[2].backgroungCol }}>
                    <div className={styles.box}>
                        <p className={styles.titleDev} style={{ fontFamily: `${fontTitle}` }}>{nameOp3}</p>
                        <img src={dataDevices[2].icon} alt={dataDevices[2].name}></img>
                    </div>
                </div>
            </div>

        </>
    )
}