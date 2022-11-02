import { ReactElement } from 'react';
import Style from '../styles/Layouts/ProgressBar.module.sass';
import { useSelector } from 'react-redux';
import { RootStateType } from '../feature';
export default function ProgressBar(): ReactElement {
   const valueProgress = useSelector((state: RootStateType) => {
      return state.handleProgessbar.valueNow;
   });
   return (
      <>
         <div id={Style.ProgressBarContainer}>
            <div style={{ left: `${-100 + valueProgress}%` }}></div>
         </div>
      </>
   );
}
