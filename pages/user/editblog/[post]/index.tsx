import {ReactElement, useLayoutEffect, useState} from 'react';
import {withRouter} from 'next/router';
import BlogEditor from '../../../../components/BlogEditor';
import LargeContentLayout from '../../../../layout/LargeContentLayout';
const blog = require('../../../../Server/Model/post');
import {useSelector} from 'react-redux';
import {RootStateType} from '../../../../feature';
import axios from 'axios';
export async function getServerSideProps(context: any) {
  const url = context.params.slug;
  console.time('querry Post with title');
  const data = await blog
    .findOne(
      {
        url: url.toLowerCase(),
      },
      {title: 1, content: 1, url: 1, imgThumbnail: 1, _id: 0}
    )
    .then((blog: any) => {
      return {
        imgThumbnail: blog.imgThumbnail,
        url: blog.url,
        title: blog.title,
        content: blog.content,
      };
    })
    .catch((e: Error) => {
      console.log(e);
      return {error: '404'};
    });
  console.timeEnd('querry Post with title');
  return {
    props: {
      imgThumbnail: data.imgThumbnail,
      url: data.url,
      title: data.title,
      content: data.content,
    },
  };
}
export default withRouter(function EditPost({router}): ReactElement {
  const [value, setValue] = useState(null);
  const isAuth = useSelector((state: RootStateType) => {
    return state.loginSliceReducers.isAuth;
  });
  useLayoutEffect(() => {
    if (router.isReady) {
      axios({
        method: 'get',
        url: `/api/v1/blog?url=${router.query.post}`,
      })
        .then((res) => {
          setValue(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [router.isReady]);
  if (isAuth === true) {
    return (
      <>
        <LargeContentLayout>
          <BlogEditor
            value={value}
            href="/api/v1/user/writeblog/newpost"></BlogEditor>
        </LargeContentLayout>
      </>
    );
  } else {
    return (
      <>
        <div>please login</div>
      </>
    );
  }
});
