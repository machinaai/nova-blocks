import { StateModelDevices } from '../models/model';
import { Fonts } from './dataReq.interface';
export interface ConsoleUsedDevicesProps {
  fontFam?: Fonts,
  actionOpInfo?: Function,
  usedDevices: StateModelDevices['usedDevices'],
  dateRequest: StateModelDevices['dateRequest'],
  error: StateModelDevices['error'];
  legends?: LegendsCard,
  enviromentEndPoints?: string;
  imageCard?: string
  percentage?: boolean;
}

export interface LegendsCard {
  title: string,
  label1: string,
  label2: string,
}