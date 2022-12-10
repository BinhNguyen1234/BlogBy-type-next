import { ReactElement } from 'react';
import Style from '../../styles/components/LastestPost/LastestPost.module.sass';
import Link from 'next/link';
export default function LastestPost(): ReactElement {
   return (
      <>
         <div id={Style.Header}>
            <div style={{ fontSize: '2.5em' }}>Lastest post</div>
            <Link href={"blog?page=1"}><a style={{ fontSize: '1.5em',textDecoration:"none" }}>See all posts&rarr;</a></Link>
         </div>
      </>
   );
}
