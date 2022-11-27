import { ReactElement, useEffect, useRef } from 'react';
import Style from '../../styles/components/EditBlog/ModifyBtn.module.sass';
import Link from 'next/link';
import APIAuth from '../../ulitlity/callApiWAuth';
export default function ModifyBtn({
   url,
   setIsRemoved,
   disabled,
}: {
   url: string;
   setIsRemoved: any;
   disabled: boolean;
}): ReactElement {
   useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
   }, []);
   const buttonRef = useRef<HTMLButtonElement>(null);
   let Api = new APIAuth();
   return (
      <>
         <div id={Style.ModifyBtn} className="btn-group">
            <button
               id={Style.Btn}
               className="btn btn-dark dropdown-toggle"
               type="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
               disabled={disabled}
               ref={buttonRef}
            >
               Modify post
            </button>
            <ul
               style={{ paddingTop: 0 }}
               className="dropdown-menu dropdown-menu-dark"
            >
               <li id={Style.ActionBtn}>
                  <span className="dropdown-item disabled">Actions</span>
               </li>
               <hr style={{ margin: '0' }}></hr>
               <li id={Style.EditBtn}>
                  <Link href={`editblog/post?url=${url}`}>
                     <a className="dropdown-item">&#9998; Edit</a>
                  </Link>
               </li>
               <li id={Style.RemoveBtn}>
                  <div
                     onClick={() => {
                        buttonRef.current?.click();
                        setIsRemoved(true);
                     }}
                     className="dropdown-item btn-group"
                  >
                     &#10007; Remove
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
}
