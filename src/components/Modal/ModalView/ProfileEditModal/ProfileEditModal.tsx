import {
  useFetchProfileImage,
  useModal,
  useProfileImage,
  useProfileInfo,
} from '../../../../store/store.ts';
import { IoCloseOutline } from 'react-icons/io5';
import { ProfileInfo } from '../../../../store/type.ts';
// 프로필 수정 모달 부분
// input value 값 고정되어있는 문제.
// onChange써서 값 업데이트.
export default function ProfileEditModal() {
  const { isOpen, setIsOpen } = useModal();
  const { profileInfo, setProfileInfo } = useProfileInfo();
  const imageUrl = useProfileImage((state) => state.imageUrl);
  useFetchProfileImage();

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
            <button className="fixed right-4 text-blue-500 font-bold">저장</button>
          </div>
          <div className="p-6 flex flex-col items-center gap-3">
            <img className="size-28" src={imageUrl} alt={'프로필 사진'} />
            <div className="w-[150%]">
              <p>인스타 아이디</p>
              <input
                type={'text'}
                value={profileInfo!.id}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>이름</p>
              <input
                type={'text'}
                value={profileInfo!.name}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>웹 사이트</p>
              <input
                type={'text'}
                value={profileInfo!.webSiteUrl}
                className="border border-gray-300 rounded w-full p-1 outline-none"
              />
            </div>
            <div className="w-[150%]">
              <p>프로필 설명</p>
              <textarea
                value={profileInfo!.profileExplanation}
                className="border border-gray-300 rounded w-full h-[150px] p-1 outline-none resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
