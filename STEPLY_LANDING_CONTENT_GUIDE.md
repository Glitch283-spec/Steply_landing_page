# Steply Landing Page — Project & Content Guide

Tài liệu này là nguồn tham chiếu để mở rộng landing page quảng bá Steply. Nội dung phân biệt tính năng đang có trong source với định hướng tương lai để tránh quảng cáo quá mức.

## 1. Tổng quan dự án

**Steply** là ứng dụng di động hướng tới vận động hằng ngày theo mô hình Move-to-Earn. Sản phẩm khuyến khích người dùng hình thành thói quen đi bộ bằng cách theo dõi bước chân, đặt mục tiêu, tham gia nhiệm vụ và xem tiến trình/phần thưởng trong ứng dụng.

| Thành phần | Công nghệ | Vai trò |
|---|---|---|
| Mobile app | Flutter, Dart, BLoC, GoRouter | Ứng dụng Android/iOS cho người dùng cuối |
| Backend | Next.js App Router, TypeScript, PayloadCMS | REST API, quản trị nội dung và nghiệp vụ |
| Database | MongoDB qua PayloadCMS | Lưu hồ sơ, bước chân, giao dịch, nhiệm vụ và yêu cầu rút tiền |
| Landing page | React, Vite, Tailwind CSS, Lucide | Website giới thiệu và tải ứng dụng, độc lập tại `Steply-Landing/` |

Backend dùng MongoDB Replica Set cho các nghiệp vụ cần transaction. Landing page hiện là ứng dụng riêng, không nằm trong Flutter app hoặc Next.js admin.

## 2. Nhóm người dùng và giá trị sản phẩm

### Đối tượng chính

- Người muốn bắt đầu vận động nhẹ nhàng và theo dõi thói quen đi bộ.
- Người thích mục tiêu ngắn hạn, nhiệm vụ và cơ chế khích lệ.
- Người cần xem lịch sử hoạt động, số dư và giao dịch tại một nơi.

### Giá trị nên truyền tải

- Biến hoạt động đi bộ thường ngày thành tiến trình dễ quan sát.
- Kết hợp theo dõi bước chân, mục tiêu và phiên vận động.
- Tạo thêm động lực bằng nhiệm vụ, điểm danh và phần thưởng trong app.
- Giúp người dùng quản lý số dư và yêu cầu rút thưởng minh bạch.

**Định vị ngắn:** “Mỗi ngày tiến thêm một bước.”

## 3. Tính năng theo trạng thái source

### Đang có trong ứng dụng

| Nhóm | Nội dung phù hợp để giới thiệu |
|---|---|
| Tài khoản | Đăng ký/đăng nhập, chỉnh sửa thông tin cá nhân và avatar; có luồng xóa tài khoản |
| Theo dõi vận động | Theo dõi bước chân, phiên bắt đầu/kết thúc, thời gian, quãng đường và calories ước tính |
| Chạy nền | Có foreground service để duy trì phiên vận động khi app ở nền trên nền tảng được hỗ trợ |
| Lưu offline | Phiên có thể được lưu chờ khi mất kết nối và đồng bộ lại sau đó |
| Earn | Nhiệm vụ, điểm danh hằng ngày và luồng nhận thưởng quảng cáo có tích hợp API |
| Ví | Xem số dư/giao dịch và gửi yêu cầu rút tiền |
| Shop | Khu vực sản phẩm, giỏ hàng và giao diện checkout trong app |
| Chính sách | Màn hình điều khoản dịch vụ và chính sách quyền riêng tư trong app |

API Steply hiện có các route cho tracker sync/session, earn offers, claim-ad, check-in/status, wallet balance và wallet withdrawal request. Backend cũng có collections cho bước chân hằng ngày, giao dịch, earn offers và withdrawal requests.

### Có một phần hoặc cần kiểm chứng trước khi quảng cáo

