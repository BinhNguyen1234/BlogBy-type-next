import ProgressBar from './ProgressBar';
import Layout1 from './Layout';
import Modal from '../components/Modal';

import React, { useRef, useCallback } from 'react';
interface Props {
   children: Array<JSX.Element>;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
   return (
      <>
         <ProgressBar></ProgressBar>
         <Modal></Modal>
         <Layout1>{children}</Layout1>
      </>
   );
};
export default Layout;
