import { ReactElement, memo } from 'react';
import Style from '../../styles/components/BlogEditor/SendBlogBtn.module.sass';
import Message from './Message';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../feature';
import { useDispatch } from 'react-redux';
import { handleSendPostBtn } from '../../feature/login/UISendPostBtn';
interface Props {
   onClick: any;
}
export default memo(function SendBlogBtn({ onClick }: Props): ReactElement {
   const dispatch = useDispatch();
   const stateBtn = useSelector((state: RootStateType) => {
      return state.UISendPostBtn;
   });
   const handleUiSendBtn = () => {
      if (stateBtn.message != 'TRY AGAIN') {
         onClick();
      } else {
         dispatch(handleSendPostBtn({ type: 'INITIAL' }));
      }
   };
   return (
      <>
         <button
            id={Style.SendBlogBtn}
            onClick={handleUiSendBtn}
            disabled={stateBtn.isDisable}
            type="button"
            className={`btn ${stateBtn.color}`}
         >
            <span
               style={{ display: stateBtn.spinnerIsHide }}
               className="spinner-border text-light"
               role="status"
            ></span>
            <span>{stateBtn.content}</span>
         </button>
         <Message>{stateBtn.message}</Message>
      </>
   );
});
