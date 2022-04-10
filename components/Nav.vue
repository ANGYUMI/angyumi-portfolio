 <template>
   <div class="nav-wrap">
     <div class="nav">
       <span class="nav__logo">
         <NuxtLink class="nav__logo-content" to="/">{{title}}</NuxtLink>
       </span>
       <span class="nav__list">
         <NuxtLink class="nav__list-content" to="/about">About</NuxtLink>
         <NuxtLink class="nav__list-content" to="/mindmap">MindMap</NuxtLink>
         <NuxtLink class="nav__list-content" to="/project">Project</NuxtLink>
         <NuxtLink class="nav__list-content" to="/support">Support</NuxtLink>
       </span>
     </div>

     <div class="footer">
       COPYRIGHT ⓒ ANGYUMI. ALL RIGHTS RESERVED.
     </div>
   </div>
 </template>

 <script>
   export default {
     data() {
       return {
         title: "ANGYUMI",
       }
     }

   }

 </script>

 <style lang="less" scoped>
   @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
   @NotoSans: 'Noto Sans KR', sans-serif;
   @nav-height: 80px;
   @foot-height: 20px;

   .nav-wrap {

     .nav {
       position: fixed;
       top: 0;
       left: 0;
       height: @nav-height;
       width: 100%;


       &__logo {
         font-size: 35px;
         font-family: @NotoSans;
         line-height: @nav-height;

         &-content {
           margin-left: 40px;

           float: left;
           color: black;
           text-decoration: none;

         }
       }

       &__list {
         font-size: 18px;
         font-family: @NotoSans;
         float: right;
         margin-right: 20px;

         &-content {
           color: black;
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
       position: fixed;
       left: 0;
       bottom: 0;
       width: 100%;
       font-family: @NotoSans;
       font-size: 16px;
       color: black;
       text-align: center;
       padding: @foot-height;

     }
   }

 </style>
