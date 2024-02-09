/* eslint-disable */
<script setup>
import { onActivated, onBeforeMount, onMounted } from "vue";
const activeTab = ref(0);
const transitionDir = ref('fade');

const Payment = resolveComponent('Payment');
const Main = resolveComponent('Main');
const Questions = resolveComponent('Questions');
const WhyUs = resolveComponent('WhyUs');

const components = [Main, WhyUs, Questions];
const nextTab = (i) => {
    activeTab.value = i - 1;
}

watch(activeTab, (newX, oldX) => {
    if (newX > oldX) {
        navigator.vibrate([30])
        transitionDir.value = 'fade';
        return;
    }
    navigator.vibrate([30])
    transitionDir.value = 'fadedown';
})
const loadOld = ref(true);
onMounted(() => {
    
    document.body.addEventListener('wheel', (event) => {

        if (event.deltaY > 0 && activeTab.value < 3) {
            navigator.vibrate([30])
            activeTab.value++;
        } else if (event.deltaY < 0 && activeTab.value > 0) {
            navigator.vibrate([30])
            activeTab.value--;
        }
    });
})

onBeforeMount(() => {
    loadOld.value = window.innerWidth <= 320 || window.innerHeight <= 320;
})

onActivated
const swipeLeft = () => {
    if (activeTab.value < 3) {
        activeTab.value++;
        return;
    }
    activeTab.value = 0;
}

const swipeRight = () => {
    if (activeTab.value > 0) {
        activeTab.value--;
        return;
    }
    activeTab.value = 3;
}
</script>

