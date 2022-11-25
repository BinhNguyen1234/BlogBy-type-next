import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { SEND } from '../../feature/handleProgressBar';
import { useRouter } from 'next/router';
interface Props {
   page: number;
   hrefToQuerry: string;
   id: string;
   dispatch?: any;
}

export default function WSSR({
   page,
   hrefToQuerry,
   id,
   dispatch,
}: Props): ReactElement {
   const router = useRouter();
   console.log(router);
   return (
      <>
         <nav id={id} aria-label="Page navigation example">
            <ul className="pagination">
               <li
                  onClick={() => {
                     dispatch.dispatch({ type: dispatch.type });
                     router.push(`${hrefToQuerry}${page - 1}`);
                  }}
                  className={`page-item page-link ${
                     page === 1 ? 'disabled' : null
                  }`}
               >
                  Previous
               </li>

               {page === 1 ? null : (
                  <li
                     onClick={() => {
                        dispatch.dispatch({ type: dispatch.type });
                        router.push(`${hrefToQuerry}${page - 1}`);
                     }}
                     className="page-item page-link"
                  >
                     {page - 1}
                  </li>
               )}
               <li
                  style={{ cursor: 'not-allowed' }}
                  className="page-item active page-link"
               >
                  {page}
               </li>

               <li
                  onClick={() => {
                     dispatch.dispatch({ type: dispatch.type });
                     router.push(`${hrefToQuerry}${page + 1}`);
                  }}
                  className="page-item page-link"
               >
                  {page + 1}
               </li>

               <li
                  onClick={() => {
                     dispatch.dispatch({ type: dispatch.type });
                     router.push(`${hrefToQuerry}${page - 1}`);
                  }}
                  className="page-item page-link"
               >
                  Next
               </li>
            </ul>
         </nav>
      </>
   );
}
