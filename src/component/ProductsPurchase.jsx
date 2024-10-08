import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Hoc from './Hoc';
import FAQaccordion from './FAQaccordion';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { imagedataActionon } from '../redux/actions/imagedataAction';
import Productall from './Productall';
import { wishlist } from '../redux/actions/wishlistAction';
import { addCartData } from '../redux/actions/addCartAction';
import Swal from 'sweetalert2';
import { LinkAction, SimilarproductAction } from '../redux/actions/LInkAction';
import { data } from 'jquery';


function ProductsPurchase() {
  const state = useSelector(state => state)

  const image = state.imagedata.imagedata.data;

  const [colorid, setcolorid] = useState('')
  const navigate = useNavigate()

  const params = useParams();  
  const [currentImage, setCurrentImage] = useState();
  const cart = state.allcategory.allcategory.data;
  const cartdata = cart?.filter(x => x.id === params.id) || ' ';
  

  const dataa = cartdata?.at(0);




// similar product
useEffect(() => {
  const dataa = cartdata?.at(0);
  const proidd = `subcategory_name=${dataa.subcategory_name}&category_name=${dataa.category_name}` 
  dispatch(SimilarproductAction(proidd))
  dispatch(imagedataActionon(`colour_id=${params.colorId}&product_id=${params.id}`));

}, [dataa])

const similardata =  state.linkdata.similar.data;
similardata?.sort(() => Math.random() - 0.5);
const random4Data = similardata?.slice(0, 4);

// size
const [selectedSize, setSelectedSize] = useState(null);
  const [productPrice, setProductPrice] = useState(dataa?.select_size?.at(0).product_price);

  const dispatch = useDispatch();

  if (image && image.length > 0) {
    let imageid = image[0].id;
    
  }

  useEffect(() => {
 
    if (params) {
      dispatch(imagedataActionon(`colour_id=${params.colorId}&product_id=${params.id}`));
    }
  }, []);


  const filterImagesByColour = (colourName) => {
    const filteredImages = dataa?.colour_name?.filter(item => item?.colour_name === colourName);
    const filteredColourIds = filteredImages?.map(item => item.colour_id);
    return filteredColourIds.join(',');
  };
  const initialColorId = dataa?.colour_name?.length > 0 ? dataa?.colour_name[0].colour_id : '';
  const [coid, setcoid] = useState(initialColorId);


// add to cart


const addtocart = ()=>{

  if(!localStorage.getItem("token")){
    navigate('/login')
}else{
  const obj = {
    product_id: params.id,
    size_id: combinedSizes,
    colour_id: coid,
    user_id: state.user.users.id,
    quantity: 1,
    status: true
};
dispatch(addCartData(obj,state.user.users.id))

navigate("/cartadd")
}

}


// wishlist
const addwishlist = ()=>{
  if(!localStorage.getItem("token")){
    navigate('/login')
}else{

  const obj = {
          product_id: params.id,
          colour_id: coid,
          user_id: state.user.users.id,
          status: true
      };
      dispatch(wishlist(obj,state.user.users.id))
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Added to wishlist successfully"
      });
}
}

 
  const changeImgOnColor  = (target) => {

    const newColorId = filterImagesByColour(target);
    setcolorid(newColorId);
    setcoid(newColorId)
   
    const proid = `colour_id=${newColorId}&product_id=${params.id}` 
    dispatch(imagedataActionon(proid))
 

   dataa.colour_name.map((x)=>{
     if (x.colour_name === target){
       x.image.map((img)=>{
      
         setCurrentImage(img)
       

       })
     }
     
   })

  };

  
  const [selectedTopSize, setSelectedTopSize] = useState();
  const [combinedSizes, setCombinedSizes] = useState([]);
  const [selectedBottomSize, setSelectedBottomSize] = useState();

  const [groupedSizes, setGroupedSizes] = useState({ top: [], bottom: [] });


  useEffect(() => {
    if (dataa?.select_size && Array.isArray(dataa.select_size)) {
      const grouped = dataa.select_size.reduce((acc, size) => {
        if (!acc[size.select_size]) {
          acc[size.select_size] = [];
        }
        acc[size.select_size].push(size);
        return acc;
      }, { top: [], bottom: [] });

      setGroupedSizes(grouped);

      // Set initial selected sizes and prices
      if (grouped.top.length > 0) {
       
        setSelectedTopSize(grouped.top[0].id);
   
      }
      if (grouped.bottom.length > 0) {
        setSelectedBottomSize(grouped.bottom[0].id);
      
      }
    }
  }, [dataa.select_size]);

  useEffect(() => {
    setCombinedSizes([selectedTopSize, selectedBottomSize].filter(size => size !== null && size !== undefined));
  }, [selectedTopSize, selectedBottomSize]);

  const handleSizeClick = (size, category) => {
   
    setProductPrice(size.product_price);
    if (category === 'top') {
      setSelectedTopSize(size.id);
    } else if (category === 'bottom') {
      setSelectedBottomSize(size.id);
    }
  };
  

  return (
  <>
    <div className="row main_divclass m-0 ">
    <div className="col-lg-2 d-lg-block d-none">
      <div id="list-example" className="list-group position-sticky top-0 text-center">
      {
  image?.map((color, i) => (
    color.image?.map((imageSrc, j) => (
     
      <a key={`image-${i}-${j}`} className="list-group-item list-group-item-action" href={`#list-item-${j}`}>
        <img src={`${process.env.REACT_APP_IMAGE_URL}${imageSrc}`} className="img-fluid w-100 m-auto" alt="..." />
      </a>
    ))
  ))
}
       
      </div>
    </div>
    <div className="col-lg-5 d-lg-block d-md-block col-md-6  d-none ">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
        
        {
  image?.map((color, i) => (
    color.image?.map((imageSrc, j) => (
     
      <div id= {`list-item-${j}`}  key={`image-${i}-${j}`}>
     <img src={`${process.env.REACT_APP_IMAGE_URL}${imageSrc}`} className="img-fluid w-100  " alt="..." />
    </div>
    ))
  ))
}
       
      </div>
    </div>


        
    <div id="carouselExampleIndicators" className=" d-lg-none d-md-none  col-sm-12  d-sm-block     carousel slide ">
      <div className="carousel-indicators text-black ">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
       
      {image?.map((color, i) => (
          color.image?.map((imageSrc, j) => (
            <div className={`carousel-item ${i === 0 && j === 0 ? 'active' : ''}`} key={`image-${i}-${j}`}>
              <img src={`${process.env.REACT_APP_IMAGE_URL}${imageSrc}`} className="d-block w-100 slidimg" alt={`Image ${i}-${j}`} />
            </div>
          ))
        ))}
       
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   
    <div  className="col-lg-5 col-md-6 col-sm-12 p-4 sticky-column scrollable" >
      <h3 className='text-capitalize'>{dataa?.product_name}</h3>
                    
      {dataa?.select_size?.at(0).product_old_price === null ? (
        <p className="fs-5 text-dark prisefont">
         ₹ {productPrice || dataa?.select_size?.at(0).product_price}
        </p>
      ) : (
        <>
            <span className='fs-5 text-decoration-line-through text-secondary pe-2 prisefont '>
         (    ₹  {dataa?.select_size?.at(0).product_old_price} )
            </span>
            <span className="fs-5 text-dark prisefont">
            ₹ {productPrice || dataa?.select_size?.at(0).product_price}
        </span>
        </>
      )}
       
      <div  className="text-dark d-flex align-items-center mt-2"><span className=' '>Color :</span> 
      {dataa?.colour_name?.map((color, index) => (
       
          <div
            key={index}
            className=" ms-2 pt-2 cursor"
            style={{
              backgroundColor: color.colour_name,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '5px',
              cursor: 'pointer'
            }}
            onClick={() => changeImgOnColor(color.colour_name)}
          ></div>
        ))}</div>
   
      <div className="d-flex">
        <a href="" className="mx-3 ms-0 color_hover"><img  className="rounded-circle" src="./image/dot_1.png" alt=""/></a>
        <a href="" className="mx-3 color_hover"><img  className="rounded-circle" src="./image/dot_2.png" alt=""/></a>
        <a href="" className="mx-3 color_hover"><img  className="rounded-circle" src="./image/dot_3.png" alt=""/></a>
      </div>
  
      <div className='d-block d-lg-flex justify-content-between '><h3 className="fs-5">Select Your Size</h3>
      
<Link  className='text-secondary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">size chart</Link>
       {/* <!-- Button trigger modal --> */}




      </div>
   

      <div className="my-3">
      <div>
        <h3>Top</h3>
        {groupedSizes.top.map((size, index) => (
          <button
            key={size.id}
            type="button"
            className={`btn border border-dark border-1 mx-2 ms-0 rounded-0 ${selectedTopSize === size.id ? 'active' : ''} ${!size.stock_status ? 'disabled' : ''}`}
            onClick={() => {
              if (size.stock_status) {
                handleSizeClick(size, 'top');
              }
            }}
            style={{ backgroundColor: selectedTopSize === size.id ? 'black' : '', color: selectedTopSize === size.id ? 'white' : '' }}
            disabled={!size.stock_status}
          >
            {size.size_name || 'No Size'}
            {!size.stock_status && " (Out of Stock)"}
          </button>
        ))}
      </div>
      <div>
        <h3>Bottom</h3>
        {groupedSizes.bottom.map((size, index) => (
          <button
            key={size.id}
            type="button"
            className={`btn border border-dark border-1 mx-2 ms-0 rounded-0 ${selectedBottomSize === size.id ? 'active' : ''} ${!size.stock_status ? 'disabled' : ''}`}
            onClick={() => {
              if (size.stock_status) {
                handleSizeClick(size, 'bottom');
              }
            }}
            style={{ backgroundColor: selectedBottomSize === size.id ? 'black' : '', color: selectedBottomSize === size.id ? 'white' : '' }}
            disabled={!size.stock_status}
          >
            {size.size_name || 'No Size'}
            {!size.stock_status && " (Out of Stock)"}
          </button>
        ))}
      </div>
      <div>
       
      </div>
      
      </div>
      
      <div>
        <span ><button type="button" onClick={addtocart} className="buttons_hover w-100 p-2 my-1">ADD TO CART</button></span>
        <button type="button"  onClick={addwishlist} className="buttons_hover w-100 p-2 my-1">ADD TO WISHLIST</button>
      </div>
      <br></br>
     

        <hr></hr>
      
   

   

      {/* {/ <!-- TABS --> /} */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button  className="nav-link bg-white active rounded-0 text-black" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
        </li>
        <li className="nav-item" role="presentation">
          <button  className="nav-link bg-white rounded-0 text-black" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Details</button>
        </li>
        <li className="nav-item" role="presentation">
          <button  className="nav-link bg-white rounded-0 text-black" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Shipping</button>
        </li>
      </ul>

      <div className="tab-content mt-auto" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <p  className=" text-black">
          {dataa?.product_description}
          </p>
        
        </div>
        <div  className="tab-pane fade text-black" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <ul className="text-black">
          {dataa?.product_details?.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
          
          </ul>
  
        </div>
        <div  className="tab-pane fade text-black" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
          <ul>
            <li>Free shipping all over India.</li>
            <li>Delivery in 12-15 working days. For more info, visit <Link id="spolicy" to={'/ShipingPolicy'} >Shipping Policy</Link></li>
            <li>Free returns within 7 days. For more info, visit <Link id="rpolicy" to={'/refundpolicy'} >Refund Policy</Link></li>
          </ul>
      
        </div>
      </div>
    </div>

{/* <!-- Modal --> */}
<div class="modal  fade " id="staticBackdrop"  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-size">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Size Chart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='sizechart_color w-100 sizetable'>
   <div className='container text-center text-white py-5'>
    <div className='fs-4 fw-bold py-4'> Size Chart</div>
        <div>These are body measurements. All measurements are in inches.</div>
 <div>
   <div className='py-4 fs-5'>Shirts & Tops & Blazers</div>
 <table className='table  m-auto table-responsive my-4 table-bordered border-1 border-secondary-subtle'>
    <tr>
      <th></th>
      <th>Bust</th>
      <th>Waist</th>
      <th>Shoulder</th>
    </tr>
    <tr>
      <th>xs</th>
      <td>32-33</td>
      <td>26-27</td>
      <td>13.75</td>
    </tr>
    <tr>
      <th>s</th>
      <td>34-35	</td>
      <td>28-29</td>
      <td>14.25</td>
    </tr>
    <tr>
      <th>m</th>
      <td>36-37	</td>
      <td>30-31	</td>
      <td>14.75	</td>
    </tr>
    <tr>
      <th>l</th>
      <td>38-39		</td>
      <td>32-33</td>
      <td>15.25</td>
    </tr>
    <tr>
      <th>xl</th>
      <td>40-41		</td>
      <td>34-35</td>
      <td>15.75	</td>
    </tr>
    <tr>
      <th>xxl</th>
      <td>41-43.5	</td>
      <td>36-38</td>
      <td>	16.5	</td>
    </tr>
   </table>
 </div>
 <div>
   <div className='pt-4 fs-5 py-3'>Dresses</div>
 <table className='table  m-auto table-responsive my-4 table-bordered border-1 border-secondary-subtle '>
    <tr>
      <th></th>
      <th>Bust</th>
      <th>Waist</th>
      <th>Hip</th>
    </tr>
    <tr>  
      <th>xs</th>
      <td>32-33</td>
      <td>26-27</td>
      <td>35</td>
    </tr>
    <tr>
      <th>s</th>
      <td>34-35	</td>
      <td>28-29</td>
      <td>37</td>
    </tr>
    <tr>
      <th>m</th>
      <td>36-37	</td>
      <td>30-31	</td>
      <td>39	</td>
    </tr>
    <tr>
      <th>l</th>
      <td>38-39		</td>
      <td>32-33</td>
      <td>41</td>
    </tr>
    <tr>
      <th>xl</th>
      <td>40-41		</td>
      <td>34-35</td>
      <td>43	</td>
    </tr>
    <tr>
      <th>xxl</th>
      <td>41-43.5	</td>
      <td>36-38</td>
      <td>45.5	</td>
    </tr>
   </table>
 </div>
 <div>
   <div className='pt-4 fs-5'>Trousers</div>
 <table className='table w-50  m-auto table-responsive my-4 table-bordered border-1 border-secondary-subtle '>
    <tr>
      <th></th>
      <th>Waist</th>
      <th>Hip</th>
    </tr>
    <tr>
      <th>xs</th>
      <td>26-27</td>
      <td>35</td>
    </tr>
    <tr>
      <th>s</th>
   
      <td>28-29</td>
      <td>37</td>
    </tr>
    <tr>
      <th>m</th>
     
      <td>30-31	</td>
      <td>39	</td>
    </tr>
    <tr>
      <th>l</th>
  
      <td>32-33</td>
      <td>41</td>
    </tr>
    <tr>
      <th>xl</th>
 
      <td>34-35</td>
      <td>43	</td>
    </tr>
    <tr>
      <th>xxl</th>
    
      <td>36-38</td>
      <td>45.5	</td>
    </tr>
   </table>
 </div>
 <div>
   <div className='pt-4 fs-5'>The following chart will help you match our size scheme to your usual size</div>
 <table className='table  m-auto table-responsive mt-4 table-bordered border-1 border-secondary-subtle'>
    <tr>
      <th>Leekus</th>
      <th>xs</th>
      <th>s</th>
      <th>m</th>
      <th>l</th>
      <th>xl</th>
      <th>xxl</th>
    </tr>
    <tr>
      <th>UK</th>
      <td>6</td>
      <td>8</td>
      <td>10</td>
      <td>12</td>
      <td>14</td>
      <td>16</td>
    </tr>
    <tr>
      <th>US</th>
      <td>2</td>
      <td>4</td>
      <td>6</td>
      <td>8</td>
      <td>10</td>
      <td>12</td>
    </tr>
    <tr>
      <th>Italy</th>
      <td>38</td>
      <td>40</td>
      <td>42</td>
      <td>44</td>
      <td>46</td>
      <td>48</td>
    </tr>
    <tr>
      <th>France</th>
      <td>34</td>
      <td>36</td>
      <td>38</td>
      <td>40</td>
      <td>42</td>
      <td>44</td>
    </tr>
  
   </table>
 </div>
   </div>
   <div className='text-center'>
   </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

  </div>
 

  <div className='row container text-center mx-auto mt-5'>
      <div className='d-flex justify-content-center'>
        <h3 className='borderbottom'>You may also like </h3>
      </div>
    {random4Data?.map((x, id) => {
           
              const colorNames = x.colour_name.map(color => color.colour_name);
             
              return (
                <Productall
                  key={id}
                  path={x.id}
                  product_urlkey={x.product_urlkey}
                  title={x.product_name}
                  price={x.select_size[0].product_price}
                  colour_name={colorNames}
                  colour_wise_image = {x.colour_name}
                  product_old_price={x.select_size[0].product_old_price}
                />
              );
            })}

  
  </div>

  <FAQaccordion/>
  </>
  )
}

export default Hoc(ProductsPurchase)