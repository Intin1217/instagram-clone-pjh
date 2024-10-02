import { MdKeyboardArrowDown } from 'react-icons/md';

export default function MyPageFooter() {
  const footerList: string[] = [
    'Meta',
    '소개',
    '블로그',
    '채용 정보',
    '도움말',
    'API',
    '개인정보처리방침',
    '약관',
    '위치',
    'Instafram Lite',
    'Tgreads',
    '연락처 업로드 & 비사용자',
    'Meta Verified',
  ];
  return (
    <footer className="m-auto flex flex-col gap-2">
      <ul className="flex gap-2">
        {footerList.map((list, index) => (
          <li key={index}>
            <a className="text-[10px] text-gray-500">{list}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 justify-center">
        <div className="flex">
          <p className="text-[10px] text-gray-500">한국어</p>
          <MdKeyboardArrowDown className="text-gray-500" />
        </div>
        <p className="text-[10px] text-gray-500">© 2024 Instagram from Meta</p>
      </div>
    </footer>
  );
}
