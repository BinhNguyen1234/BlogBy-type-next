import { ReactElement } from 'react';
import Style from '../../styles/components/AboutMeSection/RightImage.module.sass';
export default function RightImage(): ReactElement {
   return (
      <>
         <div id={Style.RightImage}>
            <div>
               <img src="/external/teee.jpg"></img>
            </div>
         </div>
      </>
   );
}
