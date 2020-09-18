/** Interface to contain the parameters for the alert block */
export interface AlertInterface {
    /**Get the message to be displayed in the alert */
    message: string;
    /**Defines the type of message to display */
    type: string
    /**Gets the value to show or not the icon in the alert */
    showIcon: boolean;
    /**Gets the value to show or not the closing icon in the alert */
    closable: boolean;
    /**Define the style for the alert */
    className:string;
}
