import DefaultButton from '../../DefaultButton.tsx';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoLink } from 'react-icons/go';
import {
  useFetchProfileImage,
  useModal,
  useModalType,
  useProfileImage,
  useStore,
  // useProfileInfo,
} from '../../../store/store.ts';

export default function MyPageHeader() {
  const imageUrl = useProfileImage((state) => state.imageUrl);
  useFetchProfileImage();
  // const { profileInfo } = useProfileInfo();
  const { user } = useStore();
  const { modalType, setModalType } = useModalType();
  const { setIsOpen } = useModal();

  if (!user || user.length === 0) {
    return <div></div>;
  }

  return (
    <header className="flex justify-center w-full bg-blue-450 border-b-gray-200">
      <div className="flex mt-10 gap-16">
        <div>
          <img className="size-40" src={imageUrl} alt={'프로필 사진'} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <span className="font-bold text-lg">{user[0].userID}</span>
            <DefaultButton
              name={'프로필 편집'}
              onClick={() => {
                setModalType!('ProfileEdit');
                console.log(modalType);
                setIsOpen!(true);
              }}
            />
            <DefaultButton name={'보관된 스토리 보기'} />
            <IoSettingsOutline className="size-8" />
          </div>
          <div className="flex gap-6">
            {/*게시물은 카운터 넣어야함~*/}
            <span>
              게시물 <span>0</span>
            </span>
            <span>
              팔로워 <span>103</span>
            </span>
            <span>
              팔로우 <span>96</span>
            </span>
          </div>
          <div>
            {/*여기 아래 나중에 프로필 편집 값으로 수정*/}
            <p>{user[0].name}</p>
            <p>{user[0].profileExplanation}</p>
            <div className="flex gap-1">
              <GoLink className="size-[20px]" />
              <p>
                <a href={'https://naver.com'} target={'_blank'}>
                  {user[0].webSiteUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
