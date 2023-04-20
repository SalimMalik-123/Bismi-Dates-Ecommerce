
// storage.cartdata = JSON.stringify(cartdata);
// let storedNames = JSON.parse(storage.cartdata);
// let cart = JSON.parse(storage.getItem('cartdata'))
let storage=window.localStorage
const CartData = JSON.parse(storage.getItem('links'));
let cartLists =CartData
let carts=''
const less ='less';
const add ='add';
let cartTotal =0 
const ShowCart =() =>{
  cartTotal =0
  cartLists.forEach((data) =>{
        carts +=` <tr>
        <td class="shoping__cart__item">
            <img  src="${data.Image}"  width="150px" height="140px" alt="">
            <h5>${data.name}</h5>
        </td>
        <td class="shoping__cart__price">
        ₹${data.price}/${data.measure}
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity px-4">
                <div class="pro-qty d-flex ">
                  <button class="btn btn-danger rounded-pill " onClick='Accumulate(${less},${data.id})'>
                    <i class="fa fa-minus-circle fa-lg " aria-hidden="true"></i>
                  </button>
                  
                    <input type="text" value="${data.qty}">
                    <button class="btn btn-success rounded-pill " onClick='Accumulate(${add},${data.id})'>
                      <i class="fa fa-plus-circle fa-lg " aria-hidden="true"></i>
                    </button>
                    
                </div>
            </div>
        </td>
        <td class="shoping__cart__total">
        ₹${data.totalAmt}
        </td>
        <td class="shoping__cart__item__close">
        <button onClick='DeleteHandler(${data.id})' class="btn btn-danger  ">
        <i class="fa fa-times fa-lg " aria-hidden="true"></i>
        </button>
        </td>
    </tr>`
    cartTotal +=data.totalAmt
    })

    document.getElementById('showcart').innerHTML=carts
    document.getElementById('cartTotal').innerHTML=`<li>Total <span>₹ ${cartTotal}</span></li>`
    console.log('CartList From ',cartLists)
}
ShowCart()
 const Accumulate =(type,id) =>{

    if(type ==='add'){
      cartLists.forEach((prod)=>{
        if(id == prod.id){
          prod.qty += 1;
          prod.totalAmt = prod.price * prod.qty
        }
      })
      console.log('Qty Added cart List ',cartLists);
      carts=''
      ShowCart()
    }
    else {
        cartLists.forEach((prod)=>{
          // debugger
        if(id == prod.id ){
          if( prod.qty>1){
            prod.qty -= 1;
            prod.totalAmt = prod.price * prod.qty
            console.log('Less  ',prod);
         
          }

          else{          
            window.alert('Minimum Qty is 1')
            
            }

        }
        carts=''
        ShowCart()
        console.log(' ShowCart()');
      })
    }
   
 }
 const DeleteHandler = (id) =>{
  const BalCart = cartLists.filter((data)=> data.id!==id)
  console.log('BalCart6 :',BalCart);
  cartLists=BalCart
  storage.setItem("links", JSON.stringify(cartLists));
  carts=''
  ShowCart()
 }
