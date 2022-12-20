import { ReactElement } from 'react';
import Style from '../../styles/components/AboutMeSection/LeftContent.module.sass';
export default function LeftContent(): ReactElement {
   return (
      <>
         <div id={Style.LeftContent}>
            <div>Hello, Tee here...</div>
            <div>
               Tee là một phân mảnh đang trong quá trình thức tỉnh tâm linh và
               đang tận hưởng tất cả những điều thú vị nhất trong giai đoạn
               chuyển hóa quan trọng này, đây cũng chính là lí do để bạn Blog ra
               đời sau rất nhiều năm ấp ủ
            </div>
            <button type="button" className="btn btn-primary">
               Read more
            </button>
         </div>
      </>
   );
}
