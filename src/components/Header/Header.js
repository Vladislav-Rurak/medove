// import React,{ useEffect } from "react";
import styles from './Header.css'
function Header (){

    // useEffect(() => {
    //     const menuItems = document.querySelectorAll('.menu-item');

    //     menuItems.forEach(item => {
    //         item.addEventListener('click', () => {
    //             menuItems.forEach(item => {
    //                 item.classList.remove('active');
    //             });
    //             item.classList.add('active');
    //         });
    //     });
    // }, []);

    return (
        <>
        <div class="menu">
            <img src='#' alt='#'/>
            <div id="about" class="menuItem active">Про нас</div>
            <div id="products" class="menuItem">Наша продукція</div>
            <div id="reviews" class="menuItem">Відгуки</div>
            <div id="contact" class="menuItem">Зв'язок з нами</div>
        </div>
        </>
    )
}

export default Header