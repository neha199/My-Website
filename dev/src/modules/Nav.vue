<template>
    <div id="app">
        <header id="masthead" class="header" role="banner">
            <a class="menu-toggle toggle-link"></a>
            <div>
                <img class="avatar-wrap" src="./image.png" alt="Neha R Jain">
            </div>
            <h1 class="site-title mobile-title">Neha R Jain</h1>
            <nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">
                <div class="nav-menu">
                    <ul>
                        <li class="">
                            <router-link to="/home"><i class="pe-7s-home"></i>Home
                            </router-link>
                        </li>
                        <li class="">
                            <router-link to="/about"><i class="pe-7s-home"></i>About
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
    export default {
    }
</script>

<style>

    .avatar-wrap {
        width: 100px;
        height: 120px;
    }
    .nav-menu{
        font-family: Montserrat,serif;
    }
    .nav-menu ul li {
        font-size: 15px;
        letter-spacing: .07em;
        border-bottom: 1px solid rgba(225,246,255,.07);
        text-transform: uppercase;
        color: rgba(225,246,255,.3);
        padding: 10px;
    }

    .nav-menu ul {
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        overflow: auto;
    }
    .header {
        height: 100%;
        width: 100px;
        color: rgba(225,246,255,.3);
        background: #1c262b;
        min-height: 100%;
        position: fixed;
        z-index: 10;
    }
    .site-title {
        position: static;
        width: auto;
        text-align: center;
        padding: .8em;
        background: #0c85d6;;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
    }

</style>
