import { useState } from 'react';
import { useEffect } from 'react';
import "./../css/menuToggle.css"

function MenuToggle() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
            return () => {
                menuToggle.removeEventListener('click', toggleMenu);
            };
        }
    }, [isActive]);

    return (
        <>
        <img src='./images/system/medove-logotype.PNG' className='toggle-img' alt='logo'/>
        <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className={`menu-items ${isActive ? 'active' : ''}`}>
                <img src='/images/system/mob-menu-elements.png' alt='mob-bg' className='mob-img'/>
                <div className='bg-img'></div>
                <div><a href='#about-us'>Про нас</a></div>
                <div><a href='#ukranian-honey'>Український мед</a></div>
                <div><a href='#our-bees-and-hives-container'>Наші бджоли та вулики</a></div>
                <div><a href='#our-service-container'>Наш сервіс</a></div>
                <div>
                    <h4 className='mob-menu-h4 t-color-0'>Зв'язок з нами</h4>
                    <p className='mob-menu-p'>Україна, м. Київ, пр. Степана Бандери 21</p>
                </div>
                <div className='map'>
                    <h4 className=' t-color-0'>Карта проїзду</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.4323708811694!2d30.491815099999997!3d50.4889102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdfbae1341b7%3A0x7830d097d040344a!2z0L_RgNC-0YHQv9C10LrRgiDQodGC0LXQv9Cw0L3QsCDQkdCw0L3QtNC10YDQuCwgMjEsINCa0LjRl9CyLCAwNDA3Mw!5e0!3m2!1suk!2sua!4v1715948132789!5m2!1suk!2sua" >
                    </iframe>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default MenuToggle;