| Nội dung | Cách diễn đạt thận trọng |
|---|---|
| Rút thưởng | “Gửi yêu cầu rút thưởng” hoặc “Theo dõi yêu cầu rút”; không nói tự động chuyển tiền nếu chưa xác nhận payout gateway |
| Anti-cheat | Có một số kiểm tra nghiệp vụ phía backend, nhưng chưa có đủ GPS/sensor/device attestation để tuyên bố chống gian lận toàn diện |
| Phần thưởng tiền thật | Cần xác nhận logic cộng số dư, giao dịch và quy trình duyệt trên môi trường thật. `transferPointsToUser` hiện còn là placeholder, vì vậy không cam kết khoản thu nhập hoặc thanh toán chắc chắn |
| Shop/checkout | Có giao diện shop và cart; chỉ mô tả thanh toán/đơn hàng là khả dụng sau khi xác minh luồng API trên production |
| Số liệu marketing | Không công bố số người dùng, tiền thưởng trung bình, tỷ lệ chuyển đổi hoặc calories chính xác nếu không có nguồn dữ liệu đã xác thực |

### Roadmap, chưa nên giới thiệu như tính năng hiện hành

- Đăng nhập bằng Apple.
- Theo dõi lộ trình GPS/waypoints và lưu lịch sử session chi tiết.
- Phát hiện gian lận bằng GPS, accelerometer/gyroscope, Google Play Integrity hoặc Apple App Attest.
- Voucher/quà tặng và hệ thống đổi điểm đầy đủ.
- Tự động chi trả payout tới ngân hàng/ví điện tử.
- Redis cho rate limit và dữ liệu realtime phân tán.

Roadmap có thể được cập nhật sau khi các hạng mục được triển khai, kiểm thử và xác nhận trên môi trường phát hành.

## 4. Hệ thống nhận diện thương hiệu

### Màu từ ứng dụng Flutter

| Token | Mã màu | Vai trò |
|---|---|---|
| `primaryGreen` | `#76B947` | Màu thương hiệu và hành động chính |
| `primaryGreenLight` | `#E8F5E9` | Nền xanh nhạt, trạng thái nhẹ |
| `accentOrange` | `#F79B35` | Nhấn cho thưởng, hoạt động nổi bật |
| `accentOrangeLight` | `#FFF3E0` | Nền phụ màu cam |
| `background` | `#F8F9FA` | Nền sáng |
| `surface` | `#FFFFFF` | Bề mặt nội dung |
| `textPrimary` | `#212529` | Nội dung chính |
| `textSecondary` | `#6C757D` | Nội dung phụ |
| `border` | `#E9ECEF` | Viền phân cách |
| `success` | `#28A745` | Trạng thái thành công |
| `error` | `#DC3545` | Lỗi/cảnh báo nghiêm trọng |

### Palette hiện dùng trên landing

Landing page dùng các biến tại `Steply-Landing/src/index.css`:

- Xanh thương hiệu web: `#278348`.
- Xanh rừng/nền CTA đậm: `#173E2B`.
- Nền giấy xanh rất nhạt: `#F7F8F3`.
- Coral phụ: `#EF8568`.
- Vàng ấm cho điểm nhấn CTA: `#F4C78B`.
- Text chính: `#172820`; text phụ: `#66746C`.

Giữ xanh lá làm màu nhận diện chính, dùng cam/vàng/coral ở mức điểm nhấn và nền trung tính sáng để tạo tương phản. Không tô toàn bộ trang bằng một sắc xanh, không dùng tím làm màu chủ đạo. Cần đảm bảo độ tương phản và trạng thái hover/focus rõ ràng.

### Font, hình ảnh và phong cách

- Landing hiện dùng **Manrope** cho tiêu đề và **DM Sans** cho nội dung.
- Logo chính thức: `Steply-App/assets/images/logo.png`; bản landing đặt tại `Steply-Landing/public/images/steply-logo.png`.
- App icon: `Steply-App/assets/images/ic_launcher.png`.
- Hình ảnh hiện tại dùng ảnh minh họa từ Unsplash và mockup giao diện được dựng bằng HTML/CSS. Khi có ảnh chụp thật từ app, nên thay mockup để tăng độ tin cậy.
- Phong cách: năng động, thân thiện, có nhịp điệu; ưu tiên ảnh hoạt động thật, dữ liệu sản phẩm dễ đọc, layout thoáng và micro-animation vừa phải.

## 5. Nội dung và cấu trúc landing hiện tại

