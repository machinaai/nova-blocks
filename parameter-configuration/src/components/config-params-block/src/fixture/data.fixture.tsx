import React from 'react';
export const dataFixture = {
  options: [
    {
      title: "Validación de videoentrevista",
      cont1: {
        title: "Face validation",
        content: "La cara del prospecto videoentrevistado corresponde a una persona real, no avatarizada, en ambiente real, interactuando en este momento del tiempo.",
        sliderCont:<div>slider element</div>
      },
      cont2: {

        title: "OTP",
        content: "El OTP leído por voz por el usuario es exactamente igual al enviado por el motor de identificación.",
        sliderCont: <div>slider element</div>
      }
    },
    {
      title: "Validación de documento de identidad",
      cont1: {
        title: "ID validation",
        content: 'Documento presentado cumple con los criterios de seguridad publicados con el INE/IFE, y no es una copia de la misma.',
        sliderCont: <div>slider element</div>
      },
      cont2: {
        title: "ID Face Comparison",
        content: 'Compara la cara registrada en la videoentrevista, con la cara presente en el documento. ' +
          'Debido a la calidad de la extracción del documento de la video entrevista normalmente se usa un parámetro bajo, para minimizar los falsos positivos.',
        sliderCont: <div>slider element</div>
      }
    }
  ],
  option3: {
    title: 'Conexiones a terceros',
    cont: <div>Conections</div>
  },
  option4: {
    title: "Entrada de datos OCR",
    cont: {
      title: "Porcentaje de certeza OCR",
      content: 'Define el porcentaje de certeza mínimo, con el que el motor de certeza OCR ' +
        'toma un valor como válido. En caso de estar debajo de este porcentaje, los campos reconocidos son marcados de otro color ' +
        'para validación humana posterior.',
      sliderCont: <div>slider element</div>
    },
  }
}

export const fontFixture={
  fontTitle:'Signika-Bold',
  fontContent:'Signika-Regular_Regular'
}
