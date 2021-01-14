import { StageInterface } from '../interfaces/stage.interface';

/**
 * Select a stage to send it
 *
 * @param {StageInterface[]} stages
 * @param {number} current
 * @return {*}  {(StageInterface | undefined)}
 */
export const stageSelect = (stages: StageInterface[], current: number): StageInterface | undefined => {
    return stages.find((stage: StageInterface) => {
        return stage.id === current;
    })
}