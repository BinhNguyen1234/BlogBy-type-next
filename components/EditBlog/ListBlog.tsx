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
            {data?.map(({ url, title, date }, index): ReactElement => {
               return (
                  <>
                     <BlogChild
                        isLoading={isLoading}
                        key={url}
                        data={{ title, date, url }}
                     ></BlogChild>
                     <hr></hr>
                  </>
               );
            })}
         </ul>
      </>
   );
}
