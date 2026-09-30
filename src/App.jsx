import { useState } from 'react'
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  CalendarCheck2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Footprints,
  Gift,
  HeartPulse,
  Menu,
  RefreshCw,
  ShoppingBag,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  Wallet,
  WalletCards,
  X,
} from 'lucide-react'

const downloadUrl = '/downloads/app-release.apk'

const features = [
  {
    icon: Footprints,
    number: '01',
    title: 'Theo dõi từng bước chân',
    copy: 'Xem số bước, quãng đường, thời gian và calories ước tính trong ngày; bắt đầu hoặc kết thúc phiên đi bộ ngay trong app.',
    tone: 'mint',
  },
  {
    icon: RefreshCw,
    number: '02',
    title: 'Tiếp tục vận động, kể cả khi mất mạng',
    copy: 'Phiên đi bộ có thể tiếp tục chạy khi app ở nền trên thiết bị được hỗ trợ; dữ liệu lưu chờ sẽ đồng bộ lại khi có mạng.',
    tone: 'peach',
  },
  {
    icon: CalendarCheck2,
    number: '03',
    title: 'Nhiệm vụ và điểm danh mỗi ngày',
    copy: 'Khám phá hoạt động đang mở, điểm danh và hoàn thành nhiệm vụ để theo dõi cơ hội nhận thưởng trong ứng dụng.',
    tone: 'blue',
  },
  {
    icon: WalletCards,
    number: '04',
    title: 'Quản lý thưởng trong ví',
    copy: 'Theo dõi số dư, lịch sử giao dịch và gửi yêu cầu rút thưởng trực tiếp từ ví Steply.',
    tone: 'mint',
  },
  {
    icon: ShoppingBag,
    number: '05',
    title: 'Khám phá cửa hàng trong app',
    copy: 'Xem khu vực sản phẩm và quản lý lựa chọn trong giỏ hàng ngay trên điện thoại.',
    tone: 'peach',
  },
  {
    icon: UserRound,
    number: '06',
    title: 'Tài khoản theo cách của bạn',
    copy: 'Cập nhật thông tin cá nhân, ảnh đại diện và quản lý tài khoản ngay trong ứng dụng.',
    tone: 'blue',
  },
]

const steps = [
  ['01', 'Kết nối chuyển động', 'Cho phép Steply ghi nhận dữ liệu bước chân trên điện thoại của bạn.'],
  ['02', 'Đi bộ theo nhịp riêng', 'Bắt đầu phiên vận động, theo dõi tiến trình và giữ thói quen mỗi ngày.'],
  ['03', 'Khám phá nhiệm vụ và thưởng', 'Điểm danh, tham gia hoạt động đang mở và theo dõi số dư, giao dịch trong ví.'],
]

const questions = [
  {
    question: 'Steply hiện hỗ trợ thiết bị nào?',
    answer: 'Steply hiện hỗ trợ Android. Phiên bản iOS chưa được hỗ trợ.',
  },
  {
    question: 'Steply ghi nhận hoạt động như thế nào?',
    answer: 'Ứng dụng sử dụng dữ liệu bước chân trên thiết bị để hiển thị tiến trình vận động. Bạn có thể xem mục tiêu, phiên tập và hoạt động hằng ngày trong app.',
  },
  {
    question: 'Tôi có cần kết nối mạng liên tục không?',
    answer: 'Phiên vận động có thể được lưu tạm khi mất kết nối và đồng bộ lại khi mạng khả dụng.',
  },
  {
    question: 'Tôi có thể nhận thưởng hoặc rút tiền như thế nào?',
    answer: 'Bạn có thể xem nhiệm vụ, điểm danh và ưu đãi đang có trong app, sau đó theo dõi số dư và gửi yêu cầu rút trong ví nếu đủ điều kiện. Phần thưởng tùy chương trình; yêu cầu rút có thể cần xét duyệt và Steply không cam kết thu nhập cố định.',
  },
]

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Steply, về đầu trang">
      <img src="/images/steply-logo.png" alt="" />
      <span>STEP<span className="brand-accent">LY</span></span>
    </a>
  )
}

function DownloadLink({ secondary = false, compact = false }) {
  return (
    <a
      className={`download-link ${secondary ? 'download-link-secondary' : ''} ${compact ? 'download-link-compact' : ''}`}
      href={downloadUrl}
      download="app-release.apk"
    >
      <ArrowDownToLine aria-hidden="true" size={compact ? 17 : 19} />
      <span>{compact ? 'Tải APK' : 'Tải Steply miễn phí'}</span>
      {!compact && <ArrowRight aria-hidden="true" size={17} />}
    </a>
  )
}

