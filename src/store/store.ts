import { create } from 'zustand';
import { PostExisting, ProfileInfo } from './type.ts';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig.ts';
import { useEffect } from 'react';

const defaultImageRef = ref(storage, '/user/img/default_profile.svg');

const fetchDefaultImageUrl = async (setImageUrl: string) => {
  try {
    const url = await getDownloadURL(defaultImageRef);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setImageUrl(url); // 가져온 URL로 상태 업데이트
  } catch (error) {
    console.error('이미지 URL 가져오기 실패:', error);
  }
};

export const useFetchProfileImage = () => {
  const setImageUrl = useProfileImage((state) => state.setImageUrl);
  //????????????????? 모루겠다!
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    fetchDefaultImageUrl(setImageUrl); // 이미지 URL을 가져옴
  }, [setImageUrl]);
};

/// 상태들 아래 쪽
// export const useName = create<ProfileInfo>((set) => ({
//   name: 'hello.world',
//   setName: (name) => {
//     set({ name: name });
//   },
// }));
// 프로필 이미지 URL 상태
export const useProfileImage = create<ProfileInfo>((set) => ({
  imageUrl: '',
  setImageUrl: (url) => {
    set({ imageUrl: url });
  },
}));
//프로필 정보 상태
export const useProfileInfo = create<ProfileInfo>((set) => ({
  profileInfo: {
    id: 'hello.world',
    name: '헬로월드',
    webSiteUrl: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
    profileExplanation: 'Hello, World!',
  },
  setProfileInfo: ({ inputId, inputName, inputWebSiteUrl, inputProfileExplanation }) => {
    set({
      profileInfo: {
        id: inputId,
        name: inputName,
        webSiteUrl: inputWebSiteUrl,
        profileExplanation: inputProfileExplanation,
      },
    });
  },
}));
// 게시물 있나 없나 상태?
export const usePostExistence = create<PostExisting>((set) => ({
  //임시 true 기존값 false
  postExistence: false,
  setPostExistence: () => {
    set({ postExistence: true });
  },
}));
