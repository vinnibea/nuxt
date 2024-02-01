<template>
  <div class="content why_content">

    <h1 class="main_title main_title-extra"><strong>Why Us?</strong></h1>
    <h2 class="main_sub_title">LinkGX stands out due to a series of unique characteristics and beneficial features:</h2>
    <ul class="why_list">
      <div class="why_list_item">
        <h3>Instant Indexing.</h3>
        <li>Thanks to its innovative approach to link indexing, your content will be indexed almost instantly.</li>
      </div>
      <div class="why_list_item">
        <h3>Effective Results.</h3>
        <li>Increase your search visibility and achieve high
        positions in Google search results.</li></div>
      
      <div class="why_list_item">
        <h3>Simplicity and convenience.</h3>
        <li> With LinkGX you don't need to be an SEO
        expert, as our service is intuitive and accessible to everyone.</li></div>
      
      <div class="why_list_item">
        <h3>Security and Privacy. </h3>
        <li> We value the security of our clients' sites
          and ensure complete confidentiality of data.</li>
      </div>

    </ul>
  </div>
</template>

<style>
.main_sub_title,
.main_title-extra {
  
  text-align: center;
  margin: 0px auto 0px;
  padding: 0;
}
h3, 
strong {
  font-weight: 900;
  padding-bottom: 20px;
}
.why_content {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 20px;
}

.why_list {
  list-style-type: disc;
  list-style-position: inside;
  display: flex;
  padding: 0;
  width: 90vw;
  gap: 10px;
  margin: 80px auto;
}


.why_list_item {
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: 12px;
  padding: 20px 12px 40px;
  border-left: 6px solid orange;
  width: 100%;
}

.additional_strong {
  display: block;
  font-size: 16px;
  clear: right;
}

@media  screen and (max-width: 768px) {
  .why_list {
    flex-direction: column;
    margin: 4px -20px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 90vw;
  }

  .why_list_item {
    padding: 0px 12px 8px;
    font-size: 14px;
    width: 100%;
  }

  .main_sub_title,
.main_title-extra {
  font-size: 16px;
  text-align: center;
  margin: 4px auto;
}


h3, 
strong {
  font-weight: 700;
  padding-bottom: 4px;
}
  
}
</style>
