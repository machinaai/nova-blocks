import { DatePicker, Input } from 'antd';
import React from 'react';

/**
 * Mock object with mock data from fields for the form.
 */
export const dataFieldsFixture = {
    section1: {
        titleSection: 'Datos Personales',
        fields: {
            col1: [
                {
                    inputName: 'username',
                    label: `Nombre(s):`,
                    element: <Input/>
                },
                {
                    inputName: 'lastname',
                    label: `Apellido paterno:`,
                    element: <Input/>
                },
                {
                    inputName: 'secondlastname',
                    label: `Apellido materno:`,
                    element: <Input/>
                },
                {
                    inputName: 'gender',
                    label: `Sexo:`,
                    element: <Input/>
                },
            ],
            col2: [
                {
                    inputName: 'birthday',
                    label: `Fecha de nacimiento:`,
                    element:<DatePicker/>
                },
                {
                    inputName: 'nacionality',
                    label: `Nacionalidad:`,
                    element: <Input/>
                },
                {
                    inputName: 'curp',
                    label: `CURP`,
                    element: <Input/>
                },
                {
                    inputName: 'ine',
                    label: `Número de INE/IFE:`,
                    element: <Input/>
                },
            ]
        }
    },
    section2: {
        titleSection: 'Domicilio',
        fields: {
            col1: [
                {
                    inputName: 'street',
                    label: `Calle:`,
                    element: <Input/>
                },
                {
                    inputName: 'numberstreet',
                    label: `Número:`,
                    element: <Input/>
                },
                {
                    inputName: 'suburb',
                    label: `Colonia:`,
                    element: <Input/>
                },
                {
                    inputName: 'townhall',
                    label: `Alcandía:`,
                    element: <Input/>
                },
            ],
            col2: [
                {
                    inputName: 'cp',
                    label: `Código postal:`,
                    element: <Input/>
                },
                {
                    inputName: 'city',
                    label: `Ciudad:`,
                    element: <Input/>
                },
            ]
        }
    }

}

/**
 * Mock object with data to show in the form.
 */
export const setDataFixture = {
    username: 'Eduardo',
    lastname: 'Lara',
    secondlastname: 'Cabrera',
    gender: 'H',
    nacionality: 'Mexicana',
    curp: 'CALE920422MPLNNN',
    ine: '4769847987987',
    street: 'BENITO JUAREZ',
    numberstreet: '13',
    suburb: 'SFJH',
    townhall: 'NA',
    cp: '73680',
    city: 'Puela',
    birthday:'',
}


