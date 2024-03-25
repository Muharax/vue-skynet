<script setup>

</script>

<template>

<nav class="mobile-menu">
<label for="show-menu" class="show-menu">
<img src="./img/favicon.png" class="S-Skynet">
</label>

<input type="checkbox" id="show-menu">

<ul id="menu">
<li><div class="social-media-in">
            <a href="https://twitter.com/n_buchaj" target="_blank">
                <img src="./img/twitter3.png" class="socialmedia-hover" title="Twitter">
            </a>
    </div></li>
<li>

<div class="social-media-in">
        <a href="mailto:adriangajda88@gmail.com">
            <img src="./img/email3.png" class="socialmedia-hover" title="E-mail">
        </a>
    </div>	

</li>
<li>	

<div class="social-media-in">
        <a href="https://github.com/Muharax" target="_blank">
            <img src="./img/github2.png" class="socialmedia-hover" title="Github">
        </a>
</div>	

</li>
<li>

<div class="social-media-in">
        <a href="https://www.pexels.com/pl-pl/@aleksander-depre-296478516/" target="_blank">
            <img src="./img/pixel.png" class="socialmedia-hover" title="Pixels">
        </a>
    </div>
    
</li>
<li>

<div class="social-media-in">
        <a href="https://sprzedajemy.pl/oferty-uzytkownika-8743210" target="_blank">
            <img src="./img/sell.png" class="socialmedia-hover"  title="Sprzedajemy.pl">
        </a>
    
    
</div></li>
</ul>
</nav>


</template>


<style scoped>

.mobile-menu {
	display:block;
	line-height: 1.6em;
	font-weight: 400;
	text-align:center;
	position: relative;
	margin:0 auto;
}
.mobile-menu ul {
	list-style-type: none;
    margin: 0 auto;
    padding-left: 0;
    text-align: center;
    position: absolute;
    background: #000000;
}

/*Create a horizontal list with spacing*/
.mobile-menu li {
	display:inline-block;
	/*float: left;
	margin-right: 1px;*/
}

/*Style for menu links*/
.mobile-menu li a {
	display:block;
	min-width:81px;
	text-align: center;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #fff;
	text-transform:uppercase;
	text-decoration: none;
	margin-left:0px;
	padding: 10px 0;  
	-webkit-transition: all 0.4s ease 0s;
	-moz-transition: all 0.4s ease 0s;
	-ms-transition: all 0.4s ease 0s;
	-o-transition: all 0.4s ease 0s;
	transition: all 0.4s ease 0s;
}

/*Hover state for top level links*/
.mobile-menu li:hover a {
	color: #4db3ff;
  background-color:#ccddee;
}

/*Style for dropdown links*/
.mobile-menu li:hover ul a {
	background: #f3f3f3;
	color: #2f3036;
	height: 40px;
	line-height: 40px;
}

/*Hover state for dropdown links*/
.mobile-menu li:hover .mobile-menu ul a:hover {
	color: #4db3ff;
}

/*Hide dropdown links until they are needed*/
.mobile-menu li ul {
	display: none;
}

/*Make dropdown links vertical*/
.mobile-menu li ul li {
	display: block;
	float: none;
}

/*Prevent text wrapping*/
.mobile-menu li ul li a {
	width: auto;
	min-width: 100px;
	padding: 0 20px;
}


/*Style 'show menu' label button and hide it by default*/
.mobile-menu .show-menu {
	text-decoration: none;
	color: #fff;
	/* background: #8aa8bd; */
	text-align: center;
	padding: 10px 15px;
	display: none;
  cursor: pointer;
  text-transform: uppercase;
}

.mobile-menu .show-menu span{
   padding-left: 25px;
}

/*Hide checkbox*/
.mobile-menu input[type=checkbox]{
    display: none;
}

/*Show menu when invisible checkbox is checked*/
.mobile-menu input[type=checkbox]:checked ~ #menu{
    display: block;
	border-radius: 0px 0px 10px 10px;
	box-shadow: 0 0 2px 1px #0e9dc0;
	z-index: 2;
}

  .mobile-menu .lines {
    border-bottom: 15px double #f8f8f8; 
    border-top: 5px solid #f8f8f8; 
    content:"";
    height: 5px; 
    width:20px;
    padding-right:15px;
  float: right;
}
	/*Make dropdown links appear inline*/
	.mobile-menu ul {
		position: absolute;
		display: none;
	}
	/*Create vertical spacing*/
	.mobile-menu li {
		margin-bottom: 1px;
	}
	/*Make all menu links full width*/
	.mobile-menu ul li, .mobile-menu li a {
		width: auto;
	}
	/*Display 'show menu' link*/
	.mobile-menu .show-menu {
		display:block;
	}

</style>