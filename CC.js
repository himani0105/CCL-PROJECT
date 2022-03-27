var products=[];
var cartItems=[];
var cart_n= document.getElementById('cart_n');

if (localStorage.getItem('positions')) {
    var positions= [JSON.parse(localStorage.getItem('positions'))];
} else {
    var positions=[];
}

var mobileDIV = document.getElementById('mobileDIV');
var tabletDIV = document.getElementById('tabletDIV');
var watchDIV = document.getElementById('watchDIV');
var galaxybudsDIV = document.getElementById('galaxybudDIV');
var tvDIV = document.getElementById('tvDIV');

var MOBILE =[
    {id:1, cart:false,img:'M-1.png',quantity:1,total:0,name:'Galaxy S22 Ultra', price:1442},
    {id:2, cart:false,img:'M-3.png',quantity:1,total:0,name:'Galaxy S22+', price:957},
    {id:3, cart:false,img:'m-4.png',quantity:1,total:0,name:'Galaxy S21 FE 5G', price:773},
    {id:4, cart:false,img:'M-5.png',quantity:1,total:0,name:'Galaxy A03 Core', price:104},
    {id:5, cart:false,img:'M-6.png',quantity:1,total:0,name:'Galaxy A32', price:308},
    {id:6, cart:false,img:'m-7.png',quantity:1,total:0,name:'Galaxy F42 5G', price:209},
    {id:7, cart:false,img:'m-8.png',quantity:1,total:0,name:'Galaxy M52 5G', price:354},
    {id:8, cart:false,img:'m-10.png',quantity:1,total:0,name:'Galaxy M32 5G', price:275},
    {id:9, cart:false,img:'m-11.png',quantity:1,total:0,name:'Galaxy Z Fold3 5G', price:2072},
    {id:10, cart:false,img:'m-12.png',quantity:1,total:0,name:'Galaxy Z Flip3 5G', price:1114},
    {id:11, cart:false,img:'m-13.png',quantity:1,total:0,name:'Galaxy A03s', price:144},
    {id:12, cart:false,img:'m-14.png',quantity:1,total:0,name:'Galaxy A12', price:203},
    {id:13, cart:false,img:'m-17.png',quantity:1,total:0,name:'Galaxy M21 2021', price:170},
    {id:14, cart:false,img:'m-19.png',quantity:1,total:0,name:'Galaxy A22 5G', price:275},
    {id:15, cart:false,img:'m-21.png',quantity:1,total:0,name:'Galaxy M02 ', price:170},
    {id:16, cart:false,img:'m-22.png',quantity:1,total:0,name:'Galaxy M32 ', price:222},
    {id:17, cart:false,img:'m-24.png',quantity:1,total:0,name:'Galaxy M12 ', price:150},
    {id:18, cart:false,img:'m-26.png',quantity:1,total:0,name:'Galaxy A22', price:242},
    {id:19, cart:false,img:'m-27.png',quantity:1,total:0,name:'Galaxy F12', price:163},
    {id:20, cart:false,img:'m-28.png',quantity:1,total:0,name:'Galaxy S20 FE 5G', price:524},
    {id:21, cart:false,img:'m-29.png',quantity:1,total:0,name:'Galaxy S21 5G', price:786},
    {id:22, cart:false,img:'m-30.png',quantity:1,total:0,name:'Galaxy A03 ', price:111},
    {id:23, cart:false,img:'m-31.png',quantity:1,total:0,name:'Galaxy M21', price:150},
    {id:24, cart:false,img:'m-32.png',quantity:1,total:0,name:'Galaxy F42 5G ', price:187},
    {id:25, cart:false,img:'m-34.png',quantity:1,total:0,name:'Galaxy M32 5G ', price:275},
    {id:26, cart:false,img:'m-35.png',quantity:1,total:0,name:'Galaxy A52s 5G', price:459},
    {id:27, cart:false,img:'m-37.png',quantity:1,total:0,name:'Galaxy A03s(4GB)', price:123},
    {id:28, cart:false,img:'m-39.png',quantity:1,total:0,name:'Galaxy M11 ', price:100},
    {id:29, cart:false,img:'m-41.png',quantity:1,total:0,name:'Galaxy M01 Core', price:160},
    {id:30, cart:false,img:'m-42.png',quantity:1,total:0,name:'Galaxy A52 ', price:372},
    {id:31, cart:false,img:'m-45.png',quantity:1,total:0,name:'Galaxy M30', price:234},
    {id:32, cart:false,img:'m-51.png',quantity:1,total:0,name:'Galaxy S21 Ultra 5G', price:800},
    {id:33, cart:false,img:'m-52.png',quantity:1,total:0,name:'Galaxy S20 FE', price:700},
    {id:34, cart:false,img:'m-53.png',quantity:1,total:0,name:'GalaxyNote20 Ultra', price:944},
    {id:35, cart:false,img:'m-54.png',quantity:1,total:0,name:'Galaxy Z Fold2 5G', price:983},
    {id:36, cart:false,img:'m-55.png',quantity:1,total:0,name:'Galaxy Note20', price:900},
    {id:37, cart:false,img:'m-48.png',quantity:1,total:0,name:'Galaxy F62', price:200},
    {id:38, cart:false,img:'m-50.png',quantity:1,total:0,name:'Galaxy S21+ 5G', price:856},
    {id:39, cart:false,img:'m-56.png',quantity:1,total:0,name:'Galaxy Z Flip', price:931},
    {id:40, cart:false,img:'m-57.png',quantity:1,total:0,name:'Galaxy A53 5G', price:472}
];

    var TABLET=[
        {id:41, cart:false,img:'t-1.png',quantity:1,total:0,name:'Galaxy Tab S8 (Wi-Fi)', price:773},
        {id:42, cart:false,img:'t-2.png',quantity:1,total:0,name:'Galaxy Tab S8 Ultra (Wi-Fi)', price:1429},
        {id:43, cart:false,img:'t-4.png',quantity:1,total:0,name:'Galaxy Tab S8 5G', price:931},
        {id:44, cart:false,img:'t-6.png',quantity:1,total:0,name:'Galaxy Tab S7 FE (LTE, 6GB RAM)', price:669},
        {id:45, cart:false,img:'t-7.png',quantity:1,total:0,name:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', price:524},
        {id:46, cart:false,img:'t-5.png',quantity:1,total:0,name:'Galaxy Tab S8+ 5G', price:1154},
        {id:47, cart:false,img:'t-3.png',quantity:1,total:0,name:'Galaxy Tab S8 Ultra 5G', price:1613}
    ];

    var WATCH=[
        {id:48, cart:false,img:'w-4.png',quantity:1,total:0,name:'Galaxy Watch4 Classic Bluetooth (42mm)', price:419},
        {id:49, cart:false,img:'w-1.png',quantity:1,total:0,name:'Galaxy Watch4 Classic LTE (46mm)', price:524},
        {id:50, cart:false,img:'w-2.png',quantity:1,total:0,name:'Galaxy Watch4 Classic Bluetooth (46mm)', price:459}
    ];

    

    var GalaxyBuds=[
        {id:53, cart:false,img:'g-1.png',quantity:1,total:0,name:'Galaxy Buds2', price:157},
        {id:54, cart:false,img:'g-2.png',quantity:1,total:0,name:'Galaxy Buds Pro', price:144},
        {id:55, cart:false,img:'g-3.png',quantity:1,total:0,name:'Galaxy Buds Live', price:93},
        {id:56, cart:false,img:'g-4.png',quantity:1,total:0,name:'Galaxy Buds+', price:85},
        {id:55, cart:false,img:'g-5.png',quantity:1,total:0,name:'Galaxy Buds', price:76}
    ];

    var TV=[
        {id:56, cart:false,img:'tv-1.png',quantity:1,total:0,name:'T4900 Smart HD TV', price:291},
        {id:57, cart:false,img:'tv-3.png',quantity:1,total:0,name:'QN900A Neo QLED 8K Smart TV', price:17709},
        {id:58, cart:false,img:'tv-4.png',quantity:1,total:0,name:'AU9070 Crystal 4K UHD Smart TV', price:1495}
    ];

    function HTMLmobileProduct(con) {
        let btn = `btnMobile${con}`;
        if (MOBILE[con - 1].cart) {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${MOBILE[con - 1].img}">
                 <a id="${btn}alert" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${MOBILE[con - 1].name}</span>
               <p> Price:$${MOBILE[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              `;
        } else {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${MOBILE[con - 1].img}">
                 <a  id="${btn}" onclick="cart('${MOBILE[con - 1].id}','${
            MOBILE[con - 1].cart
          }', '${MOBILE[con - 1].img}','${MOBILE[con - 1].quantity}','${MOBILE[con - 1].total}','${
            MOBILE[con - 1].name
          }','${MOBILE[con - 1].price}','${btn}'
                 )"class="btn-floating halfway-fab waves-effect waves-light red">
                 <i class="material-icons"> add_shopping_cart</i>
             
             </a>
             <a id="${btn}alert" style="display: none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                 <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${MOBILE[con - 1].name}</span>
               <p> Price:$${MOBILE[con - 1].price}.00</p>
               </div>
              </div>
              </div>
      
              `;
        }
      }
      function HTMLtabletProduct(con) {
        let btn = `btnTablet${con}`;
        if (TABLET[con - 1].cart) {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${TABLET[con - 1].img}">
                 <a id="${btn}alert" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${TABLET[con - 1].name}</span>
               <p> Price:$${TABLET[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              `;
        } else {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${TABLET[con - 1].img}">
                 <a  id="${btn}" onclick="cart('${TABLET[con - 1].id}','${
            TABLET[con - 1].cart
          }', '${TABLET[con - 1].img}','${TABLET[con - 1].quantity}','${
            TABLET[con - 1].total
          }','${TABLET[con - 1].name}','${TABLET[con - 1].price}','${btn}'
                 )"class="btn-floating halfway-fab waves-effect waves-light red">
                 <i class="material-icons"> add_shopping_cart</i>
             
             </a>
             <a id="${btn}alert" style="display: none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                 <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${TABLET[con - 1].name}</span>
               <p> Price:$${TABLET[con - 1].price}.00</p>
               </div>
              </div>
              </div>
      
              `;
        }
      }
      
      function HTMLwatchProduct(con) {
        let btn = `btnWatch${con}`;
        if (WATCH[con - 1].cart) {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${WATCH[con - 1].img}">
                 <a id="${btn}alert" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${WATCH[con - 1].name}</span>
               <p> Price:$${WATCH[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              `;
        } else {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${WATCH[con - 1].img}">
                 <a  id="${btn}" onclick="cart('${WATCH[con - 1].id}','${
            WATCH[con - 1].cart
          }', '${WATCH[con - 1].img}','${WATCH[con - 1].quantity}','${WATCH[con - 1].total}','${
            WATCH[con - 1].name
          }','${ WATCH[con - 1].price}','${btn}')"class="btn-floating halfway-fab waves-effect waves-light red">
                 <i class="material-icons"> add_shopping_cart</i>
             
             </a>
             <a id="${btn}alert" style="display: none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                 <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${WATCH[con - 1].name}</span>
               <p> Price:$${WATCH[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              
              `;
        }

    }
    
    
 

      function HTMLgalaxybudsProduct(con) {
        let btn = `btnGalaxyBuds${con}`;
        if (GalaxyBuds[con - 1].cart) {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${GalaxyBuds[con - 1].img}">
                 <a id="${btn}alert" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${GalaxyBuds[con - 1].name}</span>
               <p> Price:$${GalaxyBuds[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              `;
        } else {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${GalaxyBuds[con - 1].img}">
                 <a  id="${btn}" onclick="cart('${GalaxyBuds[con - 1].id}','${
            GalaxyBuds[con - 1].cart
          }', '${GalaxyBuds[con - 1].img}','${GalaxyBuds[con - 1].quantity}','${
            GalaxyBuds[con - 1].total
          }','${GalaxyBuds[con - 1].name}','${GalaxyBuds[con - 1].price}','${btn}'
                 )"class="btn-floating halfway-fab waves-effect waves-light red">
                 <i class="material-icons"> add_shopping_cart</i>
             
             </a>
             <a id="${btn}alert" style="display: none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                 <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${GalaxyBuds[con - 1].name}</span>
               <p> Price:$${GalaxyBuds[con - 1].price}.00</p>
               </div>
              </div>
              </div>
      
              `;
        }
      }

      function HTMLtvProduct(con) {
        let btn = `btnTv${con}`;
        if (TV[con - 1].cart) {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${TV[con - 1].img}">
                 <a id="${btn}alert" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${TV[con - 1].name}</span>
               <p> Price:$${TV[con - 1].price}.00</p>
               </div>
              </div>
              </div>
              `;
        } else {
          return `
              <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300"">
               <div class="card">
                 <div class="card-image">
                 <img src="${TV[con - 1].img}">
                 <a  id="${btn}" onclick="cart('${TV[con - 1].id}','${
            TV[con - 1].cart
          }', '${TV[con - 1].img}','${TV[con - 1].quantity}','${
            TV[con - 1].total
          }','${TV[con - 1].name}','${TV[con - 1].price}','${btn}'
                 )"class="btn-floating halfway-fab waves-effect waves-light red">
                 <i class="material-icons"> add_shopping_cart</i>
             
             </a>
             <a id="${btn}alert" style="display: none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                 <i class="material-icons">Shopping_cart</i>
                 </a>
               </div>
               <div class="card-content">
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <i style="color:orange;" class="fa fa-star"> </i>
               <span class="card-title">${TV[con - 1].name}</span>
               <p> Price:$${TV[con - 1].price}.00</p>
               </div>
              </div>
              </div>
      
              `;
        }
      }
      
   

      
   

      function animation(){
          const Toast =Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton:false,
              timer:2000
          });

          Toast.fire({
              icon: 'success',
              title:'Added to shopping cart'
          })
      }

      function alertCart() {
          const Toast=Swal.mixin({
              toast:true,
              position:'top-end',
              showConfirmButton:false,
              timer:2000
          });

          Toast.fire({
              icon:'info',
              title: 'Product already added to shopping cart'
          })
      }

      function cart(id,cart,img,quantity,total,name,price,btncart){
          var item={
              id:id,cart:true,img:img,quantity:quantity,total:total,name:name,price:price
          }
          positions.push(id);
          localStorage.setItem("positions",JSON.stringify(positions));
          cartItems.push(item);
          let storage= JSON.parse(localStorage.getItem("cart"));
          if(storage==null){
              products.push(item);
              localStorage.setItem("cart",JSON.stringify(products));
          } else{
              products= JSON.parse(localStorage.getItem("cart"));
              products.push(item);
              localStorage.setItem("cart",JSON.stringify(products));
          }
          products=JSON.parse(localStorage.getItem("cart"));
          cart_n.innerHTML=`[${products.length}]`;
          document.getElementById(btncart).style.display="none";
          document.getElementById(btncart+'alert').style.display="block";
          animation();
      }

      $('.carousel.carousel-slider').carousel({
          fullWidth:true,
          indicators:true
      });
      $(document).ready(function(){
          $('.modal').modal();
      });

      function render(){
        new WOW().init();
        if (localStorage.getItem('positions')){
            var localProductsCart=JSON.parse(localStorage.getItem('positions'));
        }else{
            var localProductsCart=[];
            localStorage.setItem('positions',JSON.stringify(localProductsCart));
            var localProductsCart=JSON.parse(localStorage.getItem('positions'));
        }

          for(let index=0; index < localProductsCart.length;index++){
              for(let index2=0;index2<MOBILE.length;index2++){
                  if(localProductsCart[index]==MOBILE[index2].id){
                      MOBILE[index2].cart=true;
                  }else{

                  }
              }

              for(let index2=0;index2<TABLET.length;index2++){
                  if(localProductsCart[index]==TABLET[index2].id){
                      TABLET[index2].cart=true;
                  }else{
          }
    }
    for(let index2=0;index2<WATCH.length;index2++){
      if(localProductsCart[index]==WATCH[index2].id){
          WATCH[index2].cart=true;
      }else{
      }
  }
  
  
  for(let index2=0;index2<GalaxyBuds.length;index2++){
      if(localProductsCart[index]==GalaxyBuds[index2].id){
          GalaxyBuds[index2].cart=true;
      }else{
      }
  }
  for(let index2=0;index2<TV.length;index2++){
      if(localProductsCart[index]==TV[index2].id){
          TV[index2].cart=true;
      }else{

      }
  }
      }

      for(let index=1;index<=40;index++){
          mobileDIV.innerHTML+=`${HTMLmobileProduct(index)}`;
      }
      for(let index=1;index<=7;index++){
          tabletDIV.innerHTML+=`${HTMLtabletProduct(index)}`;}
      for(let index=1;index<=3;index++){
          watchDIV.innerHTML+=`${HTMLwatchProduct(index)}`;}
      for(let index=1;index<=5;index++){
          galaxybudsDIV.innerHTML+=`${HTMLgalaxybudsProduct(index)}`;}
      for(let index=1;index<=3;index++){
          tvDIV.innerHTML+=`${HTMLtvProduct(index)}`;}
      
      if(localStorage.getItem("cart")==null){

      }else{
          products=JSON.parse(localStorage.getItem("cart"));
          cart_n.innerHTML=`[${products.length}]`;
      }
          
}
