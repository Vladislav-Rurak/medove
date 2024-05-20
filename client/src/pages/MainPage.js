import PurchaseForm from '../components/PurchaseForm/PurchaseForm.js';
import SliderBottomItems from '../components/SliderBottom/SliderBottomItems.js'
import SliderTop from '../components/SliderTop/SliderTop.js'
import './../css/MainPage.css'
import MenuToggle from './../function/menuToggle.js';

function MainPage (){
    return(
        <>
        <div className='body'>
        <div className='header ml-mr-20' id='header'>
        <MenuToggle/>
        <div className='menu-items NAMU-Pro'>
            <img src='./images/system/medove-logotype.png' alt='logo' className='logo'/>
            <div><a href='#about-us' className='f-13-l-20'>Про нас</a></div>
            <div><a href='#ukranian-honey'className='f-13-l-20'>Український мед </a></div>
            <div><a href='#our-bees-and-hives-container' className='f-13-l-20'>Наші бджоли та вулики </a></div>
            <div><a href='#our-service-container'className='f-13-l-20'>Наш сервіс </a></div>
            <div><a href='#medove-form'className='f-13-l-20'>Зв'яжіться з нами </a></div>  
        </div>
        </div>
        <div className='honey-header-background'>
        <button className='call-us-btn'>
            <a href='#medove-form'>
                <img src='./images/system/ico/call.svg' alt='call'/>
            </a>
        </button> 
        <div className='honey-header ml-mr-20 NAMU-Pro'>
            <div>
                <h5 className='honey-header-h3 t-color-C68800 f-13-l-40 '>
                Серце Природи: 100% Натуральний Мед
                </h5>
                <h3 className='f-40 t-color-C68800 f-30'>Нектар квітів для вашого здоров'я та задоволення смаку.</h3>
                <p className='f-15 t-color-C68800'>Насолоджуйтеся неперевершеним смаком та корисними властивостями нашого меду, який виробляється з любов'ю та експертністю нашою командою бджільництва.</p>
                <button className='contact-us-btn-top'><a href='#medove-form'>Зв'язатись з нами</a></button>
            </div>
            <img src='./images/system/honey-header-pic.png' alt='honey-cream'/>
        </div>
        </div>
        <div className='about-us-bg'>
        <div className='about-us ml-mr-20 NAMU-Pro' id='about-us'>
            <img src='./images/system/honey-about-us-pic.png' alt='honey-about-us'/>
            <div className='about-us-item NAMU-Pro'>
                <h2 className='f-40'>Про нас</h2>
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
        <div className='ukranian-honey mb-50 NAMU-Pro' id='ukranian-honey'>
            <div className='ukranian-honey-header NAMU-Pro'>
                <img src='./images/system/ico/ukranian-honey-ico.svg' alt="honey"/>
                <h2 className='ukranian-honey-h2 f-25'>Український Мед</h2>
            </div>
            <div className='ukranian-honey-item ml-mr-20 NAMU-Pro'>
            <div className='ukranian-honey-p NAMU-Pro'>
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
            <img src='./images/system/ukranian-honey-pic.png' alt='ukranian-honey'/>
            </div>
            </div>
        </div>
        <div className='our-bees-and-hives-container ml-mr-20 NAMU-Pro' id='our-bees-and-hives-container'>
            <div className='our-bees-and-hives-container-item'>
                <img src='./images/system/ico/our-bees-and-hives-ico.svg' alt='bee'/>
                <h2 className='our-bees-and-hives-h2 f-25'>Наші бджоли та вулики</h2>
            </div>
            <SliderTop/>
            <div className='our-bees-and-hives-item mt-50 NAMU-Pro'>
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
                <img src='./images/system/our-bees-and-hives-pic.png' alt='bees-and-hives'/>
            </div>
        </div>
        <div className='our-service-container-background mb-50 masked'>
        <div className='our-service-container ml-mr-20 mb-50 NAMU-Pro' id='our-service-container'>
            <img src='./images/system/our-service-pic.png' alt='our-service' className='our-service-pic'/>
            <div className='our-service'>
                <h2 className='f-40'>Наш сервіс</h2>
                <p className='f-15'>Що стосується продуктів та послуг, наша мета та зобов'язання перед 
                   усіма клієнтами завжди підтримувати відмінну репутацію. 
                </p>
                <p className='f-15'>Наша проста маркетингова філософія така: 
                   ми обіцяємо доставляти споживачам здоров'я та смак через наш мед.
                </p>
                <button className='contact-us-btn-bot'><a href='#contact-us-form'>Зв'язатись з нами</a></button>
            </div>
        </div>
        </div>
        <div className='our-production-container ml-mr-20 mb-50 NAMU-Pro' id='our-production-container'>
            <img src='./images/system/ico/our-production-ico.svg' alt='production'/>
            <h3 className='f-25'>Наше виробництво</h3>
            <SliderBottomItems/>
        </div>
        <div className='medove-form-container  mb-50 NAMU-Pro' id='medove-form'>
             <div class="medove-form">
            <div class="medove-form-left-part">
                <div class="medove-form-text mb-40">
                    <h2 class="medove-h2 mb-20 f-40 t-color-FFF">Бажаєте придбати нашу продукцію?</h2>
                    <p class="medove-p f-15 t-color-FFF">Залишіть ваші контактні дані та наш менеджер зв'яжеться з Вами для уточнення деталей</p>
                </div>
                <PurchaseForm/>
            </div>
            <img src="/images/system/contact-form-pic.png" class="medove-form-pic" alt="medove"/>
        </div>
        </div>
        <div className='footer-bg-color'>
        <div className='footer ml-mr-20 NAMU-Pro'>
            <img src='./images/system/medove-logotype.svg' alt='logo' className='footer-item'/>
            <div className='footer-item'>
                <h4 className='f-13-l-20 t-color-C68800'>MEDOVE</h4>
            <div><a href='#ukranian-honey'className='f-13-l-20 t-color-FFF'>Український мед </a></div>
            <div><a href='#our-bees-and-hives-container' className='f-13-l-20 t-color-FFF'>Наші бджоли та вулики </a></div>
            <div><a href='#our-service-container'className='f-13-l-20 t-color-FFF'>Наш сервіс </a></div>
            <div><a href='#contact-us-form'className='f-13-l-20 t-color-FFF'>Зв'яжіться з нами </a></div>
            </div>
            <div className='footer-item call'>
            <div className='f-13-l-20 t-color-C68800 '>Зв'язок з нами</div>
                <p className='f-13-l-20 t-color-FFF'>Україна, м. Київ, пр. Степана Бандери 21</p>
            </div>
            <div className='map footer-item'>
                <h4 className='f-13-l-20 t-color-C68800'>Карта проїзду</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.4323708811694!2d30.491815099999997!3d50.4889102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdfbae1341b7%3A0x7830d097d040344a!2z0L_RgNC-0YHQv9C10LrRgiDQodGC0LXQv9Cw0L3QsCDQkdCw0L3QtNC10YDQuCwgMjEsINCa0LjRl9CyLCAwNDA3Mw!5e0!3m2!1suk!2sua!4v1715948132789!5m2!1suk!2sua" >

                </iframe>
            </div>
        <button className='arrow-top-btn'><a href='#header'><img src='./images/system/ico/arrow-top.svg' alt='arrow-top'/></a></button>
        </div>
        </div>
        </div>
        </>
    )
}

export default MainPage