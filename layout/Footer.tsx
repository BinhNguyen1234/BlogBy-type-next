import style from '../styles/Layouts/Footer.module.sass';
import { useRef } from 'react';
import Layout80 from './Layout80';
const Footer: React.FC = () => {
   const thisRef = useRef<HTMLDivElement>(null);

   return (
      <>
         <div id={style.FooterWrapper}>
            <div ref={thisRef} id={style.Footer}>
               <div></div>
               <Layout80>
                  <div id={style.FooterContent}>
                     <div>
                        <div>Subscribe to my newsletter here *</div>
                        <form>
                           <input type="email"></input>
                           <input
                              className="btn btn-light"
                              type="submit"
                              placeholder="submit"
                           ></input>
                        </form>
                     </div>
                     
                     <div>2áafasfasfasfasfasfas</div>
                  </div>
                  <hr></hr>
                  <div>copyrihgt</div>
               </Layout80>
            </div>
         </div>
      </>
   );
};

export default Footer;
