import { HeaderComp } from './HeaderComp.js';
import { SideBarComp } from './SideBarComp.js'

const rootElement = document.getElementById('root');
export const loadUI = () => {
    rootElement.appendChild(HeaderComp);
    rootElement.appendChild(SideBarComp);
}