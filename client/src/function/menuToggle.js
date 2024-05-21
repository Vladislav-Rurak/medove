import { useState, useEffect, useRef } from 'react';
import "./../css/menuToggle.css";

function MenuToggle() {
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && 
            !menuRef.current.contains(event.target) &&
            burgerRef.current &&
            !burgerRef.current.contains(event.target)
        ) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <img src='./images/system/medove-logotype.png' className='toggle-img' alt='logo'/>
            <div className="menu-toggle" onClick={toggleMenu} ref={menuRef}>
                {isActive ? (
                    <div className='bar-container'>
                        <img src='./images/system/mob-menu.svg' className='mob-menu'/>
                    </div>
                ) : (
                    <div className='bar-container'>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                )}
                <div className={`menu-items ${isActive ? 'active' : ''}`}>
                    <img src='/images/system/mob-menu-elements.png' alt='mob-bg' className='mob-img'/>
                    <div className='bg-img'></div>
                    <div><a href='#about-us'>Про нас</a></div>
                    <div><a href='#ukranian-honey'>Український мед</a></div>
                    <div><a href='#our-bees-and-hives-container'>Наші бджоли та вулики</a></div>
                    <div><a href='#our-service-container'>Наш сервіс</a></div>
                    <div>
                        <h4 className='mob-menu-h4 t-color-0'>Зв'язок з нами</h4>
                        <p className='mob-menu-p'>Україна, м. Запоріжжя, вулиця Михайла Гончаренка, 26</p>
                    </div>
                    <div className='map-mob'>
                        <h4 className=' t-color-0'>Карта проїзду</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.916707756895!2d35.11564683898166!3d47.84282049301367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc60d32a8c7b2d%3A0x48ebb75342a377fd!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0L7QvdGH0LDRgNC10L3QutCwLCAyNiwg0JfQsNC_0L7RgNGW0LbQttGPLCDQl9Cw0L_QvtGA0ZbQt9GM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjkwMDA!5e0!3m2!1suk!2sua!4v1716273694470!5m2!1suk!2sua">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuToggle;
