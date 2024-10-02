import { IoHeartOutline, IoCompassOutline, IoAddCircleOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { BiSend } from 'react-icons/bi';
import { MdOutlineContacts } from 'react-icons/md';
import instagramLogo from '../../assets/instagram_logo.svg';

export default function MyPageSide() {
  const MenuBox = 'flex p-2 gap-2';
  const pTagBox = 'pt-1';
  return (
    <div className="h-full p-6 pl-0 pt-0 flex flex-col w-[280px] border-gray-200 border-r">
      <div className="pl-6 m-0">
        <a href={'#'}>
          <img className="object-contain size-[7rem]" src={instagramLogo} alt={'인스타로고'} />
        </a>
      </div>
      <ul className="p-6 flex flex-col gap-2.5">
        <li className={MenuBox}>
          <GoHome className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>홈</p>
          </a>
        </li>
        <li className={MenuBox}>
          <IoIosSearch className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>검색</p>
          </a>
        </li>
        <li className={MenuBox}>
          <IoCompassOutline className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>탐색 탭</p>
          </a>
        </li>
        <li className={MenuBox}>
          <MdOutlinePhotoLibrary className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>릴스</p>
          </a>
        </li>
        <li className={MenuBox}>
          <BiSend className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>메시지</p>
          </a>
        </li>
        <li className={MenuBox}>
          <IoHeartOutline className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>알림</p>
          </a>
        </li>
        <li className={MenuBox}>
          <IoAddCircleOutline className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>만들기</p>
          </a>
        </li>
        <li className={MenuBox}>
          <MdOutlineContacts className="size-8" />
          <a href={'#'}>
            <p className={pTagBox}>프로필</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
