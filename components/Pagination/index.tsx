import { ReactElement } from 'react';
import Style from '../../styles/components/Pagination/Pagination.module.sass';
import WCSR from './WCSR';
interface Props {
   page: number;
   hrefToQuerry?: string;
   setPage?: any;
   dispatch?: any;
}

export default function Pagination({
   page,
   hrefToQuerry,
   setPage,
   dispatch,
}: Props): ReactElement {
   return (
      <>
         <WCSR
            id={Style.Pagination}
            dispatch={dispatch}
            page={page}
            setPage={setPage}
         ></WCSR>
      </>
   );
}
