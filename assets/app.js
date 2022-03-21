import './styles/app.scss';

import responsiveMenu from './js/responsive-menu';
import form from './js/form';

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM has been fully loaded and parsed.");
    responsiveMenu();
    form();
});