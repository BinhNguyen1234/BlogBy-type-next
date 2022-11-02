import { ReactElement } from 'react';
import Style from '../../styles/components/post/BackPostBtn.module.sass';
import { useRouter } from 'next/router';
import { SEND } from '../../feature/handleProgressBar';
import { useDispatch } from 'react-redux';
interface Props {
   children: string;
}

export default function BackPostBtn({ children }: Props): ReactElement {
   const dispatch = useDispatch();
   const router: any = useRouter();
   const handleBackward = function () {
      dispatch(SEND(null));
      if (window && router.components['/blog']) {
         router.back();
      } else {
         router.push('/blog?page=1');
      }
   };

   return (
      <>
         <div onClick={handleBackward} id={Style.BackPostBtn}>
            <span>&larr;</span>
            <div>{children}</div>
         </div>
      </>
   );
}
