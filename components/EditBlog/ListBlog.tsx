import { ReactElement } from 'react';
import BlogChild from './BlogChild';
import Style from '../../styles/components/EditBlog/ListBlog.module.sass';
import { DataType } from './';
interface Props {
   data?: Array<DataType>;
   isLoading: boolean;
}
export default function ListBlog({ data, isLoading }: Props): ReactElement {
   return (
      <>
         <ul id={Style.ListBlog}>
            {(data as Array<DataType>).length > 0 ? (
               data?.map(
                  (
                     { url, title, date, contentString },
                     index
                  ): ReactElement => {
                     return (
                        <>
                           <BlogChild
                              key={index}
                              isLoading={isLoading}
                              data={{ title, date, url, contentString }}
                           ></BlogChild>
                           <hr></hr>
                        </>
                     );
                  }
               )
            ) : (
               <div> Không tìm thấy bài viết</div>
            )}
         </ul>
      </>
   );
}
