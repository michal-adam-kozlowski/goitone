import { createPortal } from 'react-dom';

export const Toast = ({ children }) => {

    return createPortal(
      <div style={{height:50, width:100, borderRadius: 16, padding: 8, backgroundColor: 'lightcyan', zIndex: 10}}>{children}</div>,
      document.getElementById("portal")
    )
  }