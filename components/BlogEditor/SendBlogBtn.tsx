import {MouseEventHandler, ReactElement, memo} from 'react';
import Style from '../../styles/components/BlogEditor/SendBlogBtn.module.sass';
import Message from './Message';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../feature';
interface Props {
  onClick: MouseEventHandler;
}
export default memo(function SendBlogBtn({onClick}: Props): ReactElement {
  const stateBtn = useSelector((state: RootStateType) => {
    return state.UISendPostBtn;
  });
  return (
    <>
      <button
        id={Style.SendBlogBtn}
        onClick={onClick}
        disabled={stateBtn.isDisable}
        type="button"
        className={`btn ${stateBtn.color}`}>
        <span
          style={{display: stateBtn.spinnerIsHide}}
          className="spinner-border text-light"
          role="status"></span>
        <span>{stateBtn.content}</span>
      </button>
      <Message>{stateBtn.message}</Message>
    </>
  );
});
