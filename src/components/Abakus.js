import './section.css';
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OwlCarousel from 'react-owl-carousel';
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

export default class Abakus extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>

        <div className="tis">
          {/* <!-- Asosiy rasm --> */}
          <img src="images/abakus2.jpg" />
          <div className="container">
            <div className="w-75 mx-auto">
              <h4 className="pt-3">Abakus Tashkent<br /><span>haqida</span></h4>
            </div>
            <p><span className="px-md-5 px-3"></span>Abakus Tashkent loyihasi Mental Arifmetika fanini o'z ichiga olib bu fan Dunyoning 52 mamlakatidagi maktablarda,maktabgacha ta'lim markazlarida fan tariqasida kirgan bo'lib,o'quvchilar asosan qo'l va abakus yordamida misol va masalalrga tezda yechim topa olish imkoniyatini beradi.Ushbu fan yoshlarda ijodkorlik,tezkorlik,liderlik hamda ko'p vazifani o'z vaqtda bajara olish qobiliyatini oshiradi.Shu kabi ushbu fanni o'rganga o'quvchida hotira kuchayadi,diqqatni jamlay oladi hamda fotohotira kuchayadi.Osiyo davlatlarida ushbu fan keng tarqalgan bo'lib bolalarga 2 yoshligidan o'rgatib kelinadi.Loyiha Mental Arifmetikani  o'quvchilarda liderlikni oshirishidagi va Universitetdagi imtihonlarni oson yo'l bilan yecha olishidagi eng yaxshi fan deb hisoblaydi.
            </p>
          </div>
          {/* <!-- Line --> */}
          <div className="line">
            <div className="container">
              <div className="py-md-3 py-2 d-flex justify-content-center align-items-center my-auto">
                <h6 className="mx-4">Batafsil:</h6>
                <a href="https://www.youtube.com/watch?v=7k7C78AR-fc&list=PLrrYV9PYxLcd16g4itlIzhvA22yK0ON-l" className="mx-4 d-flex justify-content-center align-items-center"><i
                  className="fab fa-youtube fa-2x"></i>Youtube</a>
              </div>
            </div>
          </div>
          {/* <!-- Fanlar --> */}
          <div className="subjects">
            <div className="container">
              <h1 className="text-center my-md-5 my-2">Loyihadagi fan</h1>
              <div className="row">
                <div className="col-md-6 col-sm-12 left">
                  <div>
                    <div className="mr-3 sub pt-4" alt="">
                      <h6 className="text-center pt-0 ">Mental arifmetika</h6>
                    </div>
                    <p>
                      Mental Arifmetika fani Dunyoning 52 mamlakatidagi maktablarda,maktabgacha ta'lim markazlarida fan tariqasida kirgan bo'lib,o'quvchilar asosan qo'l va abakus yordamida misol va masalalrga tezda yechim topa olish imkoniyatini beradi.Ushbu fan yoshlarda ijodkorlik,tezkorlik,liderlik hamda ko'p vazifani o'z vaqtda bajara olish qobiliyatini oshiradi.Shu kabi ushbu fanni o'rganga o'quvchida hotira kuchayadi,diqqatni jamlay oladi hamda fotohotira kuchayadi.Osiyo davlatlarida ushbu fan keng tarqalgan bo'lib bolalarga 2 yoshligidan o'rgatib kelinadi.Loyiha Mental Arifmetikani  o'quvchilarda liderlikni oshirishidagi va Universitetdagi imtihonlarni oson yo'l bilan yecha olishidagi eng yaxshi fan deb hisoblaydi.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 left">
                  <div>
                    <div className="mr-3 sub" alt="">
                      <h6 className="text-center pt-0 ">Metodist</h6>
                    </div>
                    <p>
                      Bunda Mental arifmetika kadr tayyorlov kurslari xisoblanib bunda qisqa vaqt mobaynida professional kadr yetishib chiqib mental arifmetika fani o'qituvchisi bo'lishi mumkin. Kadr tayyorlov kursi mobaynida o'quvchiga barcha tajribalar ulashiladi va kerakli materiallar to'liq taqdim etiladi.Osiyo davlatlarida ushbu fan keng tarqalgan bo'lib bolalarga 2 yoshligidan o'rgatib kelinadi.Siz ham  Mental Arifmetikani kadr tayyorlov kursida o'qib to'liq dars berishingiz mumkin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Foto lavhalar --> */}
          <div className="photos">
            <div className="container">
              <h1 className="text-center">Jarayonlar</h1>
              <div className="row">
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/120.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/116.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/117.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/abakusjarayon.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/119.jpg" alt="" /></div>
                <div className="col-sm-4 col-6 py-md-3 py-2"><img src="images/121.jpg" alt="" /></div>
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
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AKWtEK0oNMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sET0QRAi-vI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nSCBmXwh52A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m9iTBZozens" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t2IR2vY4UcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-2">
                  <div className="">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8xfHB7i7Ot4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bizning jamoa --> */}
          <div className="our_team py-md-5 py-3">
            <div className="container">
              <h1 className="text-center pb-md-4">Our team</h1>
              <OwlCarousel items={count} autoplay={true}
                className="owl-theme"
                loop
                nav
                margin={8}
              >
                <div className="item">
                  <div className="card w-100">
                    <div className="card-body p-2">
                      <img src="images/nigora.jpg" className="img-fluid" alt="" />
                    </div>
                    <h5 className="text-center py-1">Nigora Yaxshiboyeva</h5>
                    <p className="text-center">METODIST</p>
                  </div>
                </div>
                <div className="item">
                  <div className="card w-100">
                    <div className="card-body p-2">
                      <img src="images/mental.jpg" className="img-fluid" alt="" />
                    </div>
                    <h5 className="text-center py-1">Dilnoza Jalilova</h5>
                    <p className="text-center">Ustoz</p>
                  </div>
                </div>
                <div className="item">
                  <div className="card w-100">
                    <div className="card-body p-2">
                      <img src="images/umida2.jpg" className="img-fluid" alt="" />
                    </div>
                    <h5 className="text-center py-1">Umida Ibragimova</h5>
                    <p className="text-center">Ustoz</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>

          {/* <!-- Ro'yxatdan o'tish --> */}
          <div className="registr pb-0">
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
                  <Link className="pb-3" to="international">Target international school</Link>
                  <Link className="pb-3" to="abituriyent">Abituriyent 3.0</Link>
                  <Link className="pb-3" to="consulting">Target consulting</Link>
                  <Link className="pb-3" to="education">Target o'quv markazi</Link>
                  <Link className="pb-3" to="biznes">Biznes trening</Link>
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