1. **Hero:** “Mỗi ngày tiến thêm một bước.”, mô tả ngắn, CTA tải APK và liên kết khám phá.
2. **Preview:** mockup màn tracker với bước chân, calories, quãng đường, thời gian và cột mốc.
3. **Tính năng:** theo dõi bước, mục tiêu/cột mốc và nhiệm vụ/phần thưởng.
4. **Cách hoạt động:** kết nối chuyển động → đi bộ → xem cột mốc.
5. **Lưu offline:** thông điệp phiên vận động có thể lưu chờ để đồng bộ khi có mạng.
6. **Download CTA:** Android APK.
7. **FAQ:** thiết bị hỗ trợ, cách ghi nhận hoạt động, kết nối mạng.
8. **Footer:** thông điệp thương hiệu và lưu ý nền tảng.

### Thông điệp có thể dùng

- “Mỗi ngày tiến thêm một bước.”
- “Bước nhỏ hôm nay, thói quen khỏe mạnh ngày mai.”
- “Theo dõi chuyển động. Chạm mục tiêu. Giữ nhịp của riêng bạn.”
- “Không cần thay đổi tất cả. Chỉ cần bắt đầu từ một bước.”

### Giọng điệu

- Khích lệ, gần gũi, không phán xét người dùng.
- Tập trung vào tiến bộ và thói quen, không gây áp lực về thành tích.
- Viết tiếng Việt tự nhiên, câu ngắn, CTA cụ thể.
- Không dùng tuyên bố sức khỏe/y tế hoặc cam kết thu nhập nếu không có căn cứ.

## 6. Hướng mở rộng landing page

Các khối có thể bổ sung theo thứ tự ưu tiên:

1. **Ảnh chụp app thật:** tracker, earn/check-in, ví và lịch sử giao dịch.
2. **Chi tiết tính năng:** giải thích quyền truy cập dữ liệu bước chân, phiên vận động, offline sync và quyền riêng tư.
3. **Giải thích phần thưởng:** điều kiện nhận, cách tính, hạn mức, trạng thái yêu cầu rút và thời gian duyệt; chỉ hiển thị sau xác nhận nghiệp vụ.
4. **Bằng chứng tin cậy:** link privacy/terms, chính sách xóa tài khoản, thông tin hỗ trợ và email liên hệ.
5. **Store links:** Google Play/App Store khi app đã được phát hành ở các store.
6. **FAQ/Help:** quyền cảm biến, đồng bộ, tài khoản, rút thưởng, xử lý lỗi.
7. **Analytics có consent:** đo lượt bấm tải và nguồn truy cập theo chính sách quyền riêng tư.
8. **SEO và chia sẻ:** Open Graph image, favicon chuẩn, metadata title/description, canonical URL và sitemap khi có domain.

## 7. CTA tải ứng dụng và trạng thái APK

- Tất cả nút tải hiện trỏ tới `/downloads/steply.apk` với tên tải `steply.apk`.
- Đặt APK Android release tại `Steply-Landing/public/downloads/steply.apk` để CTA hoạt động khi deploy.
- Repo hiện **chưa có file APK**, nên không được xem link tải là sẵn sàng phát hành cho tới khi có artifact thật.
- Chỉ đưa lên bản release đã kiểm tra chữ ký, version, dung lượng và quy trình cài đặt. Không dùng debug-signed APK cho phát hành công khai.
- Khi có cả Google Play và APK trực tiếp, nên chuyển CTA thành lựa chọn rõ ràng thay vì để một nút mơ hồ.

## 8. Chạy và build landing

Thư mục độc lập: `Steply-Landing/`.

```bash
cd Steply-Landing
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Toolchain hiện ghim Vite 6 và Tailwind CSS 3 để tương thích Node 22.11 trong môi trường phát triển hiện tại. Dev server landing page chạy ở `http://localhost:5173/` khi dùng cổng mặc định.

## 9. Tài liệu tham chiếu trong repository

- `Steply-App/docs/UI_UX_SPECIFICATION.md` — home/tracker UI và luồng vận động.
- `Steply-App/docs/BUSINESS_RULES.md` — mô hình Move-to-Earn, thưởng và anti-cheat định hướng; một số nội dung là kế hoạch, cần xác minh với source.
- `Steply-App/docs/WALLET_UI_SPEC.md` — định hướng màn ví; một phần nội dung mô tả yêu cầu tương lai.
- `Steply-App/docs/RUNNING_SESSION_PLAN.md` — kế hoạch phiên vận động và giới hạn anti-cheat.
- `Steply-BE/README.md` — kiến trúc backend, collections và API.
- `Steply-App/lib/shared/theme/color_skin.dart` — token màu thực tế của Flutter.
