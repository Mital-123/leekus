import React from 'react'
import { Link } from 'react-router-dom';
import { IoCloseCircleSharp } from "react-icons/io5";

function SizeChart() {
  return (
    <>
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
    <Link to={"/productpurchase/"} className=" text-white" style={{fontSize:"60px"}}><IoCloseCircleSharp /></Link>
   </div>
      </div>
    </>
  )
}

export default SizeChart