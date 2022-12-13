import style from '../styles/Layouts/Footer.module.sass';
import { useRef, useEffect, useState } from 'react';

const Footer: React.FC = () => {
   const thisRef = useRef<HTMLDivElement>(null);

   return (
      <>
     
      <div id={style.FooterWrapper}>
            <div ref={thisRef} id={style.Footer}>
              test
            </div>
            
         </div>
      </>
   );
};

export default Footer;
