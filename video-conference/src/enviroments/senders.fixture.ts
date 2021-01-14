/**
 * Endpoints cognitive service
 *
 * @export {string}
 *
 */
export const senders = {
    proofOfLife: '/api/ws/flows/streams/steps/_proof_live',
    faceRecognition: '/api/ws/flows/streams/steps/_face_recognition',
    idsFront: '/api/ws/flows/streams/steps/_ids_front_extractor',
    idsBack: '/api/ws/flows/streams/steps/_ids_back_extractor',
    validateOtpUser: '/api/ws/flows/streams/steps/_validate_otp_speech',
    acceptContract : '/api/ws/flows/streams/steps/_accept_contract'
}
