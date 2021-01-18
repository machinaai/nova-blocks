/**
   * Transform the seconds to show it as minutes
   * @param time seconds that receive
   */
  export const countDown = (time: number) => {
    const toMinutes = Math.floor(time / 60);
    const toSeconds = time % 60;
    if (toMinutes === 0) {
      if (toSeconds < 10) {
        return `${toMinutes}0:0${toSeconds}`;
      }
      return `${toMinutes}0:${toSeconds}`;
    }
    if (toSeconds < 10) {
      return `0${toMinutes}:0${toSeconds}`;
    }
    return `0${toMinutes}:${toSeconds}`;
  };