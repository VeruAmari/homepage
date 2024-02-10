/* eslint-disable camelcase */
// import imgLow from './images/pic1_low.jpg';
// import imgLower from './images/pic1_lower.jpg';

import w_200 from './images/image1/image1_f1gdf2_c_scale,w_200.jpg';
import w_364 from './images/image1/image1_f1gdf2_c_scale,w_364.jpg';
import w_501 from './images/image1/image1_f1gdf2_c_scale,w_501.jpg';
import w_618 from './images/image1/image1_f1gdf2_c_scale,w_618.jpg';
import w_726 from './images/image1/image1_f1gdf2_c_scale,w_726.jpg';
import w_818 from './images/image1/image1_f1gdf2_c_scale,w_818.jpg';
import w_873 from './images/image1/image1_f1gdf2_c_scale,w_873.jpg';
import w_959 from './images/image1/image1_f1gdf2_c_scale,w_959.jpg';
import w_1092 from './images/image1/image1_f1gdf2_c_scale,w_1092.jpg';
import w_1192 from './images/image1/image1_f1gdf2_c_scale,w_1192.jpg';
import w_1178 from './images/image1/image1_f1gdf2_c_scale,w_1178.jpg';
import w_1330 from './images/image1/image1_f1gdf2_c_scale,w_1330.jpg';
import w_1306 from './images/image1/image1_f1gdf2_c_scale,w_1306.jpg';
import w_1400 from './images/image1/image1_f1gdf2_c_scale,w_1400.jpg';

const photo1 = document.querySelector('.photo-1');
photo1.setAttribute(
  'srcset',
  `
${w_200} 200w,
${w_364} 364w,
${w_501} 501w,
${w_618} 618w,
${w_726} 726w,
${w_818} 818w,
${w_873} 873w,
${w_959} 959w,
${w_1092} 1092w,
${w_1192} 1192w,
${w_1178} 1178w,
${w_1330} 1330w,
${w_1306} 1306w,
${w_1400} 1400w
  `,
);
