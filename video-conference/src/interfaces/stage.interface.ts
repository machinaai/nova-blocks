
/**
 * StageInterface 
 *
 * @interface StageInterface
 */
export interface StageInterface {
    id: number;
    name: string;
    shapeStage?: string | null;
    legendStage: string;
    flipCamera?: boolean;
}