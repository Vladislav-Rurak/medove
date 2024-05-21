import PurchaseForm from '../components/PurchaseForm/PurchaseForm.js';
import SliderBottomItems from '../components/SliderBottom/SliderBottomItems.js'
import SliderTop from '../components/SliderTop/SliderTop.js'
import './../css/MainPage.css'
import MenuToggle from './../function/menuToggle.js';

function MainPage (){

    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

// Создаем экземпляр Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Измените порог по вашему желанию

// Наблюдаем за каждым элементом
fadeElements.forEach(element => {
    observer.observe(element);
});


    return(
        <>
        <div className='honey-bg'>
        <div class="honey"></div>
        </div>
        <div className='body'>
        <div className='header' id='header'>
        <MenuToggle/>
        <div className='menu-items'>
            <img src='./images/system/medove-logotype.png' alt='logo' className='logo'/>
            <div><a href='#about-us' className='f-15-l-20'>Про нас</a></div>
            <div><a href='#ukranian-honey'className='f-15-l-20'>Український мед </a></div>
            <div><a href='#our-bees-and-hives-container' className='f-15-l-20'>Наші бджоли та вулики </a></div>
            <div><a href='#our-service-container'className='f-15-l-20'>Наш сервіс </a></div>
            <div><a href='#medove-form'className='f-15-l-20'>Зв'яжіться з нами </a></div>  
        </div>
        </div>
        <div className='honey-header-background'>
        <div className='honey-header ml-mr-20 '>
            <div>
                    <h5 className='honey-header-h3 f-13-l-40 t-color-C68800'>
                    Серце Природи: 100% Натуральний Мед
                    </h5>
                <h3 className='f-40 t-color-C68800 f-30 font-sitka-it'>Нектар квітів для вашого здоров'я та задоволення смаку.</h3>
                <p className='f-15 t-color-C68800'>Насолоджуйтеся неперевершеним смаком та корисними властивостями нашого меду, який виробляється з любов'ю та експертністю нашою командою бджільництва.</p>
                <button className='contact-us-btn-top'><a href='#medove-form'>Зв'язатись з нами</a></button>
            </div>
            <img src='./images/system/honey-header-pic.png' alt='honey-cream' className='anim-img'/>
        </div>
        </div>
        <div className='about-us-bg'>
        <div className='about-us ml-mr-20 ' id='about-us'>
            <img src='./images/system/honey-about-us-pic.png' alt='honey-about-us' className='anim-img'/>
            <div className='about-us-item '>
                <h2 className='f-40 font-sitka-it'>Про нас</h2>
                <p className='f-15'>
                    MEDOVE — це бренд чистого меду, що походить із ключового     регіону України, 
                    присвячений повазі до природи та традицій, що приносить світові найчистіші смаки України.
                </p>
                <p className='f-15'>
                    Розташований на території, покритій широкими лугами, горами та лісами, 
                    ми можемо похвалитися великою командою професійних бджолярів, 
                    які щосезону постачають світові високоякісний мед.
                </p>
                <p className='f-15'>
                    Мед MEDOVE від збору до упаковки проходить суворий контроль якості, 
                    щоб гарантувати його чистоту, натуральність, відсутність добавок і незабрудненість.
                </p>
            </div>
            </div>
        </div>
        <div className='ukranian-honey mb-50 ' id='ukranian-honey'>
            <div className='ukranian-honey-header '>
                <img src='./images/system/ico/ukranian-honey-ico.svg' alt="honey"/>
                <h2 className='ukranian-honey-h2 f-25 font-sitka-it'>Український Мед</h2>
            </div>
            <div className='ukranian-honey-item ml-mr-20 '>
            <div className='ukranian-honey-p '>
                <p className='f-15'> 
                    За даними Продовольчої та сільськогосподарської організації Об'єднаних Націй (ФАО),
                    Україна є не лише одним із найбільших виробників меду у світі, 
                    а й лідирує у виробництві меду в Європі за останнє десятиліття: сезонний обсяг виробництва перевищує 80 000 тонн. 
                    Ключові факти про бджільницьку галузь України включають її становище у трійці найбільших світових експортерів меду, 
                    лідерство з виробництва меду на душу населення, річний рівень споживання 1,2 кг та близько 70 000 осіб, 
                    які займаються бджільництвом та виробництвом меду.
                </p>
                <p className='f-15'>Понад 20% меду надходить із професійних пасік, на яких знаходяться тисячі бджолиних сімей.</p>
                <p className='f-15'>    
                   Більш того, мед MEDOVE, дотримуючись міжнародних стандартів, таких як ISO 22000,
                   ISO 9001, соціальної відповідальності та принципів HACCP, забезпечує дотримання найвищих стандартів якості.
                </p>
            </div>
            <div className='ukranian-honey-img'>
            <img src='./images/system/ukranian-honey-pic.png' alt='ukranian-honey' className='anim-img'/>
            </div>
            </div>
        </div>
        <div className='our-bees-and-hives-container ml-mr-20 ' id='our-bees-and-hives-container'>
            <div className='our-bees-and-hives-container-item'>
                <img src='./images/system/ico/our-bees-and-hives-ico.svg' alt='bee'/>
                <h2 className='our-bees-and-hives-h2 f-25 font-sitka-it'>Наші бджоли та вулики</h2>
            </div>
            <SliderTop/>
            <div className='our-bees-and-hives-item mt-50 '>
                <div>
                    <p className='f-15'>Ми співпрацюємо з більш ніж 1000 професійними пасіками та сотнями бджолярів для виробництва нашого меду, 
                       підтримуючи здоров'я та силу наших бджолиних сімей за допомогою ретельного розведення та методів управління. 
                    </p>
                    <p className='f-15'>
                        Ми ретельно відбираємо племінні вулики з урахуванням генетичних особливостей, 
                        темпераменту та загального стану здоров'я бджіл, гарантуючи, що бджоли, що вирощуються, 
                        добре підходять для їх умов життя та роботи.
                    </p>
                </div>
                <img src='./images/system/our-bees-and-hives-pic.png' alt='bees-and-hives' className='anim-img'/>
            </div>
        </div>
        <div className='our-service-container-background mb-50 masked'>
        <div className='our-service-container ml-mr-20 mb-50 ' id='our-service-container'>
            <img src='./images/system/our-service-pic.png' alt='our-service' className='our-service-pic anim-img' />
            <div className='our-service'>
                <h2 className='f-40 font-sitka-it'>Наш сервіс</h2>
                <p className='f-15'>Що стосується продуктів та послуг, наша мета та зобов'язання перед 
                   усіма клієнтами завжди підтримувати відмінну репутацію. 
                </p>
                <p className='f-15'>Наша проста маркетингова філософія така: 
                   ми обіцяємо доставляти споживачам здоров'я та смак через наш мед.
                </p>
                <button className='contact-us-btn-bot anim-button'><a href='#contact-us-form'>Зв'язатись з нами</a></button>
            </div>
        </div>
        </div>
        <div className='our-production-container ml-mr-20 mb-50 ' id='our-production-container'>
            <img src='./images/system/ico/our-production-ico.svg' alt='production'/>
            <h3 className='f-25 font-sitka-it'>Наше виробництво</h3>
            <SliderBottomItems/>
        </div>
        <div className='medove-form-container  mb-50 ' id='medove-form'>
             <div class="medove-form">
            <div class="medove-form-left-part">
                <div class="medove-form-text mb-40">
                    <h2 class="medove-h2 mb-20 f-40 t-color-FFF font-sitka-it">Бажаєте придбати нашу продукцію?</h2>
                    <p class="medove-p f-15 t-color-FFF">Залишіть ваші контактні дані та наш менеджер зв'яжеться з Вами для уточнення деталей</p>
                </div>
                <PurchaseForm/>
            </div>
            <img src="/images/system/contact-form-pic.png" class="medove-form-pic" alt="medove"/>
        </div>
        </div>
        <div className='footer-bg-color'>
        <div className='footer ml-mr-20 '>
            <img src='./images/system/medove-logotype.png' alt='logo' className='logo'/>
            <div className='footer-item'>
                <h4 className='f-13-l-20 t-color-C68800'>MEDOVE</h4>
            <div><a href='#ukranian-honey'className='f-13-l-20 t-color-FFF'>Український мед </a></div>
            <div><a href='#our-bees-and-hives-container' className='f-13-l-20 t-color-FFF'>Наші бджоли та вулики </a></div>
            <div><a href='#our-service-container'className='f-13-l-20 t-color-FFF'>Наш сервіс </a></div>
            <div><a href='#contact-us-form'className='f-13-l-20 t-color-FFF'>Зв'яжіться з нами </a></div>
            </div>
            <div className='footer-item call'>
            <div className='f-13-l-20 t-color-C68800 '>Зв'язок з нами</div>
                <p className='f-13-l-20 t-color-FFF'>Україна, м. Запоріжжя, вулиця Михайла Гончаренка, 26</p>
            </div>
            <div className='map footer-item'>
                <h4 className='f-13-l-20 t-color-C68800'>Карта проїзду</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.916707756895!2d35.11564683898166!3d47.84282049301367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc60d32a8c7b2d%3A0x48ebb75342a377fd!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0L7QvdGH0LDRgNC10L3QutCwLCAyNiwg0JfQsNC_0L7RgNGW0LbQttGPLCDQl9Cw0L_QvtGA0ZbQt9GM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjkwMDA!5e0!3m2!1suk!2sua!4v1716273694470!5m2!1suk!2sua"></iframe>
            </div>
        <button className='arrow-top-btn'><a href='#header'><img src='./images/system/ico/arrow-top.svg' alt='arrow-top'/></a></button>
        </div>
        </div>
        </div>
        
        </>
    )
}

export default MainPage