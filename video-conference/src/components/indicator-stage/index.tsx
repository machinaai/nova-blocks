import React from "react";
import styles from "./style.less";

// block
import VisualIndicator from "../visual-indicator";

// interface
import { StageInterface } from "../../interfaces/stage.interface";

// assets
import DoneShape from "../../assets/done.svg";

// fixture
import { StagesN4Video } from "../../flowsVideoConference/stages-conference.fixture";

interface StageIndicatorProps {
  stage?: StageInterface;
  onInfoCognition?: string | React.ReactNode;
  onSuccess?: boolean;
  onPlaySound?: boolean;
}

const StageIndicator: React.FC<StageIndicatorProps> = ({
  stage = StagesN4Video[0],
  onSuccess = false,
  onPlaySound = false,
  onInfoCognition,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        {stage.shapeStage && (
          <img
            className={styles.shapeimg}
            src={onSuccess ? DoneShape : stage.shapeStage}
            alt=""
          />
        )}
      </div>
      <div className={styles.indicator}>
        <VisualIndicator
          successLegend="¡Validación exitosa!"
          legend={stage.legendStage}
          playSound={onPlaySound}
          success={onSuccess}
          infoCognition={onInfoCognition}
        />
      </div>
    </div>
  );
};

export default StageIndicator;