function AppPreview() {
  return (
    <div className="hero-art" aria-label="Xem trước giao diện theo dõi bước chân Steply">
      <div className="photo-frame">
        <img
          className="runner-photo"
          src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85"
          alt="Người chạy bộ ngoài trời trên đường mòn xanh"
        />
        <div className="photo-caption">
          <span className="caption-dot" />
          <span>Ra ngoài. Hít thở. Tiến lên.</span>
        </div>
      </div>

      <div className="phone-shell">
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>
          <div className="phone-topline">
            <div><span className="phone-eyebrow">THỨ HAI, 29 THÁNG 9</span><strong>Chào buổi sáng!</strong></div>
            <span className="phone-avatar">S</span>
          </div>
          <div className="step-ring" style={{ '--progress': '68%' }}>
            <div className="step-ring-inner">
              <span className="ring-label">HÔM NAY</span>
              <strong>6,543</strong>
              <span className="ring-subtitle">/ 10,000 bước</span>
              <span className="ring-percent">68% mục tiêu</span>
            </div>
          </div>
          <div className="phone-stats">
            <div><Activity size={15} /><strong>284</strong><span>kcal</span></div>
            <div><Footprints size={15} /><strong>4.7</strong><span>km</span></div>
            <div><HeartPulse size={15} /><strong>52</strong><span>phút</span></div>
          </div>
          <div className="phone-goal">
            <span className="goal-icon"><Gift size={15} /></span>
            <span><strong>Sắp đạt cột mốc!</strong><small>Còn 457 bước nữa</small></span>
            <ArrowRight size={15} />
          </div>
          <button className="phone-start" type="button" tabIndex={-1}>Bắt đầu đi bộ <ArrowRight size={15} /></button>
          <div className="phone-tabbar"><span className="tab-active"><Footprints size={16} />Trang chủ</span><span><Gift size={16} />Nhiệm vụ</span><span><Wallet size={16} />Ví</span></div>
        </div>
      </div>

      <div className="float-note float-note-top"><span className="float-icon"><ShieldCheck size={17} /></span><span><strong>Tiến trình của bạn</strong><small>Được lưu an toàn</small></span><Check size={16} /></div>
      <div className="float-note float-note-bottom"><span className="float-icon float-icon-coral"><Sparkles size={17} /></span><span><strong>Thêm một bước nữa</strong><small>Gần chạm mục tiêu rồi!</small></span></div>
      <span className="art-sticker">STEP<br />BY STEP</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="home" className="site-shell min-h-screen">
      <header className="site-header">
        <div className="header-inner page-width">
          <Brand />
          <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Điều hướng chính">
            <a href="#features" onClick={closeMenu}>Tính năng</a>
            <a href="#rewards" onClick={closeMenu}>Cơ hội nhận thưởng</a>
            <a href="#how-it-works" onClick={closeMenu}>Cách hoạt động</a>
            <a href="#faq" onClick={closeMenu}>Câu hỏi thường gặp</a>
          </nav>
          <div className="header-actions">
            <a className="header-login" href="#features">Khám phá Steply</a>
            <DownloadLink compact />
          </div>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section relative">
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-mark"><Footprints size={15} /></span> ỨNG DỤNG SỐNG NĂNG ĐỘNG</div>
              <h1>Mỗi ngày<br />tiến thêm <span>một bước.</span></h1>
              <p className="hero-description">Bước nhỏ hôm nay, thói quen khỏe mạnh ngày mai. Theo dõi chuyển động, tham gia nhiệm vụ và khám phá cơ hội nhận thưởng cùng Steply.</p>
              <div className="hero-actions"><DownloadLink /><a className="text-link" href="#features">Khám phá ứng dụng <ArrowRight size={16} /></a></div>
              <div className="hero-proof"><div className="proof-icons"><span><Footprints size={14} /></span><span><Activity size={14} /></span><span><Gift size={14} /></span></div><p><strong>Vận động theo cách của bạn</strong><small>Theo dõi · Mục tiêu · Phần thưởng</small></p></div>
            </div>
            <AppPreview />
          </div>
          <div className="hero-bottom page-width"><span>ĐƯỢC THIẾT KẾ CHO NHỮNG BƯỚC ĐI MỖI NGÀY</span><div><span><Check size={14} />Theo dõi bước chân</span><span><Check size={14} />Nhiệm vụ mỗi ngày</span><span><Check size={14} />Ví thưởng</span></div></div>
        </section>

        <section className="intro-strip">
          <div className="page-width intro-inner"><span className="intro-kicker">CHUYỂN ĐỘNG CÓ Ý NGHĨA</span><p>Không cần thay đổi tất cả.<br /><strong>Chỉ cần bắt đầu từ một bước.</strong></p><span className="intro-arrow"><ArrowDownToLine size={21} /></span></div>
        </section>

        <section id="features" className="features-section section-pad">
          <div className="page-width">
            <div className="section-heading"><div><span className="eyebrow-label">ĐIỀU LÀM NÊN STEPLY</span><h2>Hành trình khỏe hơn,<br /><span>theo cách của bạn.</span></h2></div><p>Từ theo dõi vận động đến nhiệm vụ, ví thưởng và quản lý tài khoản: những trải nghiệm đang có trong ứng dụng Android.</p></div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, number, title, copy, tone }) => (
                <article className={`feature-item feature-${tone}`} key={number}>
                  <div className="feature-top"><span className="feature-icon"><Icon size={22} strokeWidth={1.8} /></span><span className="feature-number">{number} / 06</span></div>
                  <h3>{title}</h3><p>{copy}</p><a href="#how-it-works" aria-label={`Tìm hiểu ${title}`}><ArrowRight size={19} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rewards" className="earn-section section-pad">
          <div className="page-width earn-grid">
            <div className="earn-copy">
              <span className="eyebrow-label"><Sparkles size={14} /> ĐI BỘ, THAM GIA, NHẬN THƯỞNG</span>
              <h2>Biến từng bước chân<br /><span>thành động lực mới.</span></h2>
              <p>Steply kết nối thói quen vận động với nhiệm vụ, điểm danh và ưu đãi trong ứng dụng. Hoàn thành hoạt động phù hợp, rồi xem phần thưởng và giao dịch ngay trong ví.</p>
              <a className="earn-link" href="#download">Khám phá Steply <ArrowRight size={16} /></a>
              <p className="earn-disclaimer">Nhiệm vụ, mức thưởng và điều kiện nhận có thể thay đổi theo chương trình. Yêu cầu rút thưởng được xử lý theo điều kiện và quy trình xét duyệt trong app; không cam kết thu nhập cố định.</p>
            </div>
            <div className="earn-flow" aria-label="Cách theo dõi nhiệm vụ và phần thưởng">
              <div className="earn-step"><span className="earn-step-icon"><Footprints size={20} /></span><span className="earn-step-number">01</span><div><h3>Duy trì nhịp đi bộ</h3><p>Ghi nhận bước chân và phiên vận động hằng ngày.</p></div></div>
              <div className="earn-step"><span className="earn-step-icon earn-step-coral"><ClipboardCheck size={20} /></span><span className="earn-step-number">02</span><div><h3>Tham gia hoạt động đang mở</h3><p>Điểm danh, hoàn thành nhiệm vụ hoặc ưu đãi khả dụng.</p></div></div>
              <div className="earn-step"><span className="earn-step-icon earn-step-blue"><Wallet size={20} /></span><span className="earn-step-number">03</span><div><h3>Theo dõi trong ví</h3><p>Xem số dư, lịch sử giao dịch và gửi yêu cầu rút nếu đủ điều kiện.</p></div></div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-section section-pad">
          <div className="page-width how-grid">
            <div className="how-visual">
              <div className="how-photo"><img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85" alt="Đôi giày chạy trên con đường ngoài trời" loading="lazy" /></div>
              <div className="distance-tag"><span className="distance-icon"><Footprints size={17} /></span><span><strong>4.7 km</strong><small>Mỗi bước là một tiến bộ</small></span></div>
              <div className="orbit-stamp"><span>MOVE<br />WITH<br />MEANING</span><Footprints size={20} /></div>
            </div>
            <div className="how-copy"><span className="eyebrow-label">BẮT ĐẦU THẬT DỄ</span><h2>Một hành trình.<br /><span>Ba bước đơn giản.</span></h2><div className="step-list">{steps.map(([number, title, copy]) => <div className="step-row" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div><a className="text-link how-link" href="#download">Bắt đầu hành trình <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="offline-band"><div className="page-width offline-inner"><span className="offline-icon"><RefreshCw size={22} /></span><div><span className="eyebrow-label">LUÔN THEO KỊP NHỊP CỦA BẠN</span><h2>Mất mạng một lúc?<br /><span>Tiến trình vẫn được giữ.</span></h2></div><p>Phiên vận động có thể lưu tạm trên thiết bị và đồng bộ lại khi kết nối mạng trở lại.</p></div></section>

        <section id="download" className="download-section">
          <div className="download-panel page-width"><div className="download-copy"><span className="download-kicker"><Smartphone size={15} /> SẴN SÀNG CHO BƯỚC ĐI TIẾP THEO?</span><h2>Điều tốt đẹp bắt đầu<br />từ <span>một bước chân.</span></h2><p>Tải Steply về điện thoại Android và bắt đầu xây dựng nhịp vận động của bạn.</p><DownloadLink secondary /><small className="download-meta">Android · Tệp cài đặt APK</small></div><div className="download-art"><div className="download-ring"><span><Footprints size={53} strokeWidth={1.3} /></span></div><span className="download-sun">01</span><span className="download-dash dash-one" /><span className="download-dash dash-two" /><span className="download-word">STEP<br />BY STEP</span></div></div>
        </section>

        <section id="faq" className="faq-section section-pad"><div className="page-width faq-grid"><div><span className="eyebrow-label">CẦN BIẾT THÊM?</span><h2>Câu hỏi<br /><span>thường gặp.</span></h2><p>Thông tin ngắn gọn để bạn bắt đầu với Steply dễ dàng hơn.</p></div><div className="faq-list">{questions.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-main"><Brand light /><p>Mỗi bước chân, một phiên bản tốt hơn.</p><a href="#home" className="back-top">Lên đầu trang <ArrowRight size={15} /></a></div><div className="page-width footer-bottom"><span>© 2026 Steply. Bước nhỏ, tiến bộ mỗi ngày.</span><span className="footer-note">Ứng dụng Android · Tệp APK sẽ được cung cấp tại nút tải xuống.</span></div></footer>

      <div className="mobile-download"><DownloadLink compact /></div>
    </div>
  )
}

export default App
