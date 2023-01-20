import { createPortal } from 'react-dom';
const portalRoot = document.getElementById('portal');

const Portal = ({ children }) => createPortal(children, portalRoot);

export default Portal;
