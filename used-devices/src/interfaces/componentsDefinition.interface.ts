
export interface ComponentsDefinition {
  userType: string;
  startDate: string | any;
  endDate: string | any;
}

export interface ServiceParams {
  data: ComponentsDefinition,
  endPoint?: string;
}