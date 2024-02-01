<script setup>
import { onMounted, ref } from 'vue';

const currentQ = ref(0);
const openQ = (i) => {
  if(currentQ.value === i) {
    currentQ.value = 0; return;
  }
  currentQ.value = i;
}

const answers = {
  1: {
    a: 'LinkGX is an ideal and priceless Link Crawling and Indexing best for the expert or to the starter website admins. Any individual who possesses or deals with a site can exploit our Unique services to get his pages or backlinks indexed. With the capacity to drive Search Engine bots and spiders to crawl and index your backlinks, LinkGX is an exceptional incentive for anybody hoping to work on their website ranking. Links Indexer is a great addition to SEO and LinkBuilding companies or individuals who can provide it as extra bonus to their clients!'
  },
  2: {
    a: 'We allow all legal sites and non blacklisted websites. Our system will automatically delete blacklisted websites from campaigns.'
  },
  3: {
    a: 'Our service works fine on any kind of websites, pages and backlinks. As long as it is a published page online, it will work. Also make sure the sites meta tag is set to indexing and do not block bots and crawlers. If You want Google to find your links just submit them to Us!'
  },
  4: {
    a: 'Cryptocurrency is our primary payment processor. You can purchase LinkGX limits using your cryptocurrency balance, or pay directly with your credit card - Visa, Mastercard, American Express, Discover, E-check. If you are unable to pay by any of the above methods, or you just want to pay in a different way, just contact us and let us know how you want to pay!'
  }
}

const q = ['Who can use this indexing service?', 'What sites do you allow in your service?', 'What type of sites this service is good for?', 'What type of payment do you accept?'];

onMounted(() => {
  
})
</script>

<template>
  <div class="content why_content" >
    
    <h1 class="main_title main_title-extra"><strong>FAQ</strong></h1>
  

      <TransitionGroup name="list" tag="ul" class="why_list why_list-faq">
        <div class="why_list_item" v-for="(question, i) in  q" :key="i" @click.stop="openQ(i + 1)" >

          <h3>Q{{i + 1}}: {{ question}} </h3>
          <li v-if="currentQ === i + 1">{{answers[i + 1 + ''].a}}</li>
          
        </div>
        
      </TransitionGroup>
      
      
    

  </div>
</template>

<style scoped>


h3 {
  padding: 4px;
  cursor: pointer;
  color: rgb(229, 229, 229);
  transition: all 0.3s ease;
}

h3:hover {
  color: white;
}
.main_title {
  margin: 0;
  padding: 0;
}

.question_list {
  margin: 0;
  padding: 0;
  list-style-type: circle;
  list-style-position: inside;
  transform: rotate(-90deg);
  align-self: center;
  color: red;
}
.why_list, .why_list-faq {
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin: 0 auto; 
  min-width: 80vw;
}

.why_list_item {
  min-width: 100%;
  border-left: 6px solid orange;
  z-index: 3;
  padding: 8px 8px;
}


@media screen and (max-width: 768px) {
  h3 {
    font-size: 14px;
  }

  .why_list-faq {
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    margin: 0px -20px; 
  }

  .why_list_item {
    min-width: 100%;
    border-left: 6px solid orange;
    z-index: 3;
    padding: 2px 16px;
    font-size: 14px;
  }
}
</style>
