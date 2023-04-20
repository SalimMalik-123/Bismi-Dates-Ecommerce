// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

let Products =[
    {
        id:1,name:'Ajwa' ,grp:'Dates',price:899,measure:'KG',Image:'./images/product/prod2.png'
    },
    {
        id:2,name:'Kalima' ,grp:'Dates',price:599,measure:'KG',Image:'./images/product/prod30.png'
    },
    {
        id:3,name:'Fard' ,grp:'Dates',price:299,measure:'KG',Image:'./images/product/prod4.png'
    },
    {
        id:4,name:'Mabroom' ,grp:'Dates',price:399,measure:'KG',Image:'./images/product/prod48.png'
    },
    {
        id:5,name:'Badam' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod28.png'
    },
    {
        id:6,name:'Cashew Nuts' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod29.png'
    },
    {
        id:7,name:'Walnut' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod8.png'
    },
    {
        id:8,name:'Fig' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod45.png'
    },
    {
        id:9,name:'Apricot' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod44.png'
    },
    {
        id:10,name:'RoseBerry' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod26.png'
    },
    {
        id:11,name:'Pomogranate' ,grp:'DryFruits',price:899,measure:'KG',Image:'./images/product/prod27.png'
    },
    {
        id:12,name:'Dairy Milk' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod14.png'
    },
    {
        id:13,name:'Waffy Roll' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod12.png'
    },
    
    {
        id:14,name:'Qwality Street' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod5.png'
    },
    
       {
        id:15,name:'Waffy Wafer' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod19.png'
    },
    
    {
        id:16,name:'Almond Chocolate' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod43.png'
    },
    {
        id:17,name:'Bounty' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod46.png'
    },
    {
        id:18,name:'Nutella' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod50.png'
    },
    {
        id:19,name:'Kinder Bueno' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod38.png'
    },
     {
        id:20,name:'Pringles' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod23.png'
    },
     {
        id:21,name:'Ferrero Rocher' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod31.png'
    },
    {
        id:22,name:'Homemade Choco' ,grp:'Chocolate',price:899,measure:'KG',Image:'./images/product/prod3.png'
    },
    {
        id:23,name:'Coconut Oil' ,grp:'Oil',price:899,measure:'KG',Image:'./images/product/prod37.png'
    },
    {
        id:24,name:'Gingee Oil' ,grp:'Oil',price:899,measure:'KG',Image:'./images/product/prod39.png'
    },
    {
        id:25,name:'Olive Oil' ,grp:'Oil',price:899,measure:'KG',Image:'./images/product/prod40.png'
    },
    {
        id:26,name:'Honey' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod6.png'
    },
    {
        id:27,name:'Raw Honey' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod36.png'
    },
    {
        id:28,name:'Peanut Jam' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod42.png'
    },
    {
        id:29,name:'Dates Jam' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod33.png'
    },
    {
        id:30,name:'Milo' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod47.png'
    },
    {
        id:31,name:'Ovaltime' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod49.png'
    },
    {
        id:32,name:'Nescafe Coffee' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod34.png'
    },
    {
        id:33,name:'Rani Sandal Soap' ,grp:'Others',price:899,measure:'KG',Image:'./images/product/prod32.png'
    },
    {
        id:34,name:'Maggie Coconut ' ,grp:'Others',price:99,measure:'PCS',Image:'./images/product/prod51.png'
    },
    {
        id:35,name:'Maggie Kari' ,grp:'Others',price:19,measure:'PCS',Image:'./images/product/prod52.png'
    },
    



    


]
let storage=window.localStorage


let clickAdd = false;
let PervCartData =JSON.parse(storage.getItem('links'));
let cartList =PervCartData === null?[]:PervCartData;
console.log('cartList',cartList);
 
const ShowAllProd = () =>{
    // cartList =JSON.parse(storage.getItem('links'));
// PervCartData = JSON.parse(storage.getItem('links'));
// let qtyAddData =[]
// let cartItemLen =0
if(!clickAdd && cartList.length>0 ){
    cartList.forEach((data)=>{
        Products =Products.map((prod)=>{
            if(data.id ==prod.id ){
                // cartItemLen +=1
                return {...prod,qty:1,totalAmt:prod.price}

            }
            return prod
        })
        
    })

}

    // console.log('qtyAddData',qtyAddData);
    console.log('Porudect',Products);
    let prods=''
    Products.forEach((prod,index)=>{
        prods +=`<div class=" col-6 col-sm-6 col-md-4 col-xl-3 pad all ${prod.grp}"  >
        <div class="box boxs">
          <div>
            <div class="img-box">
              <img src=${prod.Image} alt="img">
            </div>
            <div class="detail-box d-flex align-items-center justify-content-center text-center">
            <div>
              <h5 class="sm-h5">
                ${prod.name}
              </h5>
              
              
                <h6 class="sm-h6">
                  ${prod.price}/${prod.measure}
                </h6> 
                <button class="btn ${prod.qty ? 'btn-success':'btn-info'} sm-h5 rounded-pill px-4" onClick='AddCart(${JSON.stringify(prod)})'>${prod.qty ?'Added':'Add Cart'} <i class="fa fa-cart-plus ms-2" aria-hidden="true"></i></button>              
              </div>
            </div>
          </div>
        </div>
      </div>`
     
    })
   
    document.getElementById('showProd').innerHTML=prods
    console.log('cartList',cartList);
    clickAdd = false
   if(cartList.length >0){
    document.getElementById('additems').innerHTML=cartList.length
    }
    // console.log(cartList.length);
    // document.getElementsByClassName('showProd').innerHTML=prods
    // storage.removeItem("links");
}

function AddCart (data){
    debugger
    // cartList=PervCartData
    let existCart =false;
    clickAdd = true
    if (cartList!==null &&cartList.length>0) {

        cartList.forEach((cartl)=>{
            if (data.id ==cartl.id) {
                existCart= true            
            }
        })
        if(!existCart){
            // console.log('condition',cartl.id);
                cartList.push({...data,qty:1,totalAmt:data.price})
                // console.log('data worked',cartList);
               const ItemIndex = Products.findIndex((prod)=>data.id==prod.id);
               Products[ItemIndex]={...data,qty:1,totalAmt:data.price}
               console.log(Products);
               storage.setItem("links", JSON.stringify(cartList));
               ShowAllProd()
        }
    }
    else{
            cartList.push({...data,qty:1,totalAmt:data.price})
            // console.log('data worked',cartList);
           const ItemIndex = Products.findIndex((prod)=>data.id==prod.id);
           Products[ItemIndex]={...data,qty:1,totalAmt:data.price}
           console.log('cartList',cartList);
           storage.setItem("links", JSON.stringify(cartList));
           ShowAllProd()
           
            
      
    }
    
   

console.log('localstr');
}

ShowAllProd()
// export default cartList;

// module.export =cartList;
