import style from '../styles/Layouts/Footer.module.sass';
import { useRef, useEffect, useState } from 'react';

const Footer: React.FC = () => {
   const thisRef = useRef<HTMLDivElement>(null);

   return (
      <>
         <div ref={thisRef} id={style.Footer}>
            {}
         </div>
      </>
   );
};

export default Footer;
