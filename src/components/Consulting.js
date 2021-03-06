import './section.css';
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react';



let count = null
let x = window.innerWidth;
function respons(x) {
  if (x > 576) {
    count = 4
  }
  else {
    count = 2
  }
}
respons(x);

export default class Consulting extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>

        <div className="tis">
          {/* <!-- Asosiy rasm --> */}
          <img src="images/consulting.jpg" />
          <div className="container">
            <div className="w-75 mx-auto">
              <h4 className="pt-3">Target consulting<br /><span>haqida</span></h4>
            </div>
            <p><span className="px-md-5 px-3"></span>Target consulting maqsadi talabalarni chet el unversitetlariga o'qishga yuborish hamda visa olishga ko'maklashish. Shuningdek Target consulting O'zbekiston oliy ta'lim muassasalarida tahsil olayotgan talabalarini o'qishini chet elning nufuzli unversitetlariga ko'chirib o'tkazishga yordam beradi. </p>
          </div>
          {/* <!-- Line --> */}
          <div className="line">
            <div className="container">
              <div className="py-md-3 py-2 d-flex justify-content-center align-items-center my-auto">
                <h6 className="mx-4">Batafsil:</h6>
                <a href="https://targett.uz/" className="mx-4 d-flex justify-content-center align-items-center">Targett.uz</a>
              </div>
            </div>
          </div>
          {/* <!-- Fanlar --> */}


          {/* <!-- Foto lavhalar --> */}
          <div className="photos py-md-3">
            <div className="container">
              <h1 className="text-center">Jarayonlar</h1>
              <div className="row">
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul1.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul2.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul3.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul4.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul5.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/consul6.jpg" alt="" /></div>
              </div>
            </div>
          </div>

          {/* <!-- Jarayonlar lavhalar --> */}
          <div className="process">
            <div className="container">
              <h1 className="py-3 mt-2">Feedback</h1>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1LnptVx4EKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uifSUh-GTeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1yYktB4daY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M7m31fQVwZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gMEXuwvY5-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SsfBqfnn8vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* <!-- Ro'yxatdan o'tish --> */}
          <div className="registr pb-0 d-none">
            <div className="container">
              <h1 className="text-center text-light pt-md-5 pt-3">Ro'yxatdan o'ting</h1>
              <div className="offset-md-3 col-12">
                <iframe width="100%" height="450px" src="https://forms.amocrm.ru/forms/html/form_837313_2acc9bd113928ac874d46b1fd2b664c6.html?date=1634018538#{%22user_origin%22:{%22datetime%22:%22Tue%20Oct%2012%202021%2011:02:18%20GMT+0500%20(Uzbekistan%20Standard%20Time)%22,%22referer%22:%22%22},%22is_modal%22:false,%22success_message%22:%22%22,%22has_redirect%22:%22%22,%22is_dark_bg%22:false,%22utm%22:{%22source%22:%22%22,%22medium%22:%22%22,%22content%22:%22%22,%22campaign%22:%22%22,%22term%22:%22%22},%22ga%22:{},%22location%22:%22https://forms.amocrm.ru/mtztrt%22,%22dp%22:{}}"
                  title="Ro'yxatdan o'tish" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>

          {/* <!-- Bizning manzil --> */}
          <div className="address">
            <h1 className="py-3 text-center">Bizning manzil</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1497.952649432104!2d69.2516463!3d41.3326726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6af1b14238cb522!2sTARGET%20XBA!5e0!3m2!1suz!2s!4v1633777785137!5m2!1suz!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
          </div>

          {/* <!-- Footer --> */}
          <div className="footer py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-6 offset-md-0  my-3 d-flex flex-column col1">
                  <h2 className="tex-center pb-2">Ijtimoiy tarmoqlarda</h2>
                  <a className="pb-3" href="https://t.me/joinchat/AAAAAE57QLxwzDtTEaaQoQ" target="_blank"><i
                    className="fab fa-telegram"></i> Telegram.me</a>
                  <a className="pb-3" href="https://www.instagram.com/targetedu.uz/" target="_blank"><i
                    className="fab fa-instagram"></i> Instagram.com</a>
                  <a className="pb-3" href="https://www.facebook.com/targetedu.uz/" target="_blank"><i
                    className="fab fa-facebook"></i>
                    Facebook.com</a>
                  <a className="pb-3" href="https://www.youtube.com/channel/UCcki1n-NzlUYultwHO-n-TQ" target="_blank"><i
                    className="fab fa-youtube"></i> Youtube.com</a>
                  <a className="pb-3" href="http://tiktok.com/@targetedu.uz" target="_blank"><i className="fab fa-tiktok"></i>
                    TikTok.com</a>
                  <a className="pb-3" href="https://t.me/joinchat/A_3ywBaW50lI0jsoRS8nxw" target="_blank"><i
                    className="fas fa-users"></i> Target group</a>
                </div>
                <div className="col-md-3 col-6 offset-md-0  my-3 d-flex flex-column col2">
                  <h2 className="tex-center pb-2">Filiallarimiz</h2>
                  <a className="pb-3" href="https://goo.gl/maps/SDNua8ULn8wM7hVw6" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Sergili filialli</a>
                  <a className="pb-3" href="https://goo.gl/maps/xt7DH5kXnTfUdMEc9" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Sebzor filialli</a>
                  <a className="pb-3" href="https://goo.gl/maps/8FVUATvB9DbNLN9B6" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Chilonzor filialli</a>
                  <a className="pb-3" href="https://goo.gl/maps/c3yFqeTG4StHgYY7A" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Uchtepa filialli</a>
                  <a className="pb-3" href="https://goo.gl/maps/8tU6VzyPyxsXBb6W8" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Jangoh filialli</a>
                  <a className="pb-3" href="https://goo.gl/maps/czNttGQHTmYwwq778" target="_blank"><i
                    className="fas fa-map-marker-alt"></i> Yunusobod filialli</a>
                </div>
                <div className="col-md-3 col-6 offset-md-0 my-3 d-flex flex-column col3">
                  <h2 className="tex-center pb-2">Murojaat uchun</h2>
                  <a className="pb-3" href="tel:+998712000727"><i className="fas fa-phone-alt"></i> +998 71 200 07 27
                  </a>
                  <a className="pb-3" href="tel:+998712000737"><i className="fas fa-phone-alt"></i> +998 71 200 07 37
                  </a>
                  <a className="pb-3" href="tel:+998999704070"><i className="fas fa-phone-alt"></i> +998 99 970 40
                    70</a>
                  <a className="pb-3" href="tel:+998998587010"><i className="fas fa-phone-alt"></i> +998 99 858 70
                    10</a>
                  <a className="pb-3" href="tel:+998938907010"><i className="fas fa-phone-alt"></i> +998 93 890 70
                    10</a>
                  <a className="pb-3" href="tel:+998996065558"><i className="fas fa-phone-alt"></i> +998 99 606 55
                    58</a>
                </div>
                <div className="col-md-3 col-6 offset-md-0 my-3 d-flex flex-column col3">
                  <h2 className="tex-center pb-2 h-25">Loyihalar</h2>
                  <Link className="pb-3" to="international">Target international school</Link>
                  <Link className="pb-3" to="abituriyent">Abituriyent 3.0</Link>
                  <Link className="pb-3" to="education">Target o'quv markazi</Link>
                  <Link className="pb-3" to="biznes">Biznes trening</Link>
                  <Link className="pb-3" to="abakus">Abakus Tashkent</Link>
                  <Link className="pb-3" to="mymedia">My Media</Link>
                  <Link className="pb-3" to="alhadaf">Al-hadaf</Link>
                </div>

              </div>
            </div>
            <hr />
            <p className="text-center a_footer">?? Copyright Target | Powered by <a href="target.uz">Target.uz</a></p>
          </div>
        </div>

      </div>
    )
  }
}

