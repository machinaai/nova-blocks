export default {
  'config.params.title1': 'Validación de videoentrevista',
  'config.params.title2': 'Validación de documento de identidad',
  'config.params.title3': 'Conexiones a terceros',
  'config.params.title4': 'Entrada de datos OCR',

  'config.op1.title1': 'Face validation',
  'config.op1.content1': 'La cara del prospecto videoentrevistado corresponde a una persona real, no avatarizada, en ambiente real, interactuando en este momento del tiempo.',
  'config.op1.title2': 'OTP',
  'config.op1.content2': 'El OTP leído por voz por el usuario es exactamente igual al enviado por el motor de identificación.',

  'config.op2.title1': 'ID validation',
  'config.op2.content1': 'Documento presentado cumple con los criterios de seguridad publicados con el INE/IFE, y no es una copia de la misma.',
  'config.op2.title2': 'ID Face Comparison',
  'config.op2.content2': 'Compara la cara registrada en la videoentrevista, con la cara presente en el documento. ' +
    'Debido a la calidad de la extracción del documento de la video entrevista normalmente se usa un parámetro bajo, para minimizar los falsos positivos.',

  'config.op4.title': 'Porcentaje de certeza OCR',
  'config.op4.content': 'Define el porcentaje de certeza mínimo, con el que el motor de certeza OCR ' +
    'toma un valor como válido. En caso de estar debajo de este porcentaje, los campos reconocidos son marcados de otro color ' +
    'para validación humana posterior.',

  'connection.title1': 'INE/CECOBAN',
  'connection.content1': 'Un error al cosultar los datos con la autoridad, automáticamente genera una invalidación de la solicitud de producto.',
  'connection.title2': 'Listas negras/AML',
  'connection.content2': 'Un error al cosultar los datos con el motor de riesgo, automáticamente genera una invalidación de la solicitud de producto.',
  'radioOp1': 'Verdadero',
  'radioOp2': 'Falso',
  'slider.block.placeholder': 'Ingrese valor'
};

