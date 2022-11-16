import { ReactElement } from 'react';
import Style from '../../styles/components/Pagination/Pagination.module.sass';
import WSSR from './WSSR';
import WCSR from './WCSR';
interface Props {
   page: number;
   hrefToQuerry?: string;
   setPage?: any;
   dispatch? :any
}

export default function Pagination({
   page,
   hrefToQuerry,
   setPage,
   dispatch
}: Props): ReactElement {
   return (
      <>
         {hrefToQuerry && !setPage ? (
            <WSSR
               dispatch = {dispatch }
               id={Style.Pagination}
               page={page}
               hrefToQuerry={hrefToQuerry}
            ></WSSR>
         ) : (
            <WCSR id={Style.Pagination} dispatch page={page} setPage={setPage}></WCSR>
         )}
      </>
   );
}
