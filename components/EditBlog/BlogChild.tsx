import { ReactElement, useState } from 'react';
import InforBlog from './InforBlog';
import ModifyBtn from './ModifyBtn';
import Style from '../../styles/components/EditBlog/BlogChild.module.sass';
export interface InforType {
   data: {
      title: string | string[];
      date: string;
      url: string;
      contentString: string | string[];
   };
   isLoading: boolean;
}

export default function BlogChild({
   data,
   isLoading,
}: InforType): ReactElement {
   const [isRemoved, setIsRemoved] = useState(false);
   return (
      <>
         <li
            style={{ opacity: isRemoved ? '0.2' : '1' }}
            className={Style.BlogChild}
         >
            <InforBlog isLoading={isLoading} data={data}></InforBlog>
            <ModifyBtn
               disabled={isRemoved}
               setIsRemoved={setIsRemoved}
               url={data.url}
               title={data.title}
            ></ModifyBtn>
         </li>
      </>
   );
}
