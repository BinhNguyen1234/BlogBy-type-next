import React from 'react';
import style from '../../styles/components/ToggleBtn.module.sass';

interface Props {
   onClick: React.MouseEventHandler;
   refProp: React.RefObject<HTMLDivElement>;
}

const ToggleBtn: React.FC<Props> = ({ onClick, refProp }: Props) => {
   return (
      <>
         <div id={style.Wrapper}>
            <div ref={refProp} onClick={onClick} id={style.ToggleBtn}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </>
   );
};

export default ToggleBtn;
