import { ReactElement } from 'react';

export default function ImageSSR({ src }: { src: string }): ReactElement {
   return (
      <>
         <img
            onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src = '/external/404-not-found-error.jpeg';
            }}
            src={src}
         ></img>
      </>
   );
}
