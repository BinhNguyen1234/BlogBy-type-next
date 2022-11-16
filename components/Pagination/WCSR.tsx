import { ReactElement } from 'react';

interface Props {
   page: number;
   id: string;
   setPage: any;
   dispatch? : any
}

export default function WCSR({ page, id, setPage, dispatch }: Props): ReactElement {
   return (
      <>
         <nav id={id} aria-label="Page navigation example">
            <ul className="pagination">
               <li
                  className={`page-item page-link ${
                     page === 1 ? 'disabled' : null
                  }`}
                  onClick={() => {
                     setPage(page - 1);
                  }}
               >
                  Previous
               </li>
               {page === 1 ? null : (
                  <li
                     className="page-item page-link"
                     onClick={() => {
                        setPage(page - 1);
                     }}
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
                  className="page-item page-link"
                  onClick={() => {
                     setPage(page + 1);
                  }}
               >
                  {page + 1}
               </li>
               <li
                  className="page-item page-link"
                  onClick={() => {
                     setPage(page + 1);
                  }}
               >
                  Next
               </li>
            </ul>
         </nav>
      </>
   );
}
