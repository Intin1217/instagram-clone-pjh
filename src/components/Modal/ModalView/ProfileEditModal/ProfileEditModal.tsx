import {
  useFetchProfileImage,
  useModal,
  useProfileImage,
  useStore,
} from '../../../../store/store.ts';
import { IoCloseOutline } from 'react-icons/io5';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../config/firebaseConfig.ts';
import { useState, useEffect } from 'react';
// 프로필 수정 모달 부분
// input value 값 고정되어있는 문제.
// onChange써서 값 업데이트.
export default function ProfileEditModal() {
  const { isOpen, setIsOpen } = useModal();
  const imageUrl = useProfileImage((state) => state.imageUrl);
  const { user, set } = useStore();
  const [userData, setUserData] = useState({
    userID: '',
    name: '',
    webSiteUrl: '',
    profileExplanation: '',
  });

  useFetchProfileImage();

  // user가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (user.length > 0) {
      setUserData({
        userID: user[0].userID || '',
        name: user[0].name || '',
        webSiteUrl: user[0].webSiteUrl || '',
        profileExplanation: user[0].profileExplanation || '',
      });
    }
  }, [user]);

  // 데이터 업데이트 함수
  const updateUserProfile = async () => {
    try {
      const userDocRef = doc(db, 'Default-User', user[0].id); // 사용자 문서 참조
      await updateDoc(userDocRef, userData); // userData를 업데이트

      // 상태를 업데이트하여 UI에 즉시 반영
      set({ user: [{ ...user[0], ...userData }] }); // user[0]의 기존 데이터와 userData 병합하여 업데이트

      console.log('프로필이 업데이트되었습니다.');
      setIsOpen!(false); // 모달 닫기
    } catch (error) {
      console.error('프로필 업데이트 중 오류 발생:', error);
    }
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <IoCloseOutline
        onClick={() => {
          setIsOpen!(false);
        }}
        className="fixed right-2 top-2 size-12 text-gray-200 cursor-pointer"
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] rounded">
        <div className="flex flex-col w-full items-center justify-center mb-3">
          <div className="flex w-full p-2 items-center justify-center border-gray-300 border-b">
            <p className="text-[18px]">프로필 편집</p>
            <button
              onClick={() => {
                updateUserProfile();
              }}
              className="fixed right-4 text-blue-500 font-bold"
            >
              저장
            </button>
          </div>
          <div className="p-6 flex flex-col items-center gap-3">
            <img className="size-28" src={imageUrl} alt={'프로필 사진'} />
            <div className="w-[150%]">
              <p>인스타 아이디</p>
              <input
                onChange={(e) => setUserData((prev) => ({ ...prev, userID: e.target.value }))}
                type={'text'}
                value={userData.userID}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>이름</p>
              <input
                onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                type={'text'}
                value={userData.name}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>웹 사이트</p>
              <input
                onChange={(e) => setUserData((prev) => ({ ...prev, webSiteUrl: e.target.value }))}
                type={'text'}
                value={userData.webSiteUrl}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>프로필 설명</p>
              <textarea
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, profileExplanation: e.target.value }))
                }
                value={userData.profileExplanation}
                className="border border-gray-300 rounded w-full h-[150px] p-1 outline-none resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
