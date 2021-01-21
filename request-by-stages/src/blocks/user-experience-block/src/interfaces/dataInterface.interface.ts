export interface PropOptions {
  dataOptions?: DataOption[];
  icons?: IconOption;
}
interface DataOption {
  type: string;
  count: number;
  averageTime: number;
}
interface IconOption {
  icon1: string | React.ReactNode;
  icon2: string | React.ReactNode;
  icon3: string | React.ReactNode;
}
