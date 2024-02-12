/* eslint-disable camelcase */
// import imgLow from './images/pic1_low.jpg';
// import imgLower from './images/pic1_lower.jpg';

import w_200 from './images/image1/image1_f1gdf2_c_scale,w_200.jpg';
import w_364 from './images/image1/image1_f1gdf2_c_scale,w_364.jpg';
import w_501 from './images/image1/image1_f1gdf2_c_scale,w_501.jpg';
import w_618 from './images/image1/image1_f1gdf2_c_scale,w_618.jpg';

const photo1 = document.querySelector('.photo-1');
photo1.setAttribute(
  'srcset',
  `
${w_200} 200w,
${w_364} 364w,
${w_501} 501w,
${w_618} 618w,
  `,
);
