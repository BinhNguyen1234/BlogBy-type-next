import { ReactElement } from 'react';
import Style from '../../styles/components/IntroBlog/IntroBlog.module.sass';
export default function IntroBlog(): ReactElement {
   return (
      <>
         <div id={Style.IntroBlog}>Welcome to our blog content</div>
      </>
   );
}
