import { ReactElement } from 'react';
import ListBlog from './ListBlog';

export interface DataType {
   url: string;
   title: string | string[];
   date: string;
}
interface Props {
   displayedData: Array<DataType>;
   isLoading: boolean;
}
export default function EditBlog({
   isLoading,
   displayedData,
}: Props): ReactElement {
   console.log(displayedData);
   return (
      <>
         <ListBlog isLoading={isLoading} data={displayedData}></ListBlog>
      </>
   );
}
