import ReactDom from 'react-dom';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: ModalProps) => {
  const element = document.getElementById('modalBox');
  if (!element) return null; // 엘리먼트가  비어있나 있나 확인하는 로직이 필요했던거임..
  return ReactDom.createPortal(children, element);
};
