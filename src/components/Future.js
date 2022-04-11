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

export default class Future extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>

        <div className="tis">
          {/* <!-- Asosiy rasm --> */}
          <img src="images/future.jpg" alt="Future" />
          <div className="container">
            <div className="w-75 mx-auto">
              <h4 className="pt-3">Target kelajakda</h4>
            </div>
            <p><span className="px-md-5 px-3"></span>
              Target kompaniyasi kelajakda oldiga ulkan maqsadlar qo'ygan bo'lib, <b>"Millatimizning qadrini oshirish"</b> eng oliy qadriyati hisoblanadi. Target hozirda rivojlangan mamlakatlarning ko'plab nufuzli unversitetlari bilan hamkorlikda ishlamoqda va kelajakda o'z unversitetini oshishni ham maqsad qilgan.
              Shu bilan birgalikda o'zbek xalqining obro' etiborini bu millatning ilmini oshirish bilan erishishni niyat qilgan.
            </p>
          </div>
          {/* <!-- Line --> */}
          <div className="line">
            <div className="container">
              <div className="py-md-3 py-2 d-flex justify-content-center align-items-center my-auto">
                <h6 className="mx-4">Batafsil:</h6>
                <a href="https://www.youtube.com/channel/UCcki1n-NzlUYultwHO-n-TQ" className="mx-4 d-flex justify-content-center align-items-center"><i
                  className="fab fa-youtube fa-2x"></i>Youtube</a>
              </div>
            </div>
          </div>
          {/* <!-- Foto lavhalar --> */}
          <div className="photos">
            <div className="container">
              <h1 className="text-center">Target in the future</h1>
              <div className="row">
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/future1.png" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/future2.png" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/future3.png" alt="" /></div>
                <div className="col-sm-6 col-6 py-md-3 py-2"><img src="images/future4.png" alt="" /></div>
                <div className="col-sm-6 offset-sm-0 offset-3 col-6 py-md-3 py-2"><img src="images/future5.png" alt="" /></div>
              </div>
            </div>
          </div>


          {/* <!-- Bizning manzil --> */}
          <div className="address">
            <h1 className="py-3 text-center">Bizning manzil</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12005.101663054782!2d69.21662327942356!3d41.21576820973872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3526fbd1e97ed388!2sTarget%20Education%20Sergeli!5e0!3m2!1suz!2s!4v1632122160336!5m2!1suz!2s"
              width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
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
                  <Link className="pb-3" to="abituriyent">Abituriyent 3.0</Link>
                  <Link className="pb-3" to="consulting">Target consulting</Link>
                  <Link className="pb-3" to="education">Target o'quv markazi</Link>
                  <Link className="pb-3" to="biznes">Biznes trening</Link>
                  <Link className="pb-3" to="abakus">Abakus Tashkent</Link>
                  <Link className="pb-3" to="mymedia">My Media</Link>
                  <Link className="pb-3" to="alhadaf">Al-hadaf</Link>
                </div>

              </div>
            </div>
            <hr />
            <p className="text-center a_footer">© Copyright Target | Powered by <a href="target.uz">Target.uz</a></p>
          </div>
        </div>

      </div>
    )
  }
}

