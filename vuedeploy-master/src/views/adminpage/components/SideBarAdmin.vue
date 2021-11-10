<template>
<nav class="bg-light sidebar border-right">
    
<div class="sidebar-sticky">
    <ul class="nav flex-column " style="list-style:none;font-size:.875rem;font-weight:500">
        <li class="nav-item">
            <router-link :to="{name:'revenue'}" class="nav-link active text-dark">
                Revenue
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'book'}" class="nav-link text-dark">
                Book
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'category'}" class="nav-link text-dark">
                Category
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'author'}" class="nav-link text-dark">
                Author
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'nxb'}" class="nav-link text-dark">
                NXB
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'user-manager'}" class="nav-link text-dark">
                Customer
            </router-link>
        </li>
        
    </ul>
</div>

</nav>
</template>

<script>
export default {};
</script>

<style>
   .sidebar{
       position: fixed;
       top:0;
       bottom:0;
       left: 0;
       z-index: 100;
       padding:48px 0 0;
       box-shadow: -1px 0 0 rgba(0, 0, 0,10%);
   }
   .sidebar-sticky{
       position: sticky;
   }
</style>
