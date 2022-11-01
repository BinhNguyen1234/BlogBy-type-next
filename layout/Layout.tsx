import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import LoginContainer from '../components/Login/LoginContainer';
import LoginModal from '../components/Login/LoginModal';
import ProgressBar from './ProgressBar';
import React, {useRef, useCallback} from 'react';
interface Props {
  children: Array<JSX.Element>;
}

const Layout: React.FC<Props> = ({children}: Props) => {
  const loginModalRef = useRef<HTMLDivElement | null>(null);
  const handleModal = useCallback((action: string): void => {
    loginModalRef.current?.setAttribute('style', `display: ${action}`);
  }, []);
  return (
    <>
      <ProgressBar></ProgressBar>
      <LoginModal refProp={loginModalRef}>
        <LoginContainer hideModal={handleModal}></LoginContainer>
      </LoginModal>
      <NavBar showModal={handleModal}></NavBar>
      <Content>{children} </Content>
      <Footer></Footer>
    </>
  );
};
export default Layout;
