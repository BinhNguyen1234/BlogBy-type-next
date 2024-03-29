import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import Style from '../../styles/components/post/DecodeDelta.module.sass';

const ReactQuill = dynamic(
   async () => {
      const { default: RQ } = await import('react-quill');
      return function RQComponent({
         forwardedRef,
         id,
         value,
         modules,
         readOnly,
      }: {
         id: any;
         forwardedRef?: any;
         modules?: any;
         value: any;
         readOnly: any;
      }): ReactElement {
         return (
            <>
               <RQ
                  ref={forwardedRef}
                  id={id}
                  value={value}
                  modules={modules}
                  readOnly={readOnly}
               ></RQ>
            </>
         );
      };
   },
   {
      ssr: false,
      loading: () => {
         return (
            <div
               className="--skeleton"
               style={{ width: '100%', height: '100vh', alignSelf: 'center' }}
               role="status"
            >
               <div
                  style={{ width: '100%', height: '20%' }}
                  className="set"
               ></div>
               <div
                  style={{ width: '100%', height: '20%' }}
                  className="set"
               ></div>
               <div
                  style={{ width: '100%', height: '20%' }}
                  className="set"
               ></div>
               <div
                  style={{ width: '100%', height: '20%' }}
                  className="set"
               ></div>
               <div
                  style={{ width: '100%', height: '20%' }}
                  className="set"
               ></div>
            </div>
         );
      },
   }
);
let toolbar = false;
export default function DecodeDelta({
   children,
   readOnly,
}: {
   children: any;
   readOnly: boolean;
}): ReactElement {
   return (
      <>
         <ReactQuill
            id={Style.DecodeDelta}
            modules={{ toolbar }}
            readOnly={readOnly}
            value={children}
         ></ReactQuill>
      </>
   );
}
