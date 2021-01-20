import { Button } from "antd";
import React from "react";
import { DataCustomerResponseFixture } from "../fixtures/respons-user-data.fixture";


type PropsType = {
    onComplete: Function;
    onSetUserData: Function;
    onTypeFlow: any;
    address: string;
};
/**
 * Function that select data mock
 *
 * @param {string} type
 * @return {*} 
 */
const setDataFixture = (type: string) => {
    switch (type) {
        case "N2Scan":
            return DataCustomerResponseFixture.informationObject;
        case "N2Upload":
            return {
                address: "test",
                brthDate: "12/02/1997",
                curp: "GGA423423HHGRRR02",
                electorID: "87429873497293847",
                fatherName: "Castillo",
                gender: "H",
                motherName: "Lopez",
                name: "Lorenzo",
            };
        case "N2Manually":
            return DataCustomerResponseFixture.informationObject;
        case "N4Video":
            return {
                address: "test",
                birth_date: "12/02/1997",
                curp: "GGA423423HHGRRR02",
                id: "87429873497293847",
                last_name: "Lopez",
                register_date: "23/09/1996",
                name: "Lorenzo Lopez Castillo",
                nationality: "Mexicana",
            };
        default:
            return;
    }
};
/**
 * Component mock
 *
 * @param {PropsType} props
 * @return {*} 
 */
const Component = (props: PropsType) => {
    const { onComplete, onSetUserData, onTypeFlow } = props;
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={{width: '50%', alignSelf: 'center'}}
                src="https://cdn.pixabay.com/photo/2019/12/27/08/36/coming-soon-hour-glass-4721933_1280.png"
                alt=""
            />
            <h1 style={{alignSelf: 'center'}}>{onTypeFlow}</h1>
            <Button
                onClick={() => {
                    onTypeFlow
                        ? onSetUserData && onSetUserData(setDataFixture(onTypeFlow))
                        : onSetUserData("Insurgentes Centro Juárez Cuauhtémoc ");
                    onComplete && onComplete(true);
                }}
            >
                Next Step
    </Button>
        </div>
    );
};

/**
 * Fixture compoent by flow
 */
export const stagesFixture = {
    N2Scan: Component,
    N2Upload: Component,
    N2Manually: Component,
    N4Video: Component,
};
