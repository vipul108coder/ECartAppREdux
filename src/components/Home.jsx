import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7f3908853ddb4b359994e1c1903fdce7_189fd198f71_Anthem-5-Img-1.jpg.jpeg?q=90";

const img3 = "https://img1.etsystatic.com/016/1/7429521/il_570xN.429042831_k2ow.jpg";

const img4 = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150";
const Home = () => {



  const productList = [{name:"Mac Book", price:2200, imgSrc:img1, id:"jihejedbjdejhdeh"},


{
  name:"ANTHEM 5", price:30, imgSrc:img2, id:"nnrenk"
},

{
  name:"Jacket", price:40, imgSrc:img3, id:"nnnk"
},

{
  name:"Apple Iphone", price:999, imgSrc:img4, id:"njbdcjb"
},

// {

// },

// {

// },
]

const dispatch = useDispatch()


const addToCartHandler = (options)=>{
  // console.log(options);
  dispatch({type:"addToCart", payload:options})
  toast.success("Added To Cart")
  dispatch({
    type:"calculatePrice",
  })
}

  return (
    <div className='home'>
      

      {
        productList.map((i)=>(
          <ProductCard 
             key={i.id}
             imgSrc={i.imgSrc}
             name={i.name}
             price={i.price}
             id={i.id}
             handler={addToCartHandler}
          />
        ))
      }

    </div>
  )
}


const ProductCard = ({name, id, price, handler, imgSrc})=>(
  <div className='productCard'>
   <img   src={imgSrc} alt="" />
   <p>{name}</p>
   <h1>${price}</h1>
   <button onClick={()=>handler({name, price,id, quantity: 1, imgSrc})}>Add to cart</button>
  </div>
)

export default Home