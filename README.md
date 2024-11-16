# Note App

Bu uygulama, kullanıcıların notlarını ekleyebileceği, düzenleyebileceği ve silebileceği bir web uygulamasıdır. Kullanıcılar notlarını ekledikten sonra notlar, localStoragede tutulur ve istemedikleri sürece notları silinmez.

## Özellikler
- Yeni Not Ekleme: Kullanıcılar yeni notlar ekleyebilir. Her not bir başlık ve açıklama içerir.
- Not Düzenleme: Kullanıcılar, mevcut notları düzenleyebilir.
- Not Silme: Kullanıcılar, istedikleri notları silebilirler.
- Veri Saklama: Eklenen notlar localStorage'da saklanır, böylece sayfa yenilendiğinde veriler kaybolmaz.

<img src="https://github.com/user-attachments/assets/50cb5ffc-3ed4-4c4d-b7d6-a5d8ef11a550" width="400" height="200" />
<img src="https://github.com/user-attachments/assets/1385bb63-d5be-431e-b2c2-27c27a3e2fbd" width="400" height="200" />
<img src="https://github.com/user-attachments/assets/e7dbe41b-dd7f-4036-847d-d2a1012b12df" width="400" height="200" />


## Kullanılan Teknolojiler:
- HTML5: Yapı için
- CSS3: Stil ve düzen için
- JavaScript (Vanilla JS): Dinamik işlevler ve veri yönetimi için

# Kullanım
## Kurulum
Bu projeyi bilgisayarınıza indirip çalıştırabilirsiniz. Aşağıdaki adımları takip ederek projeyi başlatabilirsiniz:

```bash
git clone <repository-url>
cd <project-directory>
```
Projeyi herhangi bir modern web tarayıcısında açabilirsiniz. İlgili dosya: index.html.

## Özellikler:
### Not Eklemek
- Not kartının üzerinde bulunan artı butonuna tıklayın.
- Notun başlığını ve açıklamasını girin.
- Add Note butonuna tıklayarak notu kaydedin.

### Not Düzenlemek
- Her notun sağ alt kısmında bulunan üç nokta menüsüne tıklayın.
- Açılan menüden Edit seçeneğine tıklayın.
- Notu düzenleyip Update Note butonuna tıklayarak değişiklikleri kaydedin.

### Not Silmek
- Her notun sağ alt kısmında bulunan üç nokta menüsüne tıklayın.
- Açılan menüden Delete seçeneğine tıklayın.
- Silme işlemi onay penceresi ile doğrulanacaktır.
- Silinen not localStorageden de silinecektir.

## Verilerin Saklanması - localStorage:
Bu uygulama, localStorage kullanarak notları tarayıcıda saklar. localStorage, tarayıcı bazında verilerin kalıcı olarak saklanmasını sağlayan bir web API'sidir. Bu sayede kullanıcı sayfayı yenilese veya tarayıcıyı kapatsa bile eklediği notlar kaybolmaz ve her seferinde kullanıcı tekrar aynı verilerle karşılaşır.

### localStorage Nedir?
- localStorage, tarayıcı üzerinde verilerin saklanmasını sağlayan bir JavaScript özelliğidir. Veriler, tarayıcı kapatıldığında bile silinmeden kalır. Yani, bu veriler kalıcıdır.
- localStorage, yalnızca metin verilerini (string) saklar. JavaScript objelerini veya dizileri saklamak için bunları JSON formatına çevirmeniz gerekir.
### Veri Saklama ve Alma:
#### Veri Saklama:
- Uygulama, notları saklamak için localStorage.setItem('notes', JSON.stringify(notes)) kullanır. Bu işlemle, notes dizisi JSON formatına dönüştürülüp, tarayıcıya kaydedilir.- 
- JSON.stringify(), bir JavaScript objesini veya dizisini JSON (text) formatına dönüştürür.
#### Veri Alma:
- Sayfa yeniden yüklendiğinde, saklanan verilere ulaşmak için localStorage.getItem('notes') kullanılır. Bu işlemle, daha önce kaydedilen JSON verisi alınır.
- Alınan veriler JSON formatında olduğu için, JSON.parse() ile tekrar JavaScript objesine dönüştürülür.
### Verilerin Kalıcılığı:
- localStorage'da saklanan veriler kalıcıdır ve sadece tarayıcıda saklanır. Yani, veri kaybı yaşanmaz ve tarayıcı kapandığında bile veriler saklanmaya devam eder.
- Ancak, localStorage verileri yalnızca tarayıcı bazında saklar. Eğer kullanıcı farklı bir tarayıcı veya cihaz kullanırsa, bu verilere erişilemez.
### Sınırlamalar:
- localStorage yalnızca tarayıcıda veri saklar, bu yüzden farklı cihazlarda veya tarayıcılarda veriler erişilemez.
- Veri saklama kapasitesi sınırlıdır (genellikle 5MB).
- localStorage'a kaydedilen veriler yalnızca metin (string) formatında olmalıdır. JavaScript objeleri veya dizileri saklamak için bu veriler JSON formatına dönüştürülmelidir.

## Demo:
Uygulamaya buradan ulaşabilirsiniz: https://6738945e5a707d51d7f0e13c--melike-note-app.netlify.app/
