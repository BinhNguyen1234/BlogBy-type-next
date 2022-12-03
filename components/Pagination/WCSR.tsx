import { ReactElement } from 'react';
import Link from 'next/link';
interface Props {
   page: number;
   id: string;
   setPage: any;
   dispatch?: any;
   hrefToQuerry: string;
}
export default function WCSR({
   page,
   id,
   hrefToQuerry,
   dispatch,
}: Props): ReactElement {
   return (
      <>
         <nav id={id} aria-label="Page navigation example">
            <ul className="pagination">
               <li >
                  <Link href={`${hrefToQuerry}${page - 1}`}>
                     <a 
                        className={`page-item page-link ${
                           page === 1 ? 'disabled' : null
                        }`}
                     >
                        Previous
                     </a>
                  </Link>
               </li>
               {page === 1 ? (
                  ''
               ) : (
                  <li >
                     <Link href={`${hrefToQuerry}${page - 1}`}>
                        <a className="page-item page-link">{page - 1}</a>
                     </Link>
                  </li>
               )}
               <li
                  style={{ cursor: 'not-allowed' }}
                  className="page-item active page-link"
               >
                  {page}
               </li>
               <li >
                  <Link href={`${hrefToQuerry}${page + 1}`}>
                     <a className="page-item page-link">{page + 1}</a>
                  </Link>
               </li>
               <li >
                  <Link href={`${hrefToQuerry}${page + 1}`}>
                     <a className="page-item page-link">Next</a>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
}
