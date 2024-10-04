import { usePost, usePostExistence } from '../../../store/store.ts';
import { CiCamera } from 'react-icons/ci';
import { useEffect } from 'react';

export default function MyPageMain() {
  const { postExistence } = usePostExistence();
  const { post, fetchPost } = usePost();

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return postExistence ? (
    <main className="bg-gray-500">
      <p>db에 이미지 임의로 주소 넣은 것들 나중에 업로드해서 url넣고 출력되게</p>
      <div className="flex gap-3">
        {post.map((post) => (
          <img
            className="size-40 object-cover"
            src={post.imgUrl}
            alt={`${post.postId}번 게시글 이미지`}
          />
        ))}
      </div>
    </main>
  ) : (
    //게시글이 있으면 위쪽 렌더링 아니면아래
    <main className="m-auto flex flex-col items-center justify-center gap-6">
      <div className="border-black border-4 p-4 rounded-full">
        <CiCamera className="size-12" />
      </div>
      <div>
        <p className="font-bold text-2xl">게시물 없음</p>
      </div>
    </main>
  );
}

// postId
// ""
// (문자열)
//
//
// imgUrl
// "이미지url"
// (문자열)
//
//
// text
// "테스트 포스트 1번"
