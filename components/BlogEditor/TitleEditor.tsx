import { memo } from 'react';
import Style from '../../styles/components/BlogEditor/TitleEditor.module.sass';

interface Props {
   form: string;
   customref: any;
   children?: string;
}
const TitleEditor = (props: Props) => {
   return (
      <>
         {console.log('title render', props.children)}
         <textarea
            contentEditable="true"
            ref={props.customref}
            form={props.form}
            id={Style.TitleEditor}
            placeholder="Title"
            defaultValue={props.children}
         ></textarea>
      </>
   );
};
export default memo(TitleEditor);
