export default {
  'config.params.title1': 'Video interview validation',
  'config.params.title2': 'Identity document validation',
  'config.params.title3': 'Connections to third parties',
  'config.params.title4': 'OCR data entry',

  'config.op1.title1': 'Face validation',
  'config.op1.content1': 'The face of the video interviewed prospect corresponds to a real person, not avatarized, in a real environment, interacting at this moment in time.',
  'config.op1.title2': 'OTP',
  'config.op1.content2': 'The OTP read by voice by the user is exactly the same as that sent by the identification engine.',

  'config.op2.title1': 'ID validation',
  'config.op2.content1': 'Document presented meets the security criteria published with the INE / IFE, and is not a copy of it.',
  'config.op2.title2': 'ID Face Comparison',
  'config.op2.content2': 'Compare the face recorded in the video interview with the face present in the document.' +
    'Due to the quality of the extraction of the video interview document, a low parameter is normally used, to minimize false positives.',

  'config.op4.title': 'OCR certainty percentage',
  'config.op4.content': 'Defines the minimum certainty percentage, with which the OCR certainty engine takes a value as valid.' +
    'In case of being below this percentage, the recognized fields are marked in another color for later human validation.',

  'connection.title1': 'INE/CECOBAN',
  'connection.content1': 'An error when consulting the data with the authority, automatically generates an invalidation of the product request.',
  'connection.title2': 'Blacklists / AML',
  'connection.content2': 'An error when querying the data with the risk engine automatically generates an invalidation of the product request.',
  'radioOp1': 'True',
  'radioOp2': 'False',
  'slider.block.placeholder': 'Enter value'
};
