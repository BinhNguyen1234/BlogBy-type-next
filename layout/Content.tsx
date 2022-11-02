import { ReactElement } from 'react';
import Style from '../styles/Layouts/Content.module.sass';

interface Props {
   children: ReactElement | any;
}
export default function Content({ children }: Props): ReactElement {
   return (
      <>
         <div id={Style.Content}>{children}</div>
      </>
   );
}
