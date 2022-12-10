import { ReactElement } from 'react';
import Style from '../../styles/components/LastestPost/LastestPost.module.sass';
import SliderPost from './SliderPost';
export default function LastestPost(): ReactElement {
   return (
      <>
         <div id={Style.Header}>
            <div style={{ fontSize: '2.5em' }}>Lastest post</div>
            <div style={{ fontSize: '1.5em' }}>See all posts&rarr;</div>
         </div>
      </>
   );
}
