import { MdOutlineContacts } from 'react-icons/md';
import { FaRegBookmark } from 'react-icons/fa6';
import { IoMdGrid } from 'react-icons/io';

export default function MyPageNav() {
  return (
    <div className="mt-5 border-gray-300 border-t flex items-center justify-center w-full gap-14">
      <div className="flex gap-1 pt-4 pb-4 border-gray-700 border-t">
        <IoMdGrid />
        <p className="text-[12px] ">게시물</p>
      </div>
      <div className="flex gap-1 pt-4 pb-4">
        <FaRegBookmark />
        <p className="text-[12px]">저장됨</p>
      </div>
      <div className="flex gap-1 pt-4 pb-4">
        <MdOutlineContacts />
        <p className="text-[12px]">태그됨</p>
      </div>
    </div>
  );
}