<template>
    <div class="container" v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight">
        <header class="main_header">
            <img src="./templates/default/images/logoL.svg" width="130" height="29" alt="LinkGX-Logo">
            <a class="login_button" href="/auth/login">LogIn
                <img class="icon-padlock" src="./templates/default/images/padlock.svg" alt="padlock" width="24" height="24">


            </a>
        </header>

        <nav>
            <div class="list">
                <div class="list_item" @click="nextTab(i)" v-for="i in 4" :key="i"
                    :style="{ 'background-color': i - 1 === activeTab ? '#fff' : 'transparent', }"></div>
            </div>
        </nav>
        
        <main class="main legacy" v-if="loadOld"> 
            <section class="content main_content"><div class="hero"><h1>LinkGX - fast link indexing service in Google</h1></div><p>LinkGX is your reliable assistant for optimizing websites and increasing their visibility in Google search engine. It is a unique backlink indexing service that will help your projects reach their full potential and reach a new level in the web space. </p><div class="buttons"><a class="register_button" href="/auth/register">Register NOW!</a></div></section>
            <section class="content why_content-about-us">
                <h2>Why Us?</h2>
                <h3>LinkGX stands out due to a series of unique characteristics and beneficial features:</h3>
                <div name="list" class="why_list why_list-about-us">
                    <article class="why_list_item-about-us">
                        <h4>Instant Indexing.</h4>
                        <p>Thanks to its innovative approach to link indexing, your content will be indexed almost
                            instantly.</p>
                    </article>
                    <article class="why_list_item-about-us">
                        <h4>Effective Results.</h4>
                        <p>Increase your search visibility and achieve high positions in Google search results.</p>
                    </article>
                    <article class="why_list_item-about-us">
                        <h4>Simplicity and convenience.</h4>
                        <p>With LinkGX you don't need to be an SEO expert, as our service is intuitive and accessible to
                            everyone.</p>
                    </article>
                    <article class="why_list_item-about-us">
                        <h4>Security and Privacy.</h4>
                        <p>We value the security of our clients' site and ensure complete confidentiality of data.</p>
                    </article>
                </div>
            </section>
            <section class="content why_content-about-us">
                <h2>FAQ</h2>
                <div name="faq" class="why_list why_list-faq">
                    <article class="why_list_item-faq">
                        <h4>Who can use this indexing service?</h4>
                        <p>LinkGX is an ideal and priceless Link Crawling and Indexing best
                            for the expert or to the starter website admins. Any individual who possesses or deals with a
                            site can exploit our Unique services to get his pages or backlinks indexed. With the capacity to
                            drive Search Engine bots and spiders to crawl and index your backlinks, LinkGX is an exceptional
                            incentive for anybody hoping to work on their website ranking. Links Indexer is a great addition
                            to SEO and LinkBuilding companies or individuals who can provide it as extra bonus to their
                            clients!</p>
                    </article>
                    <article class="why_list_item-faq">
                        <h4>What sites do you allow in your service?</h4>
                        <p>We allow all legal sites and non blacklisted websites. Our system will automatically delete
                            blacklisted websites from campaigns.</p>
                    </article>
                    <article class="why_list_item-faq">
                        <h4>What type of sites this service is good for?</h4>
                        <p>Our service works fine on any kind of websites, pages and backlinks. As long as it is a published
                            page online, it will work. Also make sure the sites meta tag is set to indexing and do not block
                            bots and crawlers. If You want Google to find your links just submit them to Us!</p>
                    </article>
                    <article class="why_list_item-faq">
                        <h4>What type of payment do you accept?</h4>
                        <p>Cryptocurrency is our primary payment processor. You can purchase LinkGX limits using your
                            cryptocurrency balance, or pay directly with your credit card - Visa, Mastercard, American
                            Express, Discover, E-check. If you are unable to pay by any of the above methods, or you just
                            want to pay in a different way, just contact us and let us know how you want to pay!</p>
                    </article>
                </div>
            </section>
            <section class="content why_content-about-us content_payment">
                <h2>Payment and Tariffs</h2>
                <div name="list" class="why_list why_list-payment">
                    <article class="payment_item">
                        <p>We provide services without need to subscribe.</p>
                    </article>
                    <article class="payment_item">
                        <p>We accept payments in cryptocurrency.</p>
                    </article>
                    <article class="payment_item">
                        <p>You get what you pay for.</p>
                    </article>
                </div>
                <div style="" class="payment-bottom">
                    <div class="title-orange">Only 0.05<small>$</small> for indexing one link.</div><a
                        class="register_button" href="/auth/register">Register NOW!</a>
                </div>
            </section>
        </main>

        <main class="main" v-show="!loadOld">

            <Transition :name="transitionDir">
                <Main v-show="activeTab === 0" />
            </Transition>
            <Transition :name="transitionDir">
                <WhyUs :activeTab="activeTab" v-show="activeTab === 1" />
            </Transition>

            <Transition :name="transitionDir">
                <Questions :activeTab="activeTab" v-show="activeTab === 2" />
            </Transition>
            <Transition :name="transitionDir">
                <Payment :activeTab="activeTab" v-show="activeTab === 3" />
            </Transition>

            <div class="background">
                <div class="absoulte_rounded" v-for="i in 12" :key="i" :class='[`absoulte_rounded-${i}`]'>

                </div>
            </div>
           
        </main>
        

        <div class="icon_list">
            <a href="https://www.instagram.com/" target="_blank">
                <img class="icon" src="./templates/default/images/instagram.svg" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img class="icon" src="./templates/default/images/facebook.svg" alt="Facebook" width="24" height="24"> </a>
            <a href="https://www.twitter.com/" target="_blank">
                <img class="icon" src="./templates/default/images/twitterx.svg" alt="Twitter" width="24" height="24"></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('../assets/main.scss');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');

img:not(.icon) {
    padding: 0 4px;
}

.left_pad {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    background-color: red;
}

.right_pad {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 20px;
    background-color: red;
}

.main_header img {
    opacity: 0.8;
}

.background {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 75dvw;
    height: 75dvw;
    display: flex;
    transform-origin: 0% 0%;
    background-color: rgba(27, 27, 27, 0);
    z-index: 1;
    animation: forward 12s linear infinite;
    border-radius: 50%;

}

.fade-enter-active,
.fade-leave-active {
    transform: translateY(-100%);
    transition: all 0.6s ease;
    opacity: 0;
}

.icon-padlock {
    width: 28px;
    height: 28px;
    align-self: flex-start;
    transform: scale(0.5);
}

.fade-enter-from {
    transform: translateY(-100%);
    transition: all 1s ease;
}

.fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.fadedown-enter-active,
.fadedown-leave-active {
    transform: translateY(100%);
    transition: all 0.6s ease;
    opacity: 0;

}

.fadedown-enter-from {
    transform: translateY(100%);
    transition: all 1s ease;
}

