import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Servives from "../../components/Test/Servives";
import { Helmet } from "react-helmet";

function About({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo-nef.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta
          name="description"
          content="In the fields of physical security and information security, Nefrit (AC) is the selective restriction of access to a place or other resource, while access management describes the process. The act of accessing may mean consuming, entering, or using. Permission to access a resource is called authorization.

      Locks and login credentials are two analogous mechanisms of Nefrit."
        />
        <meta
          name="og:title"
          content="Nefrit
    "
        />
        <meta
          name="og:description"
          content="In the fields of physical security and information security, Nefrit (AC) is the selective restriction of access to a place or other resource, while access management describes the process. The act of accessing may mean consuming, entering, or using. Permission to access a resource is called authorization.

    Locks and login credentials are two analogous mechanisms of Nefrit."
        />
        <meta name="Keywords" content="Nefrit,  Nefrit for Kibera Technology" />
        <meta
          name="og:image"
          content="https://miro.medium.com/max/812/1*1xhuVp8f2WFUGUByHS8VTg.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="436" />
        <meta property="og:image:height" content="228" />
      </Helmet>

      <div className="row mb-5 container">
        <div className="title">{t("About")}</div>
        <div className="mb-5">
          Hozirda onlayn-do'konlarga ega bo'lgan ko'plab jismoniy do'konlar
          uchun odatiy holga aylanib bormoqda, ular Internetda eksklyuziv
          takliflarga ega bo'lib, siz uni jismoniy muassasada ko'rishingiz
          mumkin emas, bu sizga katta afzallik deb aytish uchun ko'rsatma
          beradi. Internetda sotib olish. Bu faqat onlayn xaridlar iste'molchiga
          olib keladigan ko'plab afzalliklardan biridir. Shuni unutmaslik
          kerakki, Internet a ulkan bitimlar dunyosi, ularning aksariyati
          bozorda haqiqiy yangilikdir va tarmoq tufayli ularning barchasiga
          kirish mumkin. Ushbu yondashuvga binoan, shubhasiz, bundan buyon ushbu
          aniq ko'tarilgan marketing tizimining afzalliklarini sezadigan ko'plab
          foydalanuvchilar yoki mijozlar mavjud. Qaerda uni boshqarish va texnik
          xizmat ko'rsatishda ko'plab xarajatlarni tejashingiz mumkin va bu biz
          ishonganimizdan ko'ra ko'proq pul tejashga yo'l qo'ymasligi aniq.
          Bundan tashqari, biz asta-sekin tushuntirib beradigan boshqa hissalar.
          Mahsulotlarni olib kirish, shubhasiz, mamlakatda mavjud bo'lmagan va
          narxlarda mavjud bo'lgan eng kuchli ustunlik ekanligini unutmaymiz.
          Ushbu strategiya keltiradigan mantiqiy foyda bilan foydalanuvchilar
          yoki mijozlarning o'zlarida. Shu paytgacha ular mahsulot, xizmat yoki
          maqolalarni hozirgi kunga qaraganda ancha arzonroq olishlari mumkin.
        </div>
      </div>
      {/* <Servives /> */}
    </div>
  );
}
export default withTranslation()(About);
