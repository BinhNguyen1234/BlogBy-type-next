import { ReactElement } from 'react';
import Style from '../../styles/components/LastestPost/LastestPost.module.sass';
import SliderPost from './SliderPost';
export default function LastestPost(): ReactElement {
   return (
      <>
         <div id={Style.Header}>
            <div style={{ fontSize: '2.5rem' }}>Lastest post</div>
            <div style={{ fontSize: '1.5rem' }}>See all posts&rarr;</div>
         </div>
      </>
   );
}
