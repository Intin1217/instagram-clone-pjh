import { create } from 'zustand';
import { PostExisting, ProfileInfo, ModalType, ProfileDataFirebase, PostType } from './type.ts';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebaseConfig.ts';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

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

//파이어베이스 컬렉션 불러오기 프로필 내용임~ 흠...
export const useStore = create<ProfileDataFirebase>((set) => ({
  user: [],
  fetchUser: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Default-User'));

      const userData = querySnapshot.docs.map((doc) => {
        const data = doc.data(); // Firestore 문서 데이터를 가져옴

        return {
          id: doc.id, // 문서 ID
          userID: data.userID || '', // Firestore 문서의 userID 필드
          name: data.name || '', // Firestore 문서의 name 필드
          webSiteUrl: data.webSiteUrl || '', // Firestore 문서의 webSiteUrl 필드
          profileExplanation: data.profileExplanation || '', // Firestore 문서의 profileExplanation 필드
        };
      });

      set({ user: userData });
    } catch (error) {
      console.error(error);
    }
  },
  set,
}));

//포스트 가져오기 타입 any는 임시용
export const usePost = create<PostType>((set) => ({
  post: [],
  fetchPost: async () => {
    try {
      const { setPostExistence } = usePostExistence.getState();
      const postSnapshot = await getDocs(collection(db, 'post'));
      const posts = postSnapshot.docs.map((doc) => ({
        postId: doc.data().id,
        imgUrl: doc.data().imgUrl,
        text: doc.data().text,
      }));
      if (posts.length > 0) {
        setPostExistence(true);
      } else {
        setPostExistence(false);
      }
      set({ post: posts });
    } catch (error) {
      console.error('데이터 가져오기 실패', error);
    }
  },
}));

// 프로필 이미지 URL 상태
export const useProfileImage = create<ProfileInfo>((set) => ({
  imageUrl: '',
  setImageUrl: (url) => {
    set({ imageUrl: url });
  },
}));
//프로필 정보 상태 이부분 파이어베이스에 작성해서 불러오게끔 해야함~
export const useProfileInfo = create<ProfileInfo>((set) => ({
  profileInfo: {
    id: 'hello.world',
    name: '헬로월드',
    webSiteUrl: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
    profileExplanation: 'Hello, World!',
  },
  setProfileInfo: ({ inputId, inputName, inputWebSiteUrl, inputProfileExplanation }) => {
    set((prev) => ({
      profileInfo: {
        ...prev,
        id: inputId,
        name: inputName,
        webSiteUrl: inputWebSiteUrl,
        profileExplanation: inputProfileExplanation,
      },
    }));
  },
}));
// 게시물 있나 없나 상태?
export const usePostExistence = create<PostExisting>((set) => ({
  postExistence: false,
  setPostExistence: (postExistence) => {
    set({ postExistence: postExistence });
  },
}));
//모달 on off
export const useModal = create<ModalType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set({ isOpen: isOpen });
  },
}));
//모달 타입
export const useModalType = create<ModalType>((set) => ({
  modalType: 'Default',
  setModalType: (stateModal) => {
    set({ modalType: stateModal });
  },
}));
