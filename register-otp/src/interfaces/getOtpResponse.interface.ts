/**
 * Swagger 0.0.0
 *
 * @export
 * @interface getOtpResponseInterface
 */
export interface getOtpResponseInterface {

        step: string,
        flowId: string,
        phone: number,
        metadata: MetaDataInterface
    }

interface MetaDataInterface {
    success: boolean;
}
