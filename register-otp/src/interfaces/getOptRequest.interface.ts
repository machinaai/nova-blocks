import { request } from "express"

/**
 * Swagger 0.0.0
 *
 * @export
 * @interface getOtpRequestInterface
 */
export interface getOtpRequestInterface {

    flowId: string,
    phone: number
}