import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { SEND } from '../../feature/handleProgressBar';
interface Props {
   page: number;
   hrefToQuerry: string;
   id: string;
}

export default function WSSR({ page, hrefToQuerry, id }: Props): ReactElement {
   const dispatch = useDispatch();
   return (
      <>
         <nav id={id} aria-label="Page navigation example">
            <ul className="pagination">
               <li>
                  <Link prefetch={false} href={`${hrefToQuerry}${page - 1}`}>
                     <a
                        onClick={() => {
                           dispatch(SEND(null));
                        }}
                        className={`page-item page-link ${
                           page === 1 ? 'disabled' : null
                        }`}
                     >
                        Previous
                     </a>
                  </Link>
               </li>
               {page === 1 ? null : (
                  <li>
                     <Link prefetch={false} href={`${hrefToQuerry}${page - 1}`}>
                        <a
                           onClick={() => {
                              dispatch(SEND(null));
                           }}
                           className="page-item page-link"
                        >
                           {page - 1}
                        </a>
                     </Link>
                  </li>
               )}
               <li
                  style={{ cursor: 'not-allowed' }}
                  className="page-item active page-link"
               >
                  {page}
               </li>
               <li>
                  <Link prefetch={false} href={`${hrefToQuerry}${page + 1}`}>
                     <a
                        onClick={() => {
                           dispatch(SEND(null));
                        }}
                        className="page-item page-link"
                     >
                        {page + 1}
                     </a>
                  </Link>
               </li>
               <li>
                  <Link prefetch={false} href={`${hrefToQuerry}${page + 1}`}>
                     <a
                        onClick={() => {
                           dispatch(SEND(null));
                        }}
                        className="page-item page-link"
                     >
                        Next
                     </a>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
}
