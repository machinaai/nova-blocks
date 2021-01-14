import { StageInterface } from '../interfaces/stage.interface';
import scanner from '../assets/scan.png';
import faceTraker from '../assets/FaceTracker_mobile.svg';

/**
 * Fixture Stages conference N4 video
 *
 * @type {*}
 */
export const StagesN4Video: StageInterface[] = [
  {
    id: 0,
    legendStage: 'Por favor, muestra tu INE/IFE',
    name: 'faceRecognition',
    shapeStage: faceTraker,
    flipCamera: false
  },
  {
    id: 1,
    legendStage: 'Sonrie y parpadea',
    name: 'proofOfLife',
    shapeStage: undefined,
    flipCamera: false,
  },
  {
    id: 2,
    legendStage: 'Acerca tu INE del lado frontal',
    name: 'idsFront',
    shapeStage: scanner,
    flipCamera: true
  },
  {
    id: 3,
    legendStage: 'Acerca tu INE del lado reverso',
    name: 'idsBack',
    shapeStage: scanner,
    flipCamera: true
  },
  {
    id: 5,
    legendStage: 'Por favor, repite en voz alta el siguiente código: ',
    name: 'validateOtpUser',
    shapeStage: undefined,
    flipCamera: false
  },
  {
    id: 4,
    legendStage: 'Por favor, repite la siguiente frase: Acepto el contrato por medio de mi voz',
    name: 'acceptContract',
    shapeStage: undefined,
    flipCamera: false
  },
];