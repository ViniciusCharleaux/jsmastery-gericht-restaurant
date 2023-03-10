import React from 'react';

import './Chef.css';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading
        title="Chef's Word"
      />
      <h1 className='headtext__cormorant'>Waht we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="chef quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam, felis maximus varius elementum, urna mi ultrices mi</p>
        </div>
        <p className='p__opensans'>in vulputate magna nunc eu felis. Morbi consectetur elit vel venenatis molestie</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
