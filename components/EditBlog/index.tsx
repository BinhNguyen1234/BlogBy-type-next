import { ReactElement } from 'react';
import ListBlog from './ListBlog';

export interface DataType {
   url: string;
   title: string;
   date: string;
}
interface Props {
   data: { data: Array<DataType>; isLoading: boolean };
}
export default function EditBlog({ data }: Props): ReactElement {
   return (
      <>
         <ListBlog data={data}></ListBlog>
      </>
   );
}