.fadedown-leave-to {
    transform: translateY(100%);
    opacity: 0;

}

* {
    scrollbar-color: rgba(0, 0, 0, 0);

    overflow: hidden;
    color: white;
    overflow: hidden;
}

.main {
    padding-bottom: 12px;
    align-items: center;
    animation: appear 1s linear 1;
}

nav {
    position: absolute;
    bottom: 50%;
    left: 8px;
    z-index: 10;
}

.icon_list {
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 10px;
    gap: 16px;
    justify-content: flex-end;
    padding: 24px;
    z-index: 10;
}

.icon {
    width: 24px;
    opacity: 0.5;
    transition: all 0.3s ease;
    cursor: pointer;
}

.icon:hover {
    opacity: 1;
    transform: scale(1.2);
}

.list {
    display: flex;
    z-index: 3;
    justify-items: center;
    flex-direction: column;
    gap: 5px;
}

.list_item {
    width: 12px;
    height: 12px;
    border: 1px solid rgba(255, 255, 255, 0.208);
    transition: all 0.3s ease;
}

.list_item:not(.list-item--active):hover {
    cursor: pointer;
    background-color: orange;
}

.list-item--active {
    background-color: rgb(251, 158, 28);
}

.container {
    position: relative;
    min-height: 100svh;
    max-height: 100svh;
    overflow: hidden;
    background: linear-gradient(349deg, rgba(94, 93, 93, 1) 0%, rgba(80, 80, 80, 1) 28%, rgba(0, 0, 0, 1) 100%);
    
}

.main_logo {
    font-size: 38px;
    font-weight: 900;
    color: #dfdfdf;
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: pointer;
}

.main_logo:hover {
    opacity: 1;
}

.main_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
}

.login_button {
    display: flex;
    text-decoration: none;
    padding: 8px;
    border: 1px solid rgb(190, 190, 190);
    transition: all 0.3s ease;
    z-index: 10;
    align-items: center;
    gap: 2px;
}

.login_button:hover {
    background-color: grey;
    color: rgb(255, 178, 70);
    border: 1px solid rgb(190, 190, 190);
}

.absoulte_rounded {
    position: absolute;
    border-radius: 50%;
    transition: all 0.6s ease;
    z-index: 0;
    opacity: 0.1;
    width: 2dvh;
    height: 2dvh;
}

$dotsize: 80;

@for $i from 1 through 12 {
    .absoulte_rounded-#{$i} {
        $size: $i * 4;
        width: $i * 8dvh;
        height: $i * 8dvh;
        top: 50%;
        left: 50%;
        border: 1px * 2.8 * $i dashed rgb(200, 200, 200);
        opacity: 0.1 - 0.008 * $i;
        transform: translateX(-50%) translateY(-50%) rotate($i * 15deg);
    }
}


@media only screen and (min-width: 1280px) {
    $dotsize: 30;

    @for $i from 1 through 12 {
        .absoulte_rounded-#{$i} {
            $size: $i * 4;
            width: $i * 4dvw;
            height: $i * 4dvw;
            top: 50%;
            left: 50%;
            border: 1px * 2 * $i dashed rgb(200, 200, 200);
            transform: translateX(-50%) translateY(-50%) rotate($i * 5deg);
        }
    }
}

@media only screen and (max-width: 968px) and (orientation: landscape) {
    $dotsize: 30;

    @for $i from 1 through 12 {
        .absoulte_rounded-#{$i} {
            $size: $i * 4;
            width: $i * 8dvw;
            height: $i * 8dvw;
            top: 50%;
            max-height: fit-content;
            left: 50%;
            border: 1px * $i dashed rgb(200, 200, 200);
            transform: translateX(-50%) translateY(-50%) rotate($i * 5deg);
        }
    }
}

@media only screen and (max-width: 968px) and (orientation: portrait) {
    $dotsize: 30;

    @for $i from 1 through 12 {
        .absoulte_rounded-#{$i} {
            $size: $i * 4;
            width: $i * 8dvw;
            height: $i * 8dvw;
            top: 50%;
            max-height: 100svh;
            left: 50%;
            border: 1px * $i dashed rgb(200, 200, 200);
            transform: translateX(-50%) translateY(-50%) rotate($i * 5deg);
        }
    }
}



