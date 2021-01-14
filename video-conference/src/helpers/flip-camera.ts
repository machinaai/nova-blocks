/**
 * Flip camera function stream
 *
 * @param {boolean} type
 */
export const switchCamera = () => {
    const iframe = document.querySelector('iframe');
    const videoElement = iframe.contentWindow.document.getElementById("change-devices");

    videoElement?.click();
}