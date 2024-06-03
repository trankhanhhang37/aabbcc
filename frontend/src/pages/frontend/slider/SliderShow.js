
// import { Image } from 'antd';
// // import { slider } from '../../../test/slider';
// export default function Slider() {
//   const sliders = [
//     {
//         id: 1,
//         name: 'slider01',
//         to: '#',
//         imageSrc:
//             'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
//         imageAlt: "",
        
//     },
//     {
//         id: 2,
//         name: 'slider02',
//         to: '#',
//         imageSrc:
//             'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
//         imageAlt: "",
        
//     },
//     {
//         id: 3,
//         name: 'slider03',
//         to: '#',
//         imageSrc:
//             'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
//         imageAlt: "",
        
//     },
// ]
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000
// };
//   return (

//     <section class="pt-3">
//       <div class="container">
//         <div class="row gx-3">      
//           <main className="col-lg-9">
//             <div className="card-banner p-5 bg-primary rounded-5"{...settings} >
//               <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
//               {sliders.map((slider,index) => {
//                 return (
//                     <Image key={slider.id} src={slider.imageSrc} alt="slider" preview={false} />
//                 )
//             })}
              
//               </div>
//             </div>
//           </main>
//           <aside class="col-lg-3">
//             <div class="card-banner h-100 rounded-5" style={{ backgroundColor: '#f87217' }}>
//               <div class="card-body text-center pb-5">
//                 <h5 class="pt-5 text-white">Amazing Gifts</h5>
//                 <p class="text-white">No matter how far along you are in your sophistication</p>
//                 <a href="#" class="btn btn-outline-light"> View more </a>
//               </div>
//             </div>
            
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { Carousel } from 'antd';

export default function Slider() {
  const sliders = [
    {
      id: 1,
      name: 'slider01',
      to: '#',
      imageSrc: 'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'slider02',
      to: '#',
      imageSrc: 'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'slider03',
      to: '#',
      imageSrc: 'https://www.guardian.com.vn/media/wysiwyg/Web_Slider_Banner_1410_x_440.png',
      imageAlt: '',
    },
  ];

  return (
    <section className="pt-3">
      <div className="container">
        <div className="row gx-3">
          <main className="col-lg-9 ">
            <Carousel autoplay class="card-banner p-4 bg-primary ">
              {sliders.map((slider) => (
                <div key={slider.id}>
                  <img src={slider.imageSrc} alt={slider.imageAlt} style={{ width: '100%', height: 'auto' }} />
                </div>
              ))}
            </Carousel>
          </main>
          <aside className="col-lg-3">
            <div className="card-banners h-100 " >
              <div className="card-body pb-2">
                <img src='https://www.guardian.com.vn/media/.renditions/wysiwyg/banner/z5064554484589_f706d7d32beeba7491f1add7f8e5c6ec.jpg' style={{ width: '100%', height: '126px' }}/>
              </div>
              <div className="card-body pb-4">
                <img src='https://www.guardian.com.vn/media/.renditions/wysiwyg/banner/z5064554484589_f706d7d32beeba7491f1add7f8e5c6ec.jpg' style={{ width: '100%', height: '126px' }}/>
              </div>
            </div>
            
          </aside>
        </div>
      </div>
    </section>
  );
}