.content_p {
    width: 50%;
    margin: 0px auto;
    background: rgba(0, 0, 0, 0.3);
    padding: 8px 12px;
    border-radius: 12px;
    border-left: 6px solid orange;
}

.content_p strong {
    font-size: 1rem;
}

@keyframes forward {
    from {
        transform: rotate(0) translateX(-50%) translateY(-50%);
    }

    to {
        transform: rotate(360deg) translateX(-50%) translateY(-50%);
    }
}

@keyframes backward {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0);
    }
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media only screen and (max-width: 960px) and (orientation: landscape) {
    header>img {
        width: 90px;
    }

    nav {

        z-index: 1001;
        bottom: 8px;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .icon_list {
        right: 10px;
        bottom: 0px;
        gap: 16px;
        flex-direction: row;
        padding: 6px;
    }

    .list {
        display: flex;
        flex-direction: row;

    }

    .login_button {
        display: flex;
        text-decoration: none;
        padding: 0 4px;
        border: 1px solid rgb(190, 190, 190);
        transition: all 0.3s ease;
        z-index: 10;
        align-items: center;
        gap: 2px;
    }
}

@media only screen and (max-width: 768px) and (orientation: portrait) {
    .container {
        overflow: hidden;
    }

    .main_title {
        margin: 0 auto 0px;
        padding: 0px;
        text-align: center;
    }

    br {
        display: none;
    }

    .content_p {
        width: 80%;
        margin-bottom: 80px;
    }

    nav {

        z-index: 2;
        bottom: 16px;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon_list {
        right: 10px;
        bottom: 0px;
        gap: 16px;
        flex-direction: row;
        justify-content: flex-end;
        padding: 6px;
    }

    .list {
        display: flex;
        flex-direction: row;

    }

    .list-item {
        padding: 12px;
        display: block;
        filter: blur(4px);
    }

    .main_logo_dot {
        font-size: 28px;
        color: rgb(251, 158, 28);
        font-weight: 700;
    }

    .main_header {

        padding: 8px;
    }

    .main_logo {
        font-size: 24px;
        font-weight: 900;
        color: rgb(223, 223, 223);
        opacity: 0.8;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .list {
        padding: 0;
        margin: 0;
    }

    .login_button {
        text-decoration: none;
        padding: 2px 4px;
        border: 1px solid rgb(190, 190, 190);
        transition: all 0.3s ease;
        z-index: 10;
        font-size: 14px;
    }

    .list-item--active {
        list-style-type: disc;
        text-shadow: 2px 5px 12px rgb(73, 7, 215);
    }

    .icon {
        height: 16px;
        width: 16px;
    }

    img:not(.icon) {
        width: 90px;
    }

    .login_button {
        max-width: 86px;
        padding: 4px 6px;
    }
}

@media only screen and (max-width: 968px) and (orientation: landscape) {
    .main_header {
        padding: 2px 4px;
    }

    .icon {
        height: 16px;
        width: 16px;
    }

    .icon_list {
        right: 10px;
        bottom: 0px;
        gap: 16px;
        flex-direction: row;
        justify-content: flex-end;
        padding: 4px;
    }
}

@media only screen and (max-width: 320px) and (orientation: portrait) {
    section {
        min-height: 100vh;
        padding-top: 20px;
    }

    nav {
        display: none;
    }

    .icon_list {
        position: static;
    }

    .container {
        min-height: 100vh;
        max-height: fit-content;
        overflow-y: auto;
    }

    .main_header {
        padding: 4px;
    }

    a.login_button {
        font-size: 12px;
    }

    a.login_button>img {
        display: none;
    }

    .list-item {
        margin-left: 4px;
    }

    .list-item:last-child {
        margin: 0;
    }

    .icon {
        margin-left: 4px;
    }

    .icon:last-child {
        margin-left: 0;
    }
}

@media only screen and (max-height: 320px) and (orientation: landscape) {
    .container {
        min-height: 100vh;
        max-height: fit-content;
        overflow-y: auto;
    }

    section {
        min-height: 100vh;
        padding-top: 20px;
    }

    nav {
        display: none;
    }

    .main_header {
        padding: 4px;
    }

    a.login_button {
        font-size: 12px;
    }

    a.login_button>img {
        display: none;
    }
}</style>

