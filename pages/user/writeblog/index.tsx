import {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../../feature';
import LargeContentLayout from '../../../layout/LargeContentLayout';
import BlogEditor from '../../../components/BlogEditor';
export default function WriteBlog(): ReactElement {
  const isAuth = useSelector((state: RootStateType) => {
    return state.loginSliceReducers.isAuth;
  });
  if (isAuth) {
    return (
      <>
        <LargeContentLayout>
          <BlogEditor href="/api/v1/user/writeblog/newpost"></BlogEditor>
        </LargeContentLayout>
      </>
    );
  } else {
    return (
      <>
        <div>Please login</div>
      </>
    );
  }
}
