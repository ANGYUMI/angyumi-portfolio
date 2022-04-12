 <template>
   <div class="nav-wrap">
     <div class="nav-box"></div>
     <div class="nav-blur"></div>
     <div class="nav">
       <span class="nav__logo">
         <NuxtLink class="nav__logo-content" to="/">{{title}}</NuxtLink>
       </span>
       <span class="nav__list">
         <NuxtLink class="nav__list-content" to="/">{{menu[0]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/about">{{menu[1]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/mindmap">{{menu[2]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/project">{{menu[3]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/support">{{menu[4]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/">{{sns[0]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/">{{sns[1]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/">{{sns[2]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/">{{sns[3]}}</NuxtLink>
         <NuxtLink class="nav__list-content" to="/">{{sns[4]}}</NuxtLink>
       </span>
     </div>

     <div class="footer">
       <span class="footer__left">
         COPYRIGHT ⓒ ANGYUMI. ALL RIGHTS RESERVED.<br>
         angyumi.dev@gmail.com.
       </span>
     </div>
   </div>
 </template>

 <script>
   export default {
     data() {
       return {
         title: "ANGYUMI",
         menu: ["Home", "About", "MindMap", "Project", "Shop", "Support"],
         sns: ["Twitter", "Insta", "Discord", "OpenSea"],
       }
     }
   }

 </script>

 <style lang="less" scoped>
   @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
   @NotoSans: 'Noto Sans KR', sans-serif;
   @nav-height: 80px;
   @nav-box: 70px;
   @foot-height: 20px;
   @font-gray: #666;


   .nav-wrap {
     .nav-box {
       width: 100%;
       height: @nav-box;
       z-index: 999;
     }

     .nav-blur {
       position: fixed;
       top: 0;
       left: 0;
       height: @nav-height;
       width: 100%;
       background-color: rgba(225, 225, 225, 0.05);
       -webkit-backdrop-filter: blur(8px);
       backdrop-filter: blur(8px);
       z-index: 888;
     }

     .nav {
       position: fixed;
       top: 0;
       left: 0;
       height: @nav-height;
       width: 100%;
       z-index: 999;

       &__logo {
         font-size: 24px;
         font-family: @NotoSans;
         line-height: @nav-height;

         &-content {
           margin-left: 40px;
           float: left;
           color: @font-gray;
           text-decoration: none;

         }
       }

       &__list {
         font-size: 16px;
         font-family: @NotoSans;
         float: right;
         margin-right: 20px;

         &-content {
           color: @font-gray;
           text-align: center;
           line-height: @nav-height;
           margin: 0px 20px;
           text-decoration: none;
         }

         &-content:hover {
           color: #ccc;
         }
       }
     }

     .footer {
       position: absolute;
       width: 100%;
       left: 0;
       bottom: 0;
       font-family: @NotoSans;
       font-size: 12px;
       color: @font-gray;
       padding-top: @foot-height;
       padding-bottom: @foot-height;

       &__left {
         position: relative;
         display: block;
         line-height: 1.5;
         margin-left: @foot-height;
       }

     }
   }

 </style>
