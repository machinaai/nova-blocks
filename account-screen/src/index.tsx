import React from "react";
import { useDispatch, connect} from "umi";
import { AccountScreen } from './components/AccountScreen';
import { dataAccount, dataFonts } from './fixture/dataFixture';
import { Fonts, PropsAccount } from './interfaces/account-screen';
import { OptionEnum } from "./enums/option.enum";
import { StateModel } from './models/model';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  logoDesk?: string;
  logoMob?: string;
  iconCircle?: string;
  imgContent?: string;
  imgAppStore?: string;
  actionAppStore?: Function,
  imgPlayStore?: string;
  actionPlayStore?: Function,
  actionWallet?: Function,
  fontFam?: Fonts;
  cardNumber?: StateModel['cardNumber'];
  nameUser?: StateModel['nameUser'];
  option?: StateModel['option'];
  flowComplete?: StateModel['flowComplete'];
  onPhoneUser?: any
}

/**
 * Pro block AccountScreen
 * @param props 
 */
const  PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    logoDesk = dataAccount.iconDesk,
    logoMob = dataAccount.iconMob,
    iconCircle = dataAccount.iconCircle,
    imgContent = dataAccount.imgRobot,
    imgAppStore = dataAccount.iconAppStore,
    imgPlayStore = dataAccount.iconPlayStore,
    fontFam = dataFonts,
    cardNumber = '4152 3131 2343 4574',
    nameUser = 'Alejandro ******* *******',
    onPhoneUser,
  } = props
  const dispatch = useDispatch();

  const setOption = (option: any) => {
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setOption",
      payload: option
    })
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
      payload: true
    })
  }
  const propAccount: PropsAccount = {
    nameUser,
    numberCard: cardNumber,
    actionBtn: () => { 
      setOption(OptionEnum.btnUnderstood) 

      const  objectTwilio = {
        to: `whatsapp:+521${onPhoneUser}`,
        from: 'whatsapp:+14155238886',
        body: 'Notificacion',
        name: nameUser,
      };
      dispatch({
        type: 'BLOCK_NAME_CAMEL_CASE/twilioService',
        payload: objectTwilio,
      });
    },
    actionAppStore: () => { setOption(OptionEnum.appStore) },
    actionPlayStore: () => { setOption(OptionEnum.playStore) },
    actionWallet: () => { setOption(OptionEnum.wallet) },
    font: fontFam,
    logoDesk,
    logoMob,
    imageRobot: imgContent,
    imgAppStore,
    imgPlayStore,
    iconCircle
  }
  return (
    <div className={`${styles.withBg}`} style={{ backgroundImage: `url(${iconCircle})` }}>
      <AccountScreen {...propAccount} />
    </div>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  cardNumber: BLOCK_NAME_CAMEL_CASE.cardNumber,
  nameUser: BLOCK_NAME_CAMEL_CASE.nameUser,
  option: BLOCK_NAME_CAMEL_CASE.option,
  flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))( PAGE_NAME_UPPER_CAMEL_CASE)
