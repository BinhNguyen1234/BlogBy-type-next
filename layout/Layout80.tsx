import { ReactElement } from 'react';
interface Props {
   children: ReactElement | ReactElement[];
}
import Style from '../styles/Layouts/Layout80.module.sass';
export default function Layout80({ children }: Props): ReactElement {
   return (
      <>
         <div id={Style.Layout80}>
            <div>{children}</div>
         </div>
      </>
   );
}
