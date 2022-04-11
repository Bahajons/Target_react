import './App.css';
import './components/style.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { Component } from 'react';
import International from './components/International';
import Abituriyent from './components/Abituriyent';
import Consulting from './components/Consulting';
import Education from './components/Education';
import Biznes from './components/Biznes';
import Abakus from './components/Abakus';
import Mymedia from './components/Mymedia';
import Alhadaf from './components/Alhadaf';
import Future from './components/Future';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <div class="main">
                  <div class="container pt-md-3">
                    <div class="row pt-0 pt-0 ">
                      <div class="col-md-6 left order-md-2 order-4">
                        <h5 class="text-center">Welcome to Target</h5>
                        <div class="d-flex flex-wrap">
                          <Link class="btn1 mx-auto" to="international" href="tis.html">Target International School</Link>
                          <Link class="btn1 mx-auto" to="abituriyent">Abituriyent 3.0</Link>
                          <Link class="btn1 mx-auto" to="consulting">Consulting</Link>
                          <Link class="btn1 mx-auto" to="education">O'quv markaz</Link>
                          <Link class="btn1 mx-auto" to="biznes">Biznes Trening</Link>
                          <Link class="btn1 mx-auto" to="abakus">Abakus Tashkent</Link>
                          <Link class="btn1 mx-auto" to="mymedia">My Media</Link>
                          <Link class="btn1 mx-auto" to="alhadaf">Al-hadaf</Link>
                          <Link class="btn1 w-50 mx-auto" to="future">Target kelajakda</Link>
                        </div>
                      </div>
                      <div class="col-md-6 right order-md-3 order-3">
                        <img class="w-100 d-md-none" src="images/01_1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="container my-5" id="about">
                    <ul class="nav  d-flex justify-content-center mb-4" id="myTab" role="tablist">
                      <li class="nav-item mt-2">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                          aria-controls="home" aria-selected="true">Target haqida</a>
                      </li>
                      <li class="nav-item mt-2">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                          aria-controls="profile" aria-selected="false">Qadriyat</a>
                      </li>
                      <li class="nav-item mt-2">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                          aria-controls="contact" aria-selected="false">Maqsad</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      {/* <!-- First content --> */}
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p>"Target" kompaniyasiga 2015-yil Jalilov Bekzod Murotovich tomonidan asos solingan bo'lib, o'z
                          faoliyatini O'quv Markaz ko'rinishida boshlagan. 2021 yilda Target brendi ostida "Target international school" ga asos soldi. "Target"ning hozirga kelib 7 ta yirik
                          filiallari bor bo'lib, bular: Sebzor, Chilonzor, Uchtepa, Yunusobod, Yashnaobod, Tinchlik metro va Sergeli tumanlarida joylashgan. 2018-yilda Target Consulting (chet elga o'qishga jo'natish) bo'limlari ochilgan."Target" kompaniyasi asosiy urg'uni sifatli oliy ta'limga berganligi uchun abituriyentlarni asosan chet el universitetlariga yoki ularning O'zbekistondagi filiallariga tayyorlaydi.
                        </p>
                      </div>
                      {/* <!-- Second content --> */}
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p>1. Halollik va Adolat - barcha kelishuvlarda, vazifa va topshiriqlarda, gapirilayotgan har
                          bir
                          so’zda bo’lishi shart;<br />
                          2. Tozalik b or joyda b araka bor qoidasiga rioya qilish shart;<br />
                          3. Har bir mijoz bizning ostonadan R OZI bo’lib chiqib ketishiga erishishimiz shart;<br />
                          4. “Kuch birlikda-Target mening jamoam” – shioriga amal qilib Target jamoaviy tashkiliy
                          ishlarida doim faol qatnashish va o’z hissasini qo’shishi shart; Targetda ishlab turib,
                          boshqa
                          o’quv markazda yoki kankurentlarimizda ham ishlash mumkin emas;<br />
                          5. “ Liderlik qobiliyati” ni shakillantirish va amalda ko’rsatishi shart;<br />
                          6. Ish kuni va ish vaqtini zoye ketkizmaslik -V aqtga xiyonat qilmaslik (siz uchun har bir
                          soniyaga haq berilishini va uni halollab olishni unutmaslik) o’z vaqtida ishda bo’lish va
                          har
                          bir vazifani sitqidildan bajarishi shart;<br />
                          7. Almashinuv qoidasig a ko’ra - Mijozlarimiz bizdan kutgan natijadan ko’proq natija bera
                          olishimiz shart;<br />
                          8. Targetning har bir xodimi tilidan chiqqan har bir so’zida va va’da berishda-y olg’on
                          ishlatmasligi, g’iybat qilmasligi va eng muhimi Va’da berdimi, uni ustidan chiqishi
                          shart;<br />
                          9. Doimiy ravishda hayriya darslarini tashkil etish shart; (O’qituvchilar, menejerlar,
                          adminlar
                          uchun taluqli)<br />
                          10. Sabab va Oqibat qoidasig a ko’ra -o’zini sabab holatida ekanligini –ya’ni, har bir holat
                          bo’yicha o’zi javobgar ekanligini unutmasligi shart;<br />
                          11. “Men o’z kasbimni ustasiman” tushunchasida bo’lishi, o’z ustida doimiy ishlashi va doim
                          yangi g’oyalar, takliflar berib borishi va amalda doimiy qo’llashi shart; jarayon uchun
                          emas,
                          natija uchun ishlashingiz shart;<br />
                          12. Ish vaqtida shaxsiy telefondan zarur bo’lmagan va ruxsat bo’lmagan vaziyatda
                          foydalanmasligingiz shart;<br />
                          13. Jamoadagi barcha xodimlarga u qanaqa lavozimda bo’lishidan qat’iy nazar chiroyli va
                          tabassum bilan muomalada bo’lishingiz va hurmat qilishingiz shart (zero Rasululloh
                          Sollallohu Alayhi Vassallam tabassum sadaqadur deganlar)<br />
                          14. Har bir mijozga hurmat bilan va tabassum bilan muomala qilishingiz shart (Mijoz borki
                          siz-u
                          bizga ish bor);<br />
                          15. Haqqa xiyonat qilmaslik shart;<br />
                          16. Kamchilik sezilgan taqdirda o’z vaqtida menedjer yoki direktorga yetkazish shart, zero
                          kamchilikni ko’ra turib aytmaslik bu jamoaga nisbatan hurmatsizlik hisoblanadi.<br />
                          17. Kompaniyaning ichki sirlarini oshkor qilmaslik, ishdan boshagan taqdirda ham
                          tarqatmaslik
                          shart; I chki sir ham omonatdir!<br />
                          18. Kelishuv muddati tugagandan so’ng yoki muddatdan oldin ishdan bo’shatiladigan bo’lsa,
                          hodim kompaniya va uning raxbariga nisbatan rozi yoki norozi ekanligini sabablari va
                          asoslari bilan birga ochiq aytib ketishi shart.<br />
                          19. Target kodeksi bilan tanishib chiqib, undagi qonun-qoidalarga amal qilish shart;
                          Belgilangan
                          ko’rsatma va qonun qoidalarga asosan dars berishi, ishlashi shart.</p>
                      </div>
                      {/* <!-- Third content --> */}
                      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <p>Yoshlarni jamiyatda o'z o'rnini topishiga va muvaffaqiyatga o'zi mustaqil erishishiga
                          ko'maklashish.
                          Abituriyentlarni chet el universitetlariga yoki Toshkentdagi chet el universitetlarining
                          filiallariga tayyorlash
                          va o'zimizning consulting xizmatimiz orqali chet el universitetlariga o'qishga kirishga va
                          talaba vizasini olishga amaliy yordam berish.
                          Talabalik davrida va talabalikdan so'ng yaxshi daromad topish hamda kichik biznes bilan
                          shug'ullanishni o'rgatish
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </Route>
              <Route path="/international">
                <International />
              </Route>
              <Route path="/abituriyent">
                <Abituriyent />
              </Route>
              <Route path="/consulting">
                <Consulting />

              </Route>
              <Route path="/education">
                <Education />

              </Route>
              <Route path="/biznes">
                <Biznes />
              </Route>
              <Route path="/abakus">
                <Abakus />
              </Route>
              <Route path="/mymedia">
                <Mymedia />
              </Route>
              <Route path="/alhadaf">
                <Alhadaf />
              </Route>
              <Route path="/future">
                <Future />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
