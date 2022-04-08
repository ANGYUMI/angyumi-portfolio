 <template>
   <div>
     <div class="nav">
       <NuxtLink to="/">Home</NuxtLink>
       <NuxtLink to="/about">About</NuxtLink>
       <NuxtLink to="/mindmap">MindMap</NuxtLink>
       <NuxtLink to="/project">Project</NuxtLink>
     </div>
   </div>
 </template>

 <script>
   export default {
     data() {
       return {

       }
     }

   }

 </script>

 <style lang="less" scoped>
   .nav {
     font-size: 18px;
     color: black;

     a {
       color: black;

       text-decoration: none;
     }
   }

 </style>
