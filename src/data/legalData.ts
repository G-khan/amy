import { BilingualText } from './portfolioData';

export interface LegalDocument {
  id: string;
  hashRoute: string;
  title: BilingualText;
  content: BilingualText;
}

const COMPANY = {
  name: 'AMY Art Studio',
  owner: 'Amy Art Studio',
  address: 'İzmir, Türkiye',
  email: 'contact@amyartstudio.com',
  phone: '+90 555 555 5555',
  website: 'https://www.amyartstudio.com',
  lastUpdated: '12.03.2026',
};

export const legalDocuments: LegalDocument[] = [
  // ──────────────────────────────────────────────
  // 1. MESAFELİ SATIŞ SÖZLEŞMESİ
  // ──────────────────────────────────────────────
  {
    id: 'distance-sales',
    hashRoute: 'legal-distance-sales',
    title: {
      tr: 'Mesafeli Satış Sözleşmesi',
      en: 'Distance Sales Agreement',
    },
    content: {
      tr: `
<h3>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>

<h4>MADDE 1 – TARAFLAR</h4>
<p><strong>1.1. SATICI:</strong></p>
<ul>
  <li><strong>Ünvan:</strong> ${COMPANY.name}</li>
  <li><strong>Adres:</strong> ${COMPANY.address}</li>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
</ul>
<p><strong>1.2. ALICI:</strong></p>
<p>Sipariş esnasında belirtilen ad, soyad, adres, e-posta ve telefon bilgilerine sahip gerçek veya tüzel kişi.</p>

<h4>MADDE 2 – SÖZLEŞMENİN KONUSU</h4>
<p>İşbu sözleşmenin konusu, ALICI'nın ${COMPANY.name} internet sitesinden elektronik ortamda siparişini verdiği, sözleşmede bahsi geçen nitelikleri haiz ve yine sözleşmede satış fiyatı belirtilen ürün/ürünlerin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>
<p>ALICI, satışa konu ürün/ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli ve teslimatına ilişkin tüm ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli onayı verdiğini kabul, beyan ve taahhüt eder.</p>

<h4>MADDE 3 – SÖZLEŞME KONUSU ÜRÜN BİLGİLERİ</h4>
<p>Ürünün türü, adedi, marka/modeli, rengi, satış bedeli sipariş formunda ve faturada yer almaktadır. Satışa konu ürünler, ${COMPANY.name} tarafından üretilen orijinal sanat eserleri, tablolar ve sanat ürünleridir.</p>
<p>Ürünlerin tüm vergiler dahil satış fiyatı sipariş sayfasında ve onay e-postasında belirtilmektedir. Kargo/teslimat ücreti satış fiyatına dahil değildir ve sipariş özeti sayfasında ayrıca gösterilir.</p>

<h4>MADDE 4 – GENEL HÜKÜMLER</h4>
<p>4.1. ALICI, ${COMPANY.name} internet sitesinde satışa arz edilen ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli onayı verdiğini kabul eder.</p>
<p>4.2. Sözleşme konusu her bir ürün, yasal 30 günlük süreyi aşmamak koşulu ile ALICI'nın yerleşim yerinin uzaklığına bağlı olarak ALICI veya gösterdiği adresteki kişi/kuruluşa teslim edilir. Bu süre içinde ürünün ALICI'ya teslim edilememesi durumunda, ALICI'nın sözleşmeyi feshetme hakkı saklıdır.</p>
<p>4.3. Sözleşme konusu ürün, ALICI'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden SATICI sorumlu tutulamaz.</p>
<p>4.4. SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile birlikte teslim edilmesinden sorumludur.</p>
<p>4.5. SATICI, sipariş konusu ürün veya hizmetin yerine getirilmesinin imkânsızlaşması halinde, sözleşme konusu yükümlülüklerini yerine getiremezse, bu durumu öğrendiği tarihten itibaren 3 (üç) gün içinde ALICI'ya yazılı olarak bildirir ve 14 (on dört) günlük süre içinde toplam bedeli ALICI'ya iade eder.</p>

<h4>MADDE 5 – ÖDEME VE TESLİMAT</h4>
<p>5.1. Ödemeler, ${COMPANY.name} web sitesi üzerinden PayTR ödeme altyapısı kullanılarak güvenli bir şekilde gerçekleştirilir. Kredi kartı, banka kartı ve Troy kart ile ödeme yapılabilir.</p>
<p>5.2. Ürün teslimatı, ödemenin onaylanmasının ardından başlar. Teslimat süresi, ürünün stok durumuna ve teslimat adresine bağlı olarak 3-15 iş günü arasında değişebilir. Sanat eserleri özel paketleme gerektirdiğinden, teslimat süresi standart ürünlere göre daha uzun olabilir.</p>
<p>5.3. Teslimat, anlaşmalı kargo firması aracılığıyla ALICI'nın sipariş formunda belirttiği adrese yapılır. Kargo ücreti ALICI'ya aittir ve sipariş sırasında belirtilir.</p>

<h4>MADDE 6 – CAYMA HAKKI</h4>
<p>6.1. ALICI, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.</p>
<p>6.2. Cayma hakkının kullanılması için bu süre içinde SATICI'ya ${COMPANY.email} e-posta adresi veya ${COMPANY.phone} telefon numarası üzerinden yazılı bildirimde bulunulması gerekmektedir.</p>
<p>6.3. Cayma hakkının kullanılmasında, ürünün ambalajının açılmamış, bozulmamış ve ürünün kullanılmamış olması şarttır.</p>
<p>6.4. Cayma hakkı kapsamında iade edilen ürünün kargo bedeli ALICI tarafından karşılanır.</p>
<p>6.5. Cayma hakkının kullanılması halinde, SATICI, cayma bildiriminin kendisine ulaştığı tarihten itibaren en geç 14 (on dört) gün içinde toplam bedeli ve varsa ALICI'yı borç altına sokan tüm belgeleri ALICI'ya iade eder.</p>

<h4>MADDE 7 – CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h4>
<p>Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesi uyarınca, aşağıdaki hallerde ALICI cayma hakkını kullanamaz:</p>
<ul>
  <li>a) ALICI'nın özel istekleri veya açıkça onun kişisel ihtiyaçları doğrultusunda hazırlanan, sipariş üzerine özel olarak üretilen (komisyon/özel sipariş) sanat eserleri</li>
  <li>b) Niteliği itibarıyla iade edilemeyecek, çabuk bozulma veya son kullanma tarihi geçme ihtimali olan ürünler</li>
  <li>c) Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan ve iade edilmesinin hijyen ve sağlık açısından uygun olmadığı ürünler</li>
</ul>

<h4>MADDE 8 – TEMERRÜT HALİ VE HUKUKİ SONUÇLARI</h4>
<p>ALICI'nın kredi kartıyla yapmış olduğu işlemlerde temerrüde düşmesi halinde, kart sahibi bankanın ilgili mevzuat kapsamında belirlediği faiz oranını ödemeyi ve bu faizin hesaplanmasında banka ile kart sahibi arasında imzalanan sözleşme hükümlerinin esas alınacağını kabul eder.</p>

<h4>MADDE 9 – YETKİLİ MAHKEME</h4>
<p>İşbu sözleşmeden doğan uyuşmazlıklarda şikayet ve itirazlar, Gümrük ve Ticaret Bakanlığı'nca her yıl Aralık ayında ilan edilen parasal sınırlar dahilinde ALICI'nın yerleşim yerindeki veya tüketici işleminin yapıldığı yerdeki Tüketici Sorunları Hakem Heyeti'ne veya Tüketici Mahkemesi'ne yapılabilir.</p>

<h4>MADDE 10 – YÜRÜRLÜK</h4>
<p>ALICI, işbu sözleşmede yazılı tüm koşulları ve açıklamaları okuduğunu, anladığını ve kabul ettiğini, belirtilen ve talep edilen her türlü bilgiyi doğru ve eksiksiz olarak verdiğini, siparişin onaylanması ile işbu sözleşmenin akdedilmiş sayılacağını kabul ve beyan eder.</p>
<p>İşbu sözleşme, ALICI tarafından elektronik ortamda onaylandığı tarihte yürürlüğe girer.</p>
`,
      en: `
<h3>DISTANCE SALES AGREEMENT</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>

<h4>ARTICLE 1 – PARTIES</h4>
<p><strong>1.1. SELLER:</strong></p>
<ul>
  <li><strong>Company:</strong> ${COMPANY.name}</li>
  <li><strong>Address:</strong> ${COMPANY.address}</li>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
</ul>
<p><strong>1.2. BUYER:</strong></p>
<p>The individual or legal entity whose name, surname, address, email, and phone number are specified during the order process.</p>

<h4>ARTICLE 2 – SUBJECT OF THE AGREEMENT</h4>
<p>The subject of this agreement is the determination of the rights and obligations of the parties regarding the sale and delivery of the product(s) ordered electronically by the BUYER from the ${COMPANY.name} website, in accordance with the provisions of the Consumer Protection Law No. 6502 and the Regulation on Distance Contracts.</p>
<p>The BUYER acknowledges and agrees that they have read and been informed about the basic characteristics, sales price, payment method, and delivery information of the product(s) subject to sale, and has given the necessary consent electronically.</p>

<h4>ARTICLE 3 – PRODUCT INFORMATION</h4>
<p>The type, quantity, brand/model, color, and sales price of the product are stated in the order form and invoice. The products subject to sale are original artworks, paintings, and art products produced by ${COMPANY.name}.</p>
<p>The sales price of the products, including all taxes, is stated on the order page and in the confirmation email. Shipping/delivery costs are not included in the sales price and are shown separately on the order summary page.</p>

<h4>ARTICLE 4 – GENERAL PROVISIONS</h4>
<p>4.1. The BUYER acknowledges that they have read the preliminary information regarding the basic characteristics, sales price, payment method, and delivery of the product offered for sale on the ${COMPANY.name} website and has given the necessary consent electronically.</p>
<p>4.2. Each product subject to the agreement shall be delivered to the BUYER or the person/organization at the address indicated by the BUYER, within a legal period not exceeding 30 days, depending on the distance of the BUYER's place of residence. If the product cannot be delivered to the BUYER within this period, the BUYER reserves the right to terminate the agreement.</p>
<p>4.3. If the product is to be delivered to a person/organization other than the BUYER, the SELLER cannot be held responsible if the delivery is not accepted by the person/organization.</p>
<p>4.4. The SELLER is responsible for delivering the product in a sound, complete condition, conforming to the specifications stated in the order, and with warranty documents and user manuals, if any.</p>
<p>4.5. If the fulfillment of the product or service subject to the order becomes impossible, the SELLER shall notify the BUYER in writing within 3 (three) days from the date of learning of this situation and shall refund the total amount to the BUYER within 14 (fourteen) days.</p>

<h4>ARTICLE 5 – PAYMENT AND DELIVERY</h4>
<p>5.1. Payments are made securely through the PayTR payment infrastructure on the ${COMPANY.name} website. Payments can be made by credit card, debit card, and Troy card.</p>
<p>5.2. Product delivery begins after payment confirmation. Delivery time may vary between 3-15 business days depending on stock availability and delivery address. As artworks require special packaging, delivery time may be longer than standard products.</p>
<p>5.3. Delivery is made to the address specified by the BUYER in the order form through the contracted cargo company. Shipping costs are borne by the BUYER and are indicated at the time of order.</p>

<h4>ARTICLE 6 – RIGHT OF WITHDRAWAL</h4>
<p>6.1. The BUYER has the right to withdraw from the agreement within 14 (fourteen) days from the delivery of the product to themselves or the person/organization at the indicated address, without stating any reason and without paying any penalty.</p>
<p>6.2. To exercise the right of withdrawal, written notification must be made to the SELLER within this period via email at ${COMPANY.email} or by phone at ${COMPANY.phone}.</p>
<p>6.3. For the exercise of the right of withdrawal, the product packaging must be unopened, undamaged, and the product must be unused.</p>
<p>6.4. The shipping cost of the returned product within the scope of the right of withdrawal shall be borne by the BUYER.</p>
<p>6.5. In case of exercise of the right of withdrawal, the SELLER shall refund the total amount and all documents that put the BUYER under obligation within 14 (fourteen) days at the latest from the date the withdrawal notification reaches the SELLER.</p>

<h4>ARTICLE 7 – PRODUCTS EXEMPT FROM RIGHT OF WITHDRAWAL</h4>
<p>Pursuant to Article 15 of the Regulation on Distance Contracts, the BUYER cannot exercise the right of withdrawal in the following cases:</p>
<ul>
  <li>a) Artworks specially produced upon order (commission/custom order) prepared according to the BUYER's special requests or clearly for their personal needs</li>
  <li>b) Products that by their nature cannot be returned, or are likely to deteriorate or expire quickly</li>
  <li>c) Products whose protective elements such as packaging, tape, seal, or pack have been opened after delivery and whose return is not appropriate for hygiene and health reasons</li>
</ul>

<h4>ARTICLE 8 – DEFAULT AND LEGAL CONSEQUENCES</h4>
<p>In case of default on credit card transactions by the BUYER, the cardholder agrees to pay the interest rate determined by the bank within the scope of the relevant legislation, and that the provisions of the agreement signed between the bank and the cardholder shall be taken as the basis for calculating this interest.</p>

<h4>ARTICLE 9 – COMPETENT COURT</h4>
<p>Complaints and objections arising from this agreement may be made to the Consumer Problems Arbitration Committee or the Consumer Court at the BUYER's place of residence or where the consumer transaction was made, within the monetary limits announced by the Ministry of Commerce every December.</p>

<h4>ARTICLE 10 – ENTRY INTO FORCE</h4>
<p>The BUYER acknowledges and declares that they have read, understood, and accepted all conditions and explanations written in this agreement, that they have provided all specified and requested information accurately and completely, and that this agreement shall be deemed to have been concluded upon confirmation of the order.</p>
<p>This agreement enters into force on the date it is electronically confirmed by the BUYER.</p>
`,
    },
  },

  // ──────────────────────────────────────────────
  // 2. ÖN BİLGİLENDİRME FORMU
  // ──────────────────────────────────────────────
  {
    id: 'pre-info',
    hashRoute: 'legal-pre-info',
    title: {
      tr: 'Ön Bilgilendirme Formu',
      en: 'Pre-Information Form',
    },
    content: {
      tr: `
<h3>ÖN BİLGİLENDİRME FORMU</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>
<p>İşbu Ön Bilgilendirme Formu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği'nin 5. maddesi uyarınca, tüketicinin bilgilendirilmesi amacıyla düzenlenmiştir.</p>

<h4>1. SATICI BİLGİLERİ</h4>
<ul>
  <li><strong>Ünvan:</strong> ${COMPANY.name}</li>
  <li><strong>Adres:</strong> ${COMPANY.address}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Web Sitesi:</strong> ${COMPANY.website}</li>
</ul>

<h4>2. ÜRÜN/HİZMET BİLGİLERİ</h4>
<p>Satışa konu ürünlerin temel özellikleri (türü, miktarı, malzeme bilgisi, boyutları) ${COMPANY.name} internet sitesinde ürün sayfasında yer almaktadır. Ürünün temel özelliklerini sipariş vermeden önce incelemeniz önerilir. Satışa sunulan ürünler ${COMPANY.name} tarafından üretilen orijinal sanat eserleridir.</p>

<h4>3. SATIŞ FİYATI VE ÖDEME BİLGİLERİ</h4>
<p>3.1. Ürünlerin KDV dahil satış fiyatları, ürün sayfasında ve sipariş özeti ekranında açıkça belirtilmektedir.</p>
<p>3.2. Kargo/teslimat ücreti satış fiyatına dahil değildir. Kargo ücreti sipariş özeti ekranında ayrıca gösterilir.</p>
<p>3.3. Ödeme, PayTR güvenli ödeme altyapısı aracılığıyla kredi kartı, banka kartı veya Troy kart ile yapılabilir.</p>
<p>3.4. Kredi kartı ile yapılan ödemelerde, ALICI'nın bankası ile arasındaki anlaşmaya bağlı olarak taksit seçeneği sunulabilir.</p>

<h4>4. TESLİMAT BİLGİLERİ</h4>
<p>4.1. Ürünler, sipariş onayını takiben 3-15 iş günü içerisinde kargoya teslim edilir.</p>
<p>4.2. Sanat eserleri, hasar görmemesi için özel ambalajlama ile paketlenir. Bu nedenle hazırlık süresi standart ürünlere göre daha uzun olabilir.</p>
<p>4.3. Teslimat, anlaşmalı kargo şirketi aracılığıyla ALICI'nın belirttiği adrese yapılır.</p>
<p>4.4. ALICI'dan kaynaklanan sebeplerle (yanlış adres, alıcı bulunamama vb.) teslimat gerçekleşemezse, ek kargo ücretleri ALICI'ya aittir.</p>

<h4>5. CAYMA HAKKI</h4>
<p>5.1. ALICI, ürünü teslim aldığı tarihten itibaren 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin sözleşmeden cayabilir.</p>
<p>5.2. Cayma hakkını kullanmak isteyen ALICI, bu süre içinde ${COMPANY.email} adresine e-posta göndererek veya ${COMPANY.phone} numarasını arayarak SATICI'ya bildirimde bulunmalıdır.</p>
<p>5.3. Cayma hakkının geçerli olması için ürünün kullanılmamış, ambalajının açılmamış ve hasar görmemiş olması gerekmektedir.</p>
<p>5.4. İade kargo bedeli ALICI tarafından karşılanır.</p>
<p>5.5. SATICI, cayma bildiriminin ulaşmasından itibaren 14 gün içinde ödenen bedeli iade eder.</p>

<h4>6. CAYMA HAKKI İSTİSNALARI</h4>
<p>Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesi kapsamında, ALICI'nın özel istekleri doğrultusunda üretilen veya kişiye özel hale getirilen ürünlerde (özel sipariş/komisyon eserleri) cayma hakkı kullanılamaz.</p>

<h4>7. ŞİKAYET VE İTİRAZ</h4>
<p>Ürün veya hizmete ilişkin şikayet ve itirazlarınızı aşağıdaki kanallara iletebilirsiniz:</p>
<ul>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
  <li><strong>Tüketici Hakları:</strong> Tüketici Sorunları Hakem Heyeti veya Tüketici Mahkemesi'ne başvuru yapılabilir.</li>
</ul>

<h4>8. ONAY</h4>
<p>ALICI, işbu Ön Bilgilendirme Formu'nu elektronik ortamda okuyup bilgi sahibi olduğunu ve mesafeli satış sözleşmesinin kurulmasından önce SATICI tarafından tüketiciye verilmesi gereken adresi, siparişi verilen ürünlere ait temel özellikleri, ürünlerin vergiler dahil fiyatını, ödeme ve teslimat bilgilerini doğru ve eksiksiz olarak edindiğini kabul ve beyan eder.</p>
`,
      en: `
<h3>PRE-INFORMATION FORM</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>
<p>This Pre-Information Form has been prepared in accordance with Article 5 of the Consumer Protection Law No. 6502 and the Regulation on Distance Contracts, for the purpose of informing the consumer.</p>

<h4>1. SELLER INFORMATION</h4>
<ul>
  <li><strong>Company:</strong> ${COMPANY.name}</li>
  <li><strong>Address:</strong> ${COMPANY.address}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Website:</strong> ${COMPANY.website}</li>
</ul>

<h4>2. PRODUCT/SERVICE INFORMATION</h4>
<p>The basic features of the products for sale (type, quantity, material information, dimensions) are available on the product page of the ${COMPANY.name} website. It is recommended that you review the basic features of the product before placing your order. Products offered for sale are original artworks produced by ${COMPANY.name}.</p>

<h4>3. SALES PRICE AND PAYMENT INFORMATION</h4>
<p>3.1. The VAT-inclusive sales prices of products are clearly stated on the product page and order summary screen.</p>
<p>3.2. Shipping/delivery costs are not included in the sales price. Shipping fees are shown separately on the order summary screen.</p>
<p>3.3. Payment can be made by credit card, debit card, or Troy card through the PayTR secure payment infrastructure.</p>
<p>3.4. Depending on the agreement between the BUYER and their bank, installment options may be offered for credit card payments.</p>

<h4>4. DELIVERY INFORMATION</h4>
<p>4.1. Products are shipped within 3-15 business days following order confirmation.</p>
<p>4.2. Artworks are packaged with special wrapping to prevent damage. Therefore, preparation time may be longer than standard products.</p>
<p>4.3. Delivery is made to the address specified by the BUYER through the contracted shipping company.</p>
<p>4.4. If delivery cannot be made due to reasons attributable to the BUYER (wrong address, recipient not found, etc.), additional shipping costs shall be borne by the BUYER.</p>

<h4>5. RIGHT OF WITHDRAWAL</h4>
<p>5.1. The BUYER may withdraw from the agreement within 14 (fourteen) days from the date of receiving the product without stating any reason.</p>
<p>5.2. The BUYER wishing to exercise the right of withdrawal must notify the SELLER by sending an email to ${COMPANY.email} or by calling ${COMPANY.phone} within this period.</p>
<p>5.3. For the right of withdrawal to be valid, the product must be unused, its packaging unopened, and undamaged.</p>
<p>5.4. Return shipping costs are borne by the BUYER.</p>
<p>5.5. The SELLER shall refund the amount paid within 14 days from the receipt of the withdrawal notification.</p>

<h4>6. EXCEPTIONS TO RIGHT OF WITHDRAWAL</h4>
<p>Within the scope of Article 15 of the Regulation on Distance Contracts, the right of withdrawal cannot be exercised for products that are produced or personalized according to the BUYER's special requests (custom order/commission artworks).</p>

<h4>7. COMPLAINTS AND OBJECTIONS</h4>
<p>You can submit your complaints and objections regarding the product or service through the following channels:</p>
<ul>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
  <li><strong>Consumer Rights:</strong> Applications can be made to Consumer Problems Arbitration Committees or Consumer Courts.</li>
</ul>

<h4>8. CONFIRMATION</h4>
<p>The BUYER acknowledges and declares that they have read this Pre-Information Form electronically and obtained information, and that before the conclusion of the distance sales agreement, they have accurately and completely obtained the address, basic features of the ordered products, the price of the products including taxes, and payment and delivery information that must be provided by the SELLER to the consumer.</p>
`,
    },
  },

  // ──────────────────────────────────────────────
  // 3. İPTAL İADE KOŞULLARI
  // ──────────────────────────────────────────────
  {
    id: 'cancellation',
    hashRoute: 'legal-cancellation',
    title: {
      tr: 'İptal ve İade Koşulları',
      en: 'Cancellation and Refund Policy',
    },
    content: {
      tr: `
<h3>İPTAL VE İADE KOŞULLARI</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>
<p>İşbu İptal ve İade Koşulları, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri çerçevesinde düzenlenmiştir.</p>

<h4>1. SİPARİŞ İPTALİ</h4>
<p>1.1. ALICI, siparişin kargoya verilmesinden önce sipariş iptali talebinde bulunabilir. Sipariş iptali için ${COMPANY.email} adresine e-posta gönderilmesi veya ${COMPANY.phone} numarasının aranması gerekmektedir.</p>
<p>1.2. Kargoya teslim edilmiş siparişler için iptal talebi kabul edilmez; bu durumda ALICI cayma hakkını kullanabilir.</p>
<p>1.3. Sipariş iptal edildiğinde, ödeme ALICI'nın ödeme yaptığı yöntemle en geç 14 (on dört) gün içinde iade edilir.</p>
<p>1.4. Kredi kartı ile yapılan ödemelerde iade, ilgili bankanın prosedürlerine göre hesaba yansır. İade süresi bankaya bağlı olarak değişiklik gösterebilir.</p>

<h4>2. CAYMA HAKKI VE İADE</h4>
<p>2.1. ALICI, ürünü teslim aldığı tarihten itibaren 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin cayma hakkını kullanabilir.</p>
<p>2.2. Cayma hakkının kullanılabilmesi için:</p>
<ul>
  <li>Ürün kullanılmamış olmalıdır</li>
  <li>Ürün ambalajı açılmamış, yırtılmamış veya bozulmamış olmalıdır</li>
  <li>Ürün, orijinal koruyucu ambalajı ile birlikte iade edilmelidir</li>
  <li>Varsa ürünle birlikte gönderilen tüm aksesuarlar ve belgeler eksiksiz iade edilmelidir</li>
</ul>
<p>2.3. Cayma bildirimi ${COMPANY.email} adresine e-posta ile yapılmalıdır. Bildirimde sipariş numarası, ürün adı ve cayma gerekçesi (isteğe bağlı) belirtilmelidir.</p>

<h4>3. İADE SÜRECİ</h4>
<p>3.1. Cayma bildiriminin SATICI'ya ulaşmasının ardından ALICI'ya iade için gerekli bilgiler e-posta ile iletilir.</p>
<p>3.2. ALICI, ürünü cayma bildiriminden itibaren 10 (on) gün içinde SATICI'ya geri göndermekle yükümlüdür.</p>
<p>3.3. İade kargo bedeli ALICI tarafından karşılanır.</p>
<p>3.4. Ürün, SATICI tarafından kontrol edildikten sonra, iade koşullarına uygun bulunması halinde ödeme iadesi başlatılır.</p>
<p>3.5. Ödeme iadesi, ürünün SATICI'ya ulaşmasından itibaren en geç 14 (on dört) gün içinde, ALICI'nın ödeme yaptığı yöntemle gerçekleştirilir.</p>

<h4>4. İADE KABUL EDİLMEYECEK DURUMLAR</h4>
<p>Aşağıdaki durumlarda iade kabul edilmez:</p>
<ul>
  <li>Ürün kullanılmış veya hasar görmüş ise</li>
  <li>Ambalajı açılmış, yırtılmış veya zarar görmüş ise</li>
  <li>14 günlük cayma süresi geçmiş ise</li>
  <li>ALICI'nın özel isteği üzerine sipariş edilen/üretilen (komisyon) eserler</li>
  <li>Kişiye özel hazırlanmış veya kişiselleştirilmiş ürünler</li>
</ul>

<h4>5. HASARLI ÜRÜN TESLİMATI</h4>
<p>5.1. Kargo teslimi sırasında ürünün hasarlı olduğu tespit edilirse, ALICI kargo görevlisi huzurunda tutanak tutturmalıdır.</p>
<p>5.2. Hasarlı ürün fotoğrafları ve tutanak, 48 saat içinde ${COMPANY.email} adresine e-posta ile bildirilmelidir.</p>
<p>5.3. Kargo sürecinde oluşan hasarlarda, ürün ücretsiz olarak değiştirilir veya ücret iadesi yapılır. Bu durumda iade kargo bedeli SATICI tarafından karşılanır.</p>

<h4>6. AYIPLI ÜRÜN</h4>
<p>6.1. Teslim edilen ürünün ayıplı (hatalı, eksik, tanıtıma uygun olmayan) olması durumunda, ALICI 6502 sayılı Kanun kapsamındaki haklarını kullanabilir.</p>
<p>6.2. Ayıplı ürün tespitinde, ürünün onarımını, değiştirilmesini, ayıp oranında bedel indirimini veya sözleşmeden dönmeyi talep edebilirsiniz.</p>

<h4>7. İLETİŞİM</h4>
<p>İptal ve iade talepleriniz için:</p>
<ul>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
</ul>
`,
      en: `
<h3>CANCELLATION AND REFUND POLICY</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>
<p>This Cancellation and Refund Policy has been prepared within the framework of the Consumer Protection Law No. 6502 and the Regulation on Distance Contracts.</p>

<h4>1. ORDER CANCELLATION</h4>
<p>1.1. The BUYER may request order cancellation before the order is shipped. To cancel an order, an email must be sent to ${COMPANY.email} or a call must be made to ${COMPANY.phone}.</p>
<p>1.2. Cancellation requests are not accepted for orders that have already been shipped; in this case, the BUYER may exercise the right of withdrawal.</p>
<p>1.3. When an order is cancelled, the payment is refunded to the BUYER through the same payment method within 14 (fourteen) days at the latest.</p>
<p>1.4. For payments made by credit card, the refund is reflected in the account according to the relevant bank's procedures. The refund period may vary depending on the bank.</p>

<h4>2. RIGHT OF WITHDRAWAL AND RETURN</h4>
<p>2.1. The BUYER may exercise the right of withdrawal within 14 (fourteen) days from the date of receiving the product without stating any reason and without paying any penalty.</p>
<p>2.2. For the right of withdrawal to be exercised:</p>
<ul>
  <li>The product must be unused</li>
  <li>The product packaging must be unopened, untorn, or undamaged</li>
  <li>The product must be returned with its original protective packaging</li>
  <li>All accessories and documents sent with the product, if any, must be returned completely</li>
</ul>
<p>2.3. The withdrawal notification must be made by email to ${COMPANY.email}. The notification should include the order number, product name, and reason for withdrawal (optional).</p>

<h4>3. RETURN PROCESS</h4>
<p>3.1. After the withdrawal notification reaches the SELLER, the necessary information for the return is sent to the BUYER by email.</p>
<p>3.2. The BUYER is obligated to return the product to the SELLER within 10 (ten) days from the withdrawal notification.</p>
<p>3.3. Return shipping costs are borne by the BUYER.</p>
<p>3.4. After the product is inspected by the SELLER, if it is found to comply with the return conditions, the payment refund process is initiated.</p>
<p>3.5. The payment refund is made within 14 (fourteen) days at the latest from the receipt of the product by the SELLER, through the same payment method used by the BUYER.</p>

<h4>4. CASES WHERE RETURNS ARE NOT ACCEPTED</h4>
<p>Returns are not accepted in the following cases:</p>
<ul>
  <li>If the product has been used or damaged</li>
  <li>If the packaging has been opened, torn, or damaged</li>
  <li>If the 14-day withdrawal period has expired</li>
  <li>Works ordered/produced upon special request of the BUYER (commission artworks)</li>
  <li>Products that have been personalized or customized</li>
</ul>

<h4>5. DAMAGED PRODUCT DELIVERY</h4>
<p>5.1. If the product is found to be damaged during cargo delivery, the BUYER must have a report drawn up in the presence of the cargo officer.</p>
<p>5.2. Photos of the damaged product and the report must be reported by email to ${COMPANY.email} within 48 hours.</p>
<p>5.3. For damages that occur during the shipping process, the product is replaced free of charge or a refund is issued. In this case, the return shipping cost is covered by the SELLER.</p>

<h4>6. DEFECTIVE PRODUCTS</h4>
<p>6.1. If the delivered product is defective (faulty, incomplete, not conforming to the description), the BUYER may exercise their rights under Law No. 6502.</p>
<p>6.2. In the case of a defective product, you may request repair, replacement, a price reduction proportional to the defect, or cancellation of the agreement.</p>

<h4>7. CONTACT</h4>
<p>For your cancellation and return requests:</p>
<ul>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
</ul>
`,
    },
  },

  // ──────────────────────────────────────────────
  // 4. GARANTİ VE TESLİMAT ŞARTLARI
  // ──────────────────────────────────────────────
  {
    id: 'warranty',
    hashRoute: 'legal-warranty',
    title: {
      tr: 'Garanti ve Teslimat Şartları',
      en: 'Warranty and Delivery Terms',
    },
    content: {
      tr: `
<h3>GARANTİ VE TESLİMAT ŞARTLARI</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>

<h4>1. GARANTİ KAPSAMI</h4>
<p>1.1. ${COMPANY.name} tarafından satışa sunulan tüm orijinal sanat eserleri, orijinallik garantisi ile birlikte teslim edilir. Her eser, sanatçı tarafından imzalanmış ve numaralandırılmıştır.</p>
<p>1.2. Sanat eserleri, doğaları gereği el yapımı ve tek üretim ürünlerdir. Bu nedenle, standart endüstriyel garanti kapsamında değerlendirilmezler. Ancak, üretim kaynaklı malzeme ve işçilik hatalarına karşı teslim tarihinden itibaren 1 (bir) yıl garanti verilmektedir.</p>
<p>1.3. Garanti kapsamına giren durumlar:</p>
<ul>
  <li>Boya dökülmesi veya çatlaması (normal kullanım koşullarında)</li>
  <li>Tuval veya zemin malzemesindeki üretim kaynaklı hatalar</li>
  <li>Çerçeve veya montaj malzemelerindeki yapısal kusurlar</li>
</ul>
<p>1.4. Garanti kapsamı dışında kalan durumlar:</p>
<ul>
  <li>Kullanıcı kaynaklı fiziksel hasar (düşürme, darbe, çizik vb.)</li>
  <li>Doğrudan güneş ışığına maruz kalma sonucu oluşan renk solması</li>
  <li>Nem, su veya aşırı sıcaklık gibi uygun olmayan ortam koşullarından kaynaklanan hasarlar</li>
  <li>Yetkisiz onarım veya müdahale sonucu oluşan hasarlar</li>
</ul>

<h4>2. ORİJİNALLİK SERTİFİKASI</h4>
<p>2.1. Her sanat eseri, orijinallik sertifikası ile birlikte teslim edilir.</p>
<p>2.2. Sertifika; eserin adı, boyutları, tekniği, malzemeleri, üretim yılı ve sanatçı bilgilerini içerir.</p>
<p>2.3. Orijinallik sertifikası, eserin yeniden satışında veya sigortalanmasında referans belgesi olarak kullanılabilir.</p>

<h4>3. TESLİMAT ŞARTLARI</h4>
<p>3.1. <strong>Hazırlık Süresi:</strong> Siparişler, ödeme onayından itibaren 1-5 iş günü içinde hazırlanır. Özel sipariş (komisyon) eserlerde hazırlık süresi, eserin niteliğine göre farklılık gösterebilir ve sipariş sırasında ayrıca bildirilir.</p>
<p>3.2. <strong>Paketleme:</strong> Sanat eserleri, nakliye sırasında hasar görmemesi için özel koruyucu malzemeler (köpük, balonlu naylon, sert karton kutu) ile paketlenir.</p>
<p>3.3. <strong>Kargo:</strong> Teslimat, anlaşmalı kargo firması aracılığıyla yapılır. Kargo takip numarası, ürün kargoya verildiğinde ALICI'ya e-posta ile bildirilir.</p>
<p>3.4. <strong>Teslimat Süreleri:</strong></p>
<ul>
  <li>Yurt içi teslimat: 3-7 iş günü</li>
  <li>Yurt dışı teslimat: 7-15 iş günü (gümrük işlemleri hariç)</li>
</ul>
<p>3.5. <strong>Kargo Ücreti:</strong> Kargo ücreti, ürünün boyutu, ağırlığı ve teslimat adresine göre belirlenir ve sipariş özeti sayfasında gösterilir. Belirli tutarın üzerindeki siparişlerde ücretsiz kargo uygulanabilir.</p>
<p>3.6. <strong>Teslimat Sorumluluğu:</strong> Ürün, kargo firmasına teslim edilene kadar SATICI'nın, kargo firmasına tesliminden sonra kargo firmasının sorumluluğundadır.</p>

<h4>4. TESLİMAT SIRASINDA DİKKAT EDİLMESİ GEREKENLER</h4>
<ul>
  <li>Kargo paketini teslim alırken dış ambalajı kontrol ediniz</li>
  <li>Ambalajda hasar varsa, kargo görevlisinin huzurunda tutanak tutturunuz</li>
  <li>Hasarlı ürün fotoğraflarını çekip 48 saat içinde ${COMPANY.email} adresine bildiriniz</li>
  <li>Tutanaksız teslimat alındığında, hasar tespit sorumluluğu ALICI'ya geçer</li>
</ul>

<h4>5. SANAT ESERİ BAKIM ÖNERİLERİ</h4>
<ul>
  <li>Eseri doğrudan güneş ışığından uzak, serin ve kuru bir ortamda muhafaza ediniz</li>
  <li>Yüzeyi temizlemek için yumuşak ve kuru bir bez kullanınız; kimyasal temizleyici kullanmayınız</li>
  <li>Eseri nem oranı yüksek veya aşırı sıcak ortamlarda bulundurmayınız</li>
  <li>Duvara montaj sırasında uygun askı malzemeleri kullanınız</li>
</ul>

<h4>6. İLETİŞİM</h4>
<p>Garanti ve teslimat ile ilgili sorularınız için:</p>
<ul>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
</ul>
`,
      en: `
<h3>WARRANTY AND DELIVERY TERMS</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>

<h4>1. WARRANTY SCOPE</h4>
<p>1.1. All original artworks offered for sale by ${COMPANY.name} are delivered with a certificate of authenticity. Each piece is signed and numbered by the artist.</p>
<p>1.2. Artworks are handmade and unique products by nature. Therefore, they are not evaluated under standard industrial warranty coverage. However, a warranty of 1 (one) year from the date of delivery is provided against manufacturing-related material and workmanship defects.</p>
<p>1.3. Situations covered by the warranty:</p>
<ul>
  <li>Paint peeling or cracking (under normal use conditions)</li>
  <li>Manufacturing-related defects in canvas or base materials</li>
  <li>Structural defects in frame or mounting materials</li>
</ul>
<p>1.4. Situations not covered by the warranty:</p>
<ul>
  <li>Physical damage caused by the user (dropping, impact, scratching, etc.)</li>
  <li>Color fading resulting from direct sunlight exposure</li>
  <li>Damages caused by unsuitable environmental conditions such as humidity, water, or extreme temperatures</li>
  <li>Damages resulting from unauthorized repair or intervention</li>
</ul>

<h4>2. CERTIFICATE OF AUTHENTICITY</h4>
<p>2.1. Each artwork is delivered with a certificate of authenticity.</p>
<p>2.2. The certificate includes the name, dimensions, technique, materials, production year, and artist information of the piece.</p>
<p>2.3. The certificate of authenticity can be used as a reference document for resale or insurance of the artwork.</p>

<h4>3. DELIVERY TERMS</h4>
<p>3.1. <strong>Preparation Time:</strong> Orders are prepared within 1-5 business days from payment confirmation. For custom order (commission) artworks, preparation time may vary depending on the nature of the piece and will be communicated separately at the time of order.</p>
<p>3.2. <strong>Packaging:</strong> Artworks are packaged with special protective materials (foam, bubble wrap, rigid cardboard box) to prevent damage during transportation.</p>
<p>3.3. <strong>Shipping:</strong> Delivery is made through the contracted shipping company. The cargo tracking number is communicated to the BUYER by email when the product is shipped.</p>
<p>3.4. <strong>Delivery Times:</strong></p>
<ul>
  <li>Domestic delivery: 3-7 business days</li>
  <li>International delivery: 7-15 business days (excluding customs procedures)</li>
</ul>
<p>3.5. <strong>Shipping Cost:</strong> Shipping cost is determined based on the size, weight of the product, and the delivery address, and is shown on the order summary page. Free shipping may apply for orders above a certain amount.</p>
<p>3.6. <strong>Delivery Responsibility:</strong> The product is the responsibility of the SELLER until it is handed over to the shipping company, and the responsibility of the shipping company after handover.</p>

<h4>4. POINTS TO NOTE DURING DELIVERY</h4>
<ul>
  <li>Check the outer packaging when receiving the cargo package</li>
  <li>If there is damage to the packaging, have a report drawn up in the presence of the cargo officer</li>
  <li>Take photos of damaged products and report to ${COMPANY.email} within 48 hours</li>
  <li>When delivery is accepted without a report, the responsibility for damage detection passes to the BUYER</li>
</ul>

<h4>5. ARTWORK CARE RECOMMENDATIONS</h4>
<ul>
  <li>Keep the artwork in a cool and dry environment away from direct sunlight</li>
  <li>Use a soft, dry cloth to clean the surface; do not use chemical cleaners</li>
  <li>Do not keep the artwork in environments with high humidity or extreme heat</li>
  <li>Use appropriate hanging materials when mounting on a wall</li>
</ul>

<h4>6. CONTACT</h4>
<p>For questions regarding warranty and delivery:</p>
<ul>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
</ul>
`,
    },
  },

  // ──────────────────────────────────────────────
  // 5. KVKK AYDINLATMA METNİ
  // ──────────────────────────────────────────────
  {
    id: 'kvkk',
    hashRoute: 'legal-kvkk',
    title: {
      tr: 'KVKK Aydınlatma Metni',
      en: 'Personal Data Protection Notice',
    },
    content: {
      tr: `
<h3>KİŞİSEL VERİLERİN KORUNMASI HAKKINDA AYDINLATMA METNİ</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>
<p>${COMPANY.name} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizin hukuka uygun olarak işlenmesi ve korunması konusunda azami hassasiyet göstermekteyiz. İşbu Aydınlatma Metni, KVKK'nın 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında hazırlanmıştır.</p>

<h4>1. VERİ SORUMLUSU</h4>
<ul>
  <li><strong>Ünvan:</strong> ${COMPANY.name}</li>
  <li><strong>Adres:</strong> ${COMPANY.address}</li>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
</ul>

<h4>2. İŞLENEN KİŞİSEL VERİLER</h4>
<p>Tarafımızca işlenen kişisel veri kategorileri ve kapsamları aşağıda belirtilmiştir:</p>
<table>
  <tr><th>Veri Kategorisi</th><th>İşlenen Veriler</th></tr>
  <tr><td>Kimlik Bilgileri</td><td>Ad, soyad, T.C. kimlik numarası</td></tr>
  <tr><td>İletişim Bilgileri</td><td>E-posta adresi, telefon numarası, teslimat adresi</td></tr>
  <tr><td>Finansal Bilgiler</td><td>Fatura bilgileri, ödeme geçmişi (kredi kartı bilgileri tarafımızca saklanmamaktadır; ödemeler PayTR altyapısı üzerinden işlenmektedir)</td></tr>
  <tr><td>İşlem Güvenliği</td><td>IP adresi, oturum bilgileri, işlem logları</td></tr>
  <tr><td>Müşteri İşlem Bilgileri</td><td>Sipariş geçmişi, talep ve şikayet kayıtları</td></tr>
</table>

<h4>3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI</h4>
<p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
<ul>
  <li>Sipariş süreçlerinin yürütülmesi ve ürün teslimatının gerçekleştirilmesi</li>
  <li>Ödeme işlemlerinin güvenli bir şekilde tamamlanması</li>
  <li>Fatura düzenlenmesi ve muhasebe kayıtlarının tutulması</li>
  <li>Müşteri talep ve şikayetlerinin değerlendirilmesi ve yanıtlanması</li>
  <li>Yasal yükümlülüklerin yerine getirilmesi (vergi mevzuatı, tüketici hakları vb.)</li>
  <li>İletişim faaliyetlerinin yürütülmesi</li>
  <li>Bilgi güvenliği süreçlerinin yönetilmesi</li>
  <li>Açık rızanızın bulunması halinde, kampanya ve promosyon bilgilendirmeleri</li>
</ul>

<h4>4. KİŞİSEL VERİLERİN İŞLENME HUKUKİ SEBEPLERİ</h4>
<p>Kişisel verileriniz, KVKK'nın 5. maddesi kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
<ul>
  <li><strong>Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</strong> (sipariş, teslimat, ödeme işlemleri)</li>
  <li><strong>Kanunlarda açıkça öngörülmesi</strong> (vergi mevzuatı, e-ticaret mevzuatı)</li>
  <li><strong>Veri sorumlusunun meşru menfaati</strong> (bilgi güvenliği, hizmet kalitesinin artırılması)</li>
  <li><strong>Açık rıza</strong> (pazarlama iletişimleri, kampanya bildirimleri)</li>
</ul>

<h4>5. KİŞİSEL VERİLERİN AKTARILMASI</h4>
<p>Kişisel verileriniz, yukarıda belirtilen amaçlarla sınırlı olmak kaydıyla aşağıdaki kişi ve kuruluşlara aktarılabilir:</p>
<ul>
  <li><strong>Ödeme kuruluşu:</strong> PayTR (ödeme işlemlerinin gerçekleştirilmesi amacıyla)</li>
  <li><strong>Kargo firmaları:</strong> Ürün teslimatının sağlanması amacıyla</li>
  <li><strong>Yasal otoriteler:</strong> Kanuni yükümlülüklerin yerine getirilmesi amacıyla yetkili kamu kurum ve kuruluşları</li>
  <li><strong>Mali müşavir/muhasebeci:</strong> Fatura ve muhasebe işlemlerinin yürütülmesi amacıyla</li>
</ul>
<p>Kişisel verileriniz, açık rızanız olmaksızın yurt dışına aktarılmamaktadır.</p>

<h4>6. KİŞİSEL VERİLERİN SAKLANMA SÜRESİ</h4>
<p>Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanır:</p>
<ul>
  <li>Ticari defter ve belgelere ilişkin veriler: 10 yıl (TTK md. 82)</li>
  <li>Fatura ve mali belgeler: 5 yıl (VUK md. 253)</li>
  <li>Tüketici işlemlerine ilişkin veriler: 3 yıl (6502 sayılı Kanun zamanaşımı)</li>
  <li>Elektronik ticaret kayıtları: 3 yıl (6563 sayılı Kanun)</li>
</ul>

<h4>7. VERİ SAHİBİNİN HAKLARI</h4>
<p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
<ul>
  <li>a) Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
  <li>b) Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
  <li>c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
  <li>d) Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
  <li>e) Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
  <li>f) KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
  <li>g) Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
  <li>h) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
  <li>i) Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
</ul>

<h4>8. BAŞVURU YÖNTEMİ</h4>
<p>Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle tarafımıza başvurabilirsiniz:</p>
<ul>
  <li><strong>E-posta:</strong> ${COMPANY.email} adresine "KVKK Bilgi Talebi" konulu e-posta göndererek</li>
  <li><strong>Posta:</strong> ${COMPANY.address} adresine ıslak imzalı dilekçe göndererek</li>
</ul>
<p>Başvurularınız, talebinizin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınır.</p>
`,
      en: `
<h3>PERSONAL DATA PROTECTION NOTICE</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>
<p>As ${COMPANY.name}, in the capacity of data controller within the scope of the Personal Data Protection Law No. 6698 ("KVKK"), we show the utmost care in the lawful processing and protection of your personal data. This Notice has been prepared within the scope of Article 10 of the KVKK and the Communiqué on Procedures and Principles to be Followed in Fulfilling the Obligation to Inform.</p>

<h4>1. DATA CONTROLLER</h4>
<ul>
  <li><strong>Company:</strong> ${COMPANY.name}</li>
  <li><strong>Address:</strong> ${COMPANY.address}</li>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
</ul>

<h4>2. PERSONAL DATA PROCESSED</h4>
<p>The categories and scope of personal data processed by us are stated below:</p>
<table>
  <tr><th>Data Category</th><th>Data Processed</th></tr>
  <tr><td>Identity Information</td><td>Name, surname, national ID number</td></tr>
  <tr><td>Contact Information</td><td>Email address, phone number, delivery address</td></tr>
  <tr><td>Financial Information</td><td>Invoice information, payment history (credit card information is NOT stored by us; payments are processed through PayTR infrastructure)</td></tr>
  <tr><td>Transaction Security</td><td>IP address, session information, transaction logs</td></tr>
  <tr><td>Customer Transaction Information</td><td>Order history, request and complaint records</td></tr>
</table>

<h4>3. PURPOSES OF PROCESSING PERSONAL DATA</h4>
<p>Your personal data is processed for the following purposes:</p>
<ul>
  <li>Execution of order processes and product delivery</li>
  <li>Secure completion of payment transactions</li>
  <li>Invoice preparation and maintenance of accounting records</li>
  <li>Evaluation and response to customer requests and complaints</li>
  <li>Fulfillment of legal obligations (tax legislation, consumer rights, etc.)</li>
  <li>Execution of communication activities</li>
  <li>Management of information security processes</li>
  <li>Campaign and promotion notifications with your explicit consent</li>
</ul>

<h4>4. LEGAL GROUNDS FOR PROCESSING PERSONAL DATA</h4>
<p>Your personal data is processed based on the following legal grounds within the scope of Article 5 of the KVKK:</p>
<ul>
  <li><strong>Directly related to the establishment or performance of a contract</strong> (ordering, delivery, payment transactions)</li>
  <li><strong>Expressly provided for by law</strong> (tax legislation, e-commerce legislation)</li>
  <li><strong>Legitimate interest of the data controller</strong> (information security, service quality improvement)</li>
  <li><strong>Explicit consent</strong> (marketing communications, campaign notifications)</li>
</ul>

<h4>5. TRANSFER OF PERSONAL DATA</h4>
<p>Your personal data may be transferred to the following persons and organizations, limited to the purposes stated above:</p>
<ul>
  <li><strong>Payment institution:</strong> PayTR (for the purpose of processing payment transactions)</li>
  <li><strong>Cargo companies:</strong> For the purpose of providing product delivery</li>
  <li><strong>Legal authorities:</strong> Authorized public institutions and organizations for the purpose of fulfilling legal obligations</li>
  <li><strong>Financial advisor/accountant:</strong> For the purpose of executing invoice and accounting transactions</li>
</ul>
<p>Your personal data is not transferred abroad without your explicit consent.</p>

<h4>6. RETENTION PERIOD OF PERSONAL DATA</h4>
<p>Your personal data is retained for the duration required by the processing purposes and during the statute of limitations periods prescribed in the relevant legislation:</p>
<ul>
  <li>Data related to commercial books and documents: 10 years</li>
  <li>Invoices and financial documents: 5 years</li>
  <li>Data related to consumer transactions: 3 years</li>
  <li>Electronic commerce records: 3 years</li>
</ul>

<h4>7. RIGHTS OF THE DATA SUBJECT</h4>
<p>Pursuant to Article 11 of the KVKK, you have the following rights:</p>
<ul>
  <li>a) To learn whether your personal data is being processed</li>
  <li>b) To request information if your personal data has been processed</li>
  <li>c) To learn the purpose of processing personal data and whether they are used in accordance with their purpose</li>
  <li>d) To know the third parties to whom your personal data is transferred domestically or abroad</li>
  <li>e) To request correction of your personal data if it has been processed incompletely or incorrectly</li>
  <li>f) To request deletion or destruction of your personal data within the framework of the conditions set out in Article 7 of the KVKK</li>
  <li>g) To request that correction, deletion, and destruction operations be notified to third parties to whom your personal data has been transferred</li>
  <li>h) To object to the emergence of a result against you through the analysis of processed data exclusively by automated systems</li>
  <li>i) To claim compensation for damages suffered due to unlawful processing of your personal data</li>
</ul>

<h4>8. APPLICATION METHOD</h4>
<p>To exercise the above-mentioned rights, you may contact us through the following methods:</p>
<ul>
  <li><strong>Email:</strong> By sending an email with the subject "KVKK Information Request" to ${COMPANY.email}</li>
  <li><strong>Mail:</strong> By sending a wet-signed petition to ${COMPANY.address}</li>
</ul>
<p>Your applications will be concluded free of charge as soon as possible and within 30 (thirty) days at the latest, depending on the nature of your request. If the process requires an additional cost, the fee determined by the Personal Data Protection Board will be charged.</p>
`,
    },
  },

  // ──────────────────────────────────────────────
  // 6. ÇEREZ POLİTİKASI
  // ──────────────────────────────────────────────
  {
    id: 'cookies',
    hashRoute: 'legal-cookies',
    title: {
      tr: 'Çerez Politikası',
      en: 'Cookie Policy',
    },
    content: {
      tr: `
<h3>ÇEREZ POLİTİKASI</h3>
<p><strong>Son Güncelleme:</strong> ${COMPANY.lastUpdated}</p>
<p>${COMPANY.name} olarak, web sitemizi ziyaret ettiğinizde size en iyi deneyimi sunabilmek için çerezler (cookies) kullanmaktayız. Bu Çerez Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve 5809 sayılı Elektronik Haberleşme Kanunu kapsamında hazırlanmıştır.</p>

<h4>1. ÇEREZ NEDİR?</h4>
<p>Çerezler, web sitelerinin cihazınıza (bilgisayar, tablet veya cep telefonu) yerleştirdiği küçük metin dosyalarıdır. Çerezler, web sitesinin düzgün çalışması, güvenliğinin sağlanması, kullanıcı deneyiminin iyileştirilmesi ve site performansının analiz edilmesi amacıyla yaygın olarak kullanılmaktadır.</p>

<h4>2. KULLANILAN ÇEREZ TÜRLERİ</h4>

<p><strong>2.1. Zorunlu Çerezler</strong></p>
<p>Bu çerezler, web sitesinin temel işlevlerini yerine getirmesi için gereklidir ve devre dışı bırakılamaz. Kişisel veri içermezler.</p>
<ul>
  <li>Oturum çerezleri (session cookies)</li>
  <li>Güvenlik çerezleri</li>
  <li>Dil tercihi çerezleri</li>
</ul>

<p><strong>2.2. İşlevsel Çerezler</strong></p>
<p>Bu çerezler, dil tercihiniz ve tema seçiminiz gibi kişiselleştirme ayarlarınızı hatırlamak için kullanılır.</p>
<ul>
  <li>Dil seçimi (Türkçe/İngilizce)</li>
  <li>Kullanıcı tercih ayarları</li>
</ul>

<p><strong>2.3. Analitik Çerezler</strong></p>
<p>Bu çerezler, ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olur. Toplanan veriler anonim olarak işlenir ve doğrudan kimlik tespitine imkan vermez.</p>
<ul>
  <li>Sayfa görüntüleme istatistikleri</li>
  <li>Ziyaretçi sayısı ve trafik kaynakları</li>
  <li>Sitede geçirilen süre</li>
</ul>

<p><strong>2.4. Ödeme Çerezleri</strong></p>
<p>Ödeme sürecinde PayTR ödeme altyapısı tarafından güvenli ödeme işleminin gerçekleştirilmesi amacıyla kullanılan çerezlerdir.</p>
<ul>
  <li>Ödeme oturumu güvenlik çerezleri</li>
  <li>Dolandırıcılık önleme çerezleri</li>
</ul>

<h4>3. ÇEREZ SAKLAMA SÜRELERİ</h4>
<table>
  <tr><th>Çerez Türü</th><th>Saklama Süresi</th></tr>
  <tr><td>Oturum Çerezleri</td><td>Tarayıcı kapatıldığında silinir</td></tr>
  <tr><td>Dil Tercihi</td><td>1 yıl</td></tr>
  <tr><td>Analitik Çerezler</td><td>2 yıl</td></tr>
  <tr><td>Ödeme Güvenlik Çerezleri</td><td>Ödeme oturumu sonunda silinir</td></tr>
</table>

<h4>4. ÇEREZ YÖNETİMİ</h4>
<p>Tarayıcınızın ayarlarını değiştirerek çerezleri kontrol edebilir veya silebilirsiniz. Ancak zorunlu çerezlerin devre dışı bırakılması, web sitesinin bazı özelliklerinin düzgün çalışmamasına neden olabilir.</p>
<p>Çerez ayarlarınızı yönetmek için tarayıcınızın ayarlar bölümünü kullanabilirsiniz:</p>
<ul>
  <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
  <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
  <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
  <li><strong>Edge:</strong> Ayarlar → Gizlilik, Arama ve Hizmetler → Çerezler</li>
</ul>

<h4>5. ÜÇÜNCÜ TARAF ÇEREZLERİ</h4>
<p>Web sitemizde aşağıdaki üçüncü taraf hizmetlerinin çerezleri kullanılabilir:</p>
<ul>
  <li><strong>PayTR:</strong> Güvenli ödeme işlemleri için</li>
  <li><strong>Web3Forms:</strong> İletişim formu gönderimi için</li>
</ul>
<p>Üçüncü taraf çerezleri hakkında detaylı bilgi için ilgili hizmet sağlayıcıların çerez politikalarını inceleyebilirsiniz.</p>

<h4>6. DEĞİŞİKLİKLER</h4>
<p>Bu Çerez Politikası, gerekli görüldüğünde güncellenebilir. Güncellemeler web sitemizde yayınlandığı tarihte yürürlüğe girer. Son güncelleme tarihi sayfanın üst kısmında belirtilmektedir.</p>

<h4>7. İLETİŞİM</h4>
<p>Çerez politikamız hakkında sorularınız için:</p>
<ul>
  <li><strong>E-posta:</strong> ${COMPANY.email}</li>
  <li><strong>Telefon:</strong> ${COMPANY.phone}</li>
</ul>
`,
      en: `
<h3>COOKIE POLICY</h3>
<p><strong>Last Updated:</strong> ${COMPANY.lastUpdated}</p>
<p>As ${COMPANY.name}, we use cookies when you visit our website to provide you with the best experience. This Cookie Policy has been prepared within the scope of the Personal Data Protection Law No. 6698 and the Electronic Communications Law No. 5809.</p>

<h4>1. WHAT IS A COOKIE?</h4>
<p>Cookies are small text files that websites place on your device (computer, tablet, or mobile phone). Cookies are widely used to ensure the proper functioning of websites, provide security, improve user experience, and analyze site performance.</p>

<h4>2. TYPES OF COOKIES USED</h4>

<p><strong>2.1. Essential Cookies</strong></p>
<p>These cookies are necessary for the website to perform its basic functions and cannot be disabled. They do not contain personal data.</p>
<ul>
  <li>Session cookies</li>
  <li>Security cookies</li>
  <li>Language preference cookies</li>
</ul>

<p><strong>2.2. Functional Cookies</strong></p>
<p>These cookies are used to remember your personalization settings such as language preference and theme selection.</p>
<ul>
  <li>Language selection (Turkish/English)</li>
  <li>User preference settings</li>
</ul>

<p><strong>2.3. Analytical Cookies</strong></p>
<p>These cookies help us understand how visitors use the website. The collected data is processed anonymously and does not allow direct identification.</p>
<ul>
  <li>Page view statistics</li>
  <li>Visitor count and traffic sources</li>
  <li>Time spent on site</li>
</ul>

<p><strong>2.4. Payment Cookies</strong></p>
<p>These are cookies used by the PayTR payment infrastructure during the payment process to ensure secure payment processing.</p>
<ul>
  <li>Payment session security cookies</li>
  <li>Fraud prevention cookies</li>
</ul>

<h4>3. COOKIE RETENTION PERIODS</h4>
<table>
  <tr><th>Cookie Type</th><th>Retention Period</th></tr>
  <tr><td>Session Cookies</td><td>Deleted when browser is closed</td></tr>
  <tr><td>Language Preference</td><td>1 year</td></tr>
  <tr><td>Analytical Cookies</td><td>2 years</td></tr>
  <tr><td>Payment Security Cookies</td><td>Deleted at the end of payment session</td></tr>
</table>

<h4>4. COOKIE MANAGEMENT</h4>
<p>You can control or delete cookies by changing your browser settings. However, disabling essential cookies may cause some features of the website to not function properly.</p>
<p>You can use the settings section of your browser to manage your cookie settings:</p>
<ul>
  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
  <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
</ul>

<h4>5. THIRD-PARTY COOKIES</h4>
<p>Cookies from the following third-party services may be used on our website:</p>
<ul>
  <li><strong>PayTR:</strong> For secure payment transactions</li>
  <li><strong>Web3Forms:</strong> For contact form submission</li>
</ul>
<p>For detailed information about third-party cookies, you can review the cookie policies of the relevant service providers.</p>

<h4>6. CHANGES</h4>
<p>This Cookie Policy may be updated when necessary. Updates take effect on the date they are published on our website. The last update date is indicated at the top of the page.</p>

<h4>7. CONTACT</h4>
<p>For questions about our cookie policy:</p>
<ul>
  <li><strong>Email:</strong> ${COMPANY.email}</li>
  <li><strong>Phone:</strong> ${COMPANY.phone}</li>
</ul>
`,
    },
  },
];

export const getLegalDocument = (id: string): LegalDocument | undefined => {
  return legalDocuments.find((doc) => doc.id === id);
};

export const getLegalDocumentByHash = (hash: string): LegalDocument | undefined => {
  return legalDocuments.find((doc) => doc.hashRoute === hash);
};
