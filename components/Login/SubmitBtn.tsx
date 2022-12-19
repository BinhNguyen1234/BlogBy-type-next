import React from 'react';
import style from '../../styles/components/Login/SubmitBtn.module.sass';
import { useSelector} from 'react-redux';
import { RootStateType } from '../../feature';
import { memo } from 'react';

function SubmitBtn(): JSX.Element {
   const stateBtn = useSelector((state: RootStateType) => {
      return state.UISubmitBtn;
   });
   return (
      <>
         <button
            id={style.Submitbtn}
            disabled={stateBtn.disabled}
            className={`btn ${stateBtn.color}`}
            type="submit"
         >
            <div className={stateBtn.spinnerIsHide}>
               <span className="spinner-border" role="status"></span>
            </div>
            <div style={{ textOverflow: 'ellipsis' }}>{stateBtn.status}</div>
         </button>
      </>
   );
}
export default memo(SubmitBtn);
