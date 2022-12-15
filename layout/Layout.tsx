import { ReactElement, useRef } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import LoginContainer from '../components/Login/LoginContainer';
import LoginModal from '../components/Login/LoginModal';
import { memo } from 'react';
export default memo(function Layout({
   children,
}: {
   children: ReactElement | ReactElement[] | Array<JSX.Element>;
}): ReactElement {
   const loginModalRef = useRef<HTMLDivElement | null>(null);
   const handleModal = (action: string): void => {
      loginModalRef.current?.setAttribute('style', `display: ${action}`);
   };
   console.log('MainLayout render');
   return (
      <>
         <LoginModal refProp={loginModalRef}>
            <LoginContainer hideModal={handleModal}></LoginContainer>
         </LoginModal>
         <NavBar showModal={handleModal}></NavBar>
         <Content>{children} </Content>
         <Footer></Footer>
      </>
   );
});
