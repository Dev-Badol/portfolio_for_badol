import React from 'react';
import Image from 'next/image';
import img from '../../public/asset/who/who.jpg'

const Who = () => {
    return (
        <div className='flex px-4'>
      <div>
       <ul className=''>
        <li>web</li>
        <li>onde</li>
        <li>tovw</li>
        <li>dddd</li>
       </ul>
      </div>
      <div>
       <Image src={img} alt="" width={1020}/>
      </div>
        </div>
    );
};

export default Who;