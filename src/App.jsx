import { useEffect, useRef, useState } from 'react'
import './App.css'

const uiCopy = {
  id: {
    nav: {
      summary: 'Ringkasan',
      education: 'Pendidikan',
      experience: 'Pengalaman',
      skills: 'Skills',
      projects: 'Proyek',
      contact: 'Kontak',
    },
    heroRole: 'IT Specialist',
    summaryTitle: 'Ringkasan',
    summaryText:
      'IT Specialist dengan pengalaman dalam pengelolaan operasional IT, infrastruktur jaringan, sistem ERP, serta pengembangan aplikasi berbasis web. Berpengalaman menangani kebutuhan IT di 15 outlet yang tersebar di berbagai wilayah Indonesia, mencakup pengelolaan sistem back-office, POS, jaringan lokal, CCTV, serta pemeliharaan hardware dan software. Memiliki keahlian dalam Fullstack Development menggunakan Laravel, CodeIgniter, dan React.js, pengembangan REST API, manajemen database, serta implementasi DevOps. Berfokus pada optimalisasi sistem, efisiensi operasional, pemecahan masalah teknis, dan transformasi digital untuk mendukung kebutuhan serta pertumbuhan bisnis perusahaan.',
    educationTitle: 'Pendidikan',
    experienceTitle: 'Pengalaman',
    skillsTitle: 'Skills',
    projectsTitle: 'Proyek',
    certificationTitle: 'Sertifikasi',
    contactTitle: 'Kontak',
    contactText: 'Siap bantu lanjut isi foto asli, data diri, dan project nyata Anda berikutnya.',
    detail: 'Detail',
    moreDesigns: 'Lihat desain lainnya',
    projectCategories: 'Kategori proyek',
    socialLinks: 'Link media sosial',
    previousExperience: 'Pengalaman sebelumnya',
    nextExperience: 'Pengalaman berikutnya',
    experienceIndicators: 'Indikator pengalaman',
    goToExperience: 'Buka',
    primaryNavigation: 'Navigasi utama',
    languageLabel: 'Bahasa',
  },
  en: {
    nav: {
      summary: 'Summary',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    heroRole: 'IT Specialist',
    summaryTitle: 'Summary',
    summaryText:
      'IT Specialist with experience in managing IT operations, network infrastructure, ERP systems, and web application development. Has experience handling IT needs across 15 outlets scattered across various regions of Indonesia, including management of back-office systems, POS, local networks, CCTV, and hardware/software maintenance. Skilled in Fullstack Development using Laravel, CodeIgniter, and React.js, REST API development, database management, and DevOps implementation. Focused on system optimization, operational efficiency, technical problem-solving, and digital transformation to support business needs and growth.',
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    certificationTitle: 'Certification',
    contactTitle: 'Contact',
    contactText: 'Ready to continue with your real photos, profile data, and live project content next.',
    detail: 'Detail',
    moreDesigns: 'View more designs',
    projectCategories: 'Project categories',
    socialLinks: 'Social media links',
    previousExperience: 'Previous experience',
    nextExperience: 'Next experience',
    experienceIndicators: 'Experience indicators',
    goToExperience: 'Go to',
    primaryNavigation: 'Primary navigation',
    languageLabel: 'Language',
  },
}

const educationItems = [
  {
    school: 'Universitas Cakrawala',
    period: { id: '2021 - Sekarang', en: '2021 - Now' },
    detail: {
      id: 'Mahasiswa aktif yang fokus pada pengembangan web, implementasi UI, dan eksplorasi produk digital modern.',
      en: 'Active university student focused on web development, UI implementation, and exploration of modern digital products.',
    },
  },
  {
    school: 'Akademi Telekomunikasi Indonesia Gemilang',
    period: { id: '2020 - 2023', en: '2020 - 2023' },
    detail: {
      id: 'Mempelajari dasar pemrograman, desain antarmuka, serta alur kerja pembuatan website dari konsep hingga rilis.',
      en: 'Learned programming fundamentals, interface design, and the website production workflow from concept to release.',
    },
  },
  {
    school: 'SMKN 1 Giritontro',
    period: { id: '2016 - 2019', en: '2016 - 2019' },
    detail: {
      id: 'Membangun fondasi teknologi, logika komputasi, dan disiplin kerja proyek sejak masa sekolah kejuruan.',
      en: 'Built a foundation in technology, computational logic, and project discipline during vocational school.',
    },
  },
]

const experienceItems = [
  {
    company: 'Kopi Bajawa Flores NTT',
    period: { id: 'Mei 2026 - Sekarang', en: 'May 2026 - Present' },
    role: { id: 'IT Specialist - Fulltime', en: 'IT Specialist - Fulltime' },
    description: {
      id: 'Mengelola operasional IT di 15 outlet yang tersebar di Jabodetabek, Batam, Lombok, dan Medan. Bertanggung jawab atas pengelolaan sistem back-office ESB, termasuk ERP, menu, produk, promosi, dan laporan operasional. Melakukan instalasi dan pemeliharaan jaringan lokal, perangkat POS, Wi-Fi, CCTV, serta troubleshooting hardware dan software. Mengembangkan berbagai platform berbasis web, termasuk sistem IT Ticketing, reservasi meja dan venue, company profile, serta survei pelanggan untuk mendukung efisiensi operasional dan transformasi digital perusahaan.',
      en: 'Manage IT operations across 15 outlets in Greater Jakarta, Batam, Lombok, and Medan. Responsible for managing ESB back-office systems, including ERP, menus, products, promotions, and operational reports. Perform installation and maintenance of local networks, POS devices, Wi-Fi, CCTV systems, and hardware and software troubleshooting. Develop web-based platforms, including IT ticketing systems, table and venue reservations, company profile websites, and customer survey platforms to support operational efficiency and business digital transformation.',
    },
  },
  {
    company: 'PT CTG Technology Development',
    period: { id: 'Februari 2026 - April 2026', en: 'February 2026 - April 2026' },
    role: { id: 'Fullstack Developer - Fulltime', en: 'Fullstack Developer - Fulltime' },
    description: {
      id: 'Mengembangkan dan mengintegrasikan payment microservice dengan sistem utama, mengimplementasikan payment gateway Finpay, menulis dokumentasi teknis API dan alur sistem, melakukan API serta integration testing, dan menangani deployment menggunakan Docker dan CI/CD.',
      en: 'Developed and integrated a payment microservice with the main system, implemented payment gateway integration using Finpay, created technical documentation for APIs and system workflows, performed API and integration testing to ensure system reliability, and managed deployment using Docker and CI/CD.',
    },
  },
  {
    company: 'Zibra DevHouse',
    period: { id: 'Januari 2025 - Sekarang', en: 'January 2025 - Present' },
    role: { id: 'Freelance - Fullstack Developer', en: 'Freelance - Fullstack Developer' },
    description: {
      id: 'Ikut membangun dan memimpin tim development berbasis proyek untuk kebutuhan website dan aplikasi. Menangani perencanaan proyek, requirement, pembagian tugas, eksekusi teknis, komunikasi client, development, testing, hingga deployment agar proyek tetap sesuai scope, timeline, dan kualitas yang diharapkan.',
      en: 'Co-founded and led a project-based development team delivering web and application solutions. Managed project planning, requirements, task allocation, and technical execution, while coordinating client communication, development, testing, and deployment to ensure projects met scope, timeline, and quality expectations.',
    },
  },
  {
    company: 'Bisabola.id',
    period: { id: 'Agustus 2022 - Sekarang', en: 'August 2022 - Present' },
    role: { id: 'Freelance - Fullstack Developer', en: 'Freelance - Fullstack Developer' },
    description: {
      id: 'Mengembangkan dan memelihara platform manajemen sepak bola berbasis web yang berfokus pada liga dan turnamen. Menangani full-stack development menggunakan PHP, Laravel, MySQL, dan REST API, termasuk implementasi fitur, debugging, optimasi, deployment, serta maintenance sistem secara berkelanjutan.',
      en: 'Developed and maintained a web-based football management platform focused on leagues and tournaments. Handled full-stack development using PHP, Laravel, MySQL, and REST APIs, including feature implementation, debugging, optimization, deployment, and ongoing system maintenance while collaborating with stakeholders to ensure scalability and reliability.',
    },
  },
  {
    company: 'SparX.id',
    period: { id: 'November 2024 - Sekarang', en: 'November 2024 - Present' },
    role: { id: 'Freelance - UI/UX Designer & Fullstack Developer', en: 'Freelance - UI/UX Designer & Fullstack Developer' },
    description: {
      id: 'Merancang dan mengembangkan pengalaman digital untuk sistem booking lapangan dan membership di SparX.id. Berkontribusi pada flow UI/UX, keputusan desain antarmuka, serta implementasi full-stack menggunakan PHP, Laravel, MySQL, dan REST API untuk menghadirkan alur pemesanan dan manajemen membership yang lebih jelas serta andal.',
      en: 'Designed and developed digital experiences for pitch rentals and membership systems under SparX.id. Contributed to UI/UX flows, interface design decisions, and full-stack implementation using PHP, Laravel, MySQL, and REST APIs to create a clear booking experience and reliable membership management workflow.',
    },
  },
  {
    company: 'SMK Digital Darul Uchwah',
    period: { id: 'Juli 2022 - Sekarang', en: 'July 2022 - Present' },
    role: { id: 'Freelance - IT Educator', en: 'Freelance - IT Educator' },
    description: {
      id: 'Mengajar konsep dasar jaringan komputer, pemrograman dasar, dan desain grafis kepada siswa. Menyiapkan materi pembelajaran serta mendampingi sekitar 30 siswa dalam praktik yang berkaitan dengan sistem IT dan keterampilan digital.',
      en: 'Teaching student fundamental concepts of computer networking, basic programming, and graphic design. Preparing learning materials and assisting 30 students in practical activities related to IT systems and digital skills.',
    },
  },
  {
    company: 'Akatelkom Indonesia Gemilang',
    period: { id: 'September 2022 - September 2024', en: 'September 2022 - September 2024' },
    role: { id: 'Contract - IT Support', en: 'Contract - IT Support' },
    description: {
      id: 'Memberikan dukungan teknis untuk aktivitas akademik dan administrasi, termasuk troubleshooting hardware dan software bagi dosen, staf, dan mahasiswa. Menangani jaringan LAN dasar, masalah konektivitas, maintenance sistem, serta mendukung sistem informasi akademik dan akses pengguna agar operasional IT tetap stabil.',
      en: 'Provided technical support for academic and administrative activities, including hardware and software troubleshooting for lecturers, staff, and students. Managed basic LAN networking, connectivity issues, and system maintenance. Supported academic information systems, user access, and routine IT operations to ensure reliable and efficient services.',
    },
  },
  {
    company: 'Pesantren Ekonomi Darul Uchwah',
    period: { id: 'Desember 2020 - Desember 2022', en: 'December 2020 - December 2022' },
    role: { id: 'Freelance - Social Media Specialist', en: 'Freelance - Social Media Specialist' },
    description: {
      id: 'Mengelola dan mengembangkan konten untuk YouTube, Instagram, dan Facebook, termasuk visual design, copywriting, serta penjadwalan konten.',
      en: 'Managed and developed content for YouTube, Instagram, and Facebook, including visual design, copywriting, and content scheduling.',
    },
  },
  {
    company: 'PT Solo Jala Buana',
    period: { id: 'Juli 2018 - September 2018', en: 'July 2018 - September 2018' },
    role: { id: 'Internship - IT Junior Network', en: 'Internship - IT Junior Network' },
    description: {
      id: 'Membantu instalasi LAN dan WAN, troubleshooting jaringan dasar, serta deployment CCTV untuk client perusahaan.',
      en: 'Assisted in LAN and WAN installation, basic network troubleshooting, and CCTV deployment for corporate clients.',
    },
  },
  {
    company: 'Universitas Jendral Achmad Yani (Unjani)',
    period: { id: 'Januari 2018 - Maret 2018', en: 'January 2018 - March 2018' },
    role: { id: 'Internship - Information Technology Intern', en: 'Internship - Information Technology Intern' },
    description: {
      id: 'Mendukung konfigurasi jaringan, maintenance laboratorium komputer, serta tugas dasar web dan database development.',
      en: 'Supported network configuration, computer lab maintenance, and basic web and database development tasks.',
    },
  },
]

const skillImages = [
  { name: 'Adobe', file: 'adobe.png' },
  { name: 'Bootstrap', file: 'bootstrap.png' },
  { name: 'CodeIgniter', file: 'codeigniter.png' },
  { name: 'Corel', file: 'corel.png' },
  { name: 'CPANEL', file: 'cpanel.png' },
  { name: 'CSS', file: 'css.png' },
  { name: 'Docker', file: 'docker.png' },
  { name: 'Figma', file: 'figma.png' },
  { name: 'Git', file: 'git.png' },
  { name: 'GitHub', file: 'github.png' },
  { name: 'GitLab', file: 'gitlab.png' },
  { name: 'HTML', file: 'html.png' },
  { name: 'Hyperf', file: 'hyperf.png' },
  { name: 'JavaScript', file: 'js.png' },
  { name: 'Laravel', file: 'laravel.png' },
  { name: 'Mikrotik', file: 'mikrotik.png' },
  { name: 'MySQL', file: 'mysql.png' },
  { name: 'NestJS', file: 'nestJs.png' },
  { name: 'Postman', file: 'postman.png' },
  { name: 'React', file: 'react.png' },
  { name: 'Tailwind', file: 'tailwinds.png' },
]

const projectTabs = {
  it: {
    label: { id: 'IT Developer', en: 'IT Developer' },
    shortLabel: { id: 'IT', en: 'IT' },
    folder: 'Aplikasi',
    items: [
      { title: 'Kopi Bajawa Flores NTT', file: 'bajawa_co_id.png', link: 'https://bajawa.co.id' },
      { title: 'Reservasi Table Cafe', file: 'reservasi-bajawa.png', link: 'https://book.bajawa.co.id' },
      { title: 'IT Ticketing', file: 'it-support.png', link: 'https://it.bajawa.co.id' },
      { title: 'Mail Platform', file: 'mail-bajawa.png', link: 'https://mail.bajawa.co.id' },
      { title: 'Marc Klok Foundation - Gol Kita', file: 'marcklok.png', link: 'https://marcklokfoundation.org' },
      { title: 'Nusantara Sentra Kapital - Reksa Dana', file: 'nuscap.png', link: 'https://nuscap.id' },
      { title: 'PlayerDuo - Platform Main Bareng', file: 'playerduo.png', link: 'https://playerduoid.com' },
      { title: 'Bisabola.id - Ekosistem Sepak Bola', file: 'bisabola.png', link: 'http://bisabola.id' },
      { title: 'SparX - Platform Booking Lapangan', file: 'sparx.png', link: 'https://sparx.id' },
      { title: 'E-Laundry - Cuci Pakaian Modern', file: 'e-laundry.png', link: 'https://e-laundry.site' },
      { title: 'E-Santri - Pembayaran Digital', file: 'e-santri.png', link: 'https://pembayaransantri.online' },
      { title: 'Nukang - Cari Tukang Online', file: 'nukang.png', link: 'https://nukang.pembayaransantri.online' },
      { title: 'Pelaporan Pelecehan Seksual - UNUSIA', file: 'ppks.png', link: 'https://ppks-unusia.online' },
    ],
  },
  design: {
    label: { id: 'Graphic Design', en: 'Graphic Design' },
    shortLabel: { id: 'Desain', en: 'Design' },
    folder: 'Design',
    moreLink: 'https://drive.google.com/drive/u/1/folders/1SzRj0A4RME3soP1ezcMtz0mpPF4plOHc',
    items: [
      {
        title: 'Poster Design',
        file: 'poster.png',
        description: {
          id: 'Eksplorasi desain poster untuk kebutuhan promosi visual yang kuat dan mudah menarik perhatian audiens.',
          en: 'Poster design exploration for promotional needs with strong visuals that easily catch audience attention.',
        },
      },
      {
        title: 'Product Design',
        file: 'produk.png',
        description: {
          id: 'Visual produk dan materi promosi yang menekankan komposisi, hirarki, dan presentasi yang lebih komersial.',
          en: 'Product visuals and promotional materials emphasizing composition, hierarchy, and stronger commercial presentation.',
        },
      },
      {
        title: 'Publication Design',
        file: 'publikasi.jpg',
        description: {
          id: 'Desain publikasi untuk kebutuhan informasi, branding, dan penyampaian pesan yang lebih rapi dan komunikatif.',
          en: 'Publication design for information, branding, and clearer, more communicative messaging needs.',
        },
      },
    ],
  },
  uiux: {
    label: { id: 'UI/UX Design', en: 'UI/UX Design' },
    shortLabel: { id: 'UI', en: 'UI' },
    folder: 'Design-ui',
    items: [
      {
        title: 'Lanaraya - Undangan Digital',
        file: 'Lanaraya - Undangan Digital.png',
        description: {
          id: 'Desain antarmuka undangan digital dengan pendekatan visual yang elegan dan mudah digunakan pada berbagai perangkat.',
          en: 'Digital invitation interface design with an elegant visual approach that is easy to use across devices.',
        },
      },
      {
        title: 'MedicaPro',
        file: 'MedicaPro.png',
        description: {
          id: 'Eksplorasi interface untuk layanan kesehatan digital dengan fokus pada keterbacaan dan alur penggunaan yang jelas.',
          en: 'Interface exploration for digital healthcare services focused on readability and clear user flows.',
        },
      },
      {
        title: 'Profile Zibra DevHouse',
        file: 'Profile Zibra DevHouse.png',
        description: {
          id: 'Perancangan tampilan profile company yang menonjolkan struktur informasi, identitas visual, dan presentasi layanan.',
          en: 'Company profile interface design highlighting information structure, visual identity, and service presentation.',
        },
      },
      {
        title: 'Seratuspersen Anak Nusantara',
        file: 'seratuspersen anak nusantara.png',
        description: {
          id: 'Konsep antarmuka promosi dan branding digital yang diarahkan agar terasa kuat, lokal, dan komunikatif.',
          en: 'Promotional and branding interface concept designed to feel strong, local, and communicative.',
        },
      },
      {
        title: 'Sewa Lapangan - Dashboard',
        file: 'Sewa Lapangan - Dashboard.png',
        description: {
          id: 'Rancangan dashboard operasional untuk pengelolaan sewa lapangan dengan struktur data yang lebih ringkas.',
          en: 'Operational dashboard design for pitch rental management with a cleaner and more concise data structure.',
        },
      },
      {
        title: 'Sparx Mobile Interfaces',
        file: 'Sparx Mobile Interfaces.png',
        description: {
          id: 'Desain antarmuka mobile SparX untuk pengalaman booking dan membership yang lebih intuitif.',
          en: 'SparX mobile interface design for a more intuitive booking and membership experience.',
        },
      },
    ],
  },
  noc: {
    label: { id: 'Network Engineering', en: 'Network Engineering' },
    shortLabel: { id: 'NOC', en: 'NOC' },
    folder: 'noc',
    items: [
      {
        title: 'VoIP System Setup',
        file: 'voip.jpg',
        description: {
          id: 'Melakukan implementasi dan konfigurasi sistem VoIP untuk kebutuhan komunikasi internal yang lebih efisien dan terintegrasi.',
          en: 'Implemented and configured a VoIP system to support more efficient and integrated internal communication.',
        },
      },
      {
        title: 'Network Installation (LAN)',
        file: 'instalasi.jpeg',
        description: {
          id: 'Mengerjakan instalasi jaringan menggunakan perangkat Mikrotik, termasuk routing dasar, manajemen koneksi, dan penyesuaian kebutuhan infrastruktur.',
          en: 'Handled network installation using Mikrotik devices, including basic routing, connection management, and infrastructure adjustments.',
        },
      },
      {
        title: 'Network Monitoring',
        file: 'monitoring-jari.jpeg',
        description: {
          id: 'Melakukan monitoring jaringan untuk memastikan stabilitas koneksi, mendeteksi gangguan lebih awal, dan menjaga performa operasional tetap optimal.',
          en: 'Monitored network performance to maintain stable connectivity, detect issues early, and keep operations running optimally.',
        },
      },
    ],
  },
}

const projectTabOrder = ['it', 'design', 'uiux', 'noc']

const certificationItems = [
  {
    title: 'Fundamental Front-End Web Development (HTML, CSS, JavaScript)',
    issuer: 'Coding Studio',
    period: '2025',
    image: 'front-end.png',
    description: {
      id: 'Materi yang dipelajari mencakup pengenalan front-end, HTML, CSS, JavaScript, Bootstrap, bonus materi tambahan, kuis, dan penyusunan tampilan website responsif dari dasar sampai penyelesaian course.',
      en: 'The coursework covered front-end introduction, HTML, CSS, JavaScript, Bootstrap, bonus modules, quizzes, and building responsive websites from the basics to course completion.',
    },
  },
  {
    title: 'React.js Web Development - Modern Front-End Applications',
    issuer: 'Coding Studio',
    period: '2025',
    image: 'react.png',
    description: {
      id: 'Fokus pembelajaran meliputi dasar ES6, dasar React, advanced React, serta studi kasus seperti pembuatan todo app dan media player untuk membangun website modern berbasis React.',
      en: 'The learning focus included ES6 fundamentals, React fundamentals, advanced React, and case studies such as building a todo app and media player for modern React-based websites.',
    },
  },
  {
    title: 'Madrasah Design Nusantara',
    issuer: 'NU Channel & House of Brotherhood',
    period: '2020',
    image: 'madrasah-design.jpg',
    description: {
      id: 'Pembelajaran berfokus pada dasar-dasar desain visual seperti pembuatan poster, pemilihan warna, komposisi ukuran, hierarki elemen, dan penyusunan layout agar hasil desain lebih komunikatif dan menarik.',
      en: 'The program focused on visual design fundamentals such as poster creation, color selection, size composition, element hierarchy, and layout building for more communicative and engaging designs.',
    },
  },
]

const localize = (value, language) => {
  if (value && typeof value === 'object' && 'id' in value && 'en' in value) {
    return value[language]
  }

  return value
}

function App() {
  const [language, setLanguage] = useState('id')
  const [openEducation, setOpenEducation] = useState('Universitas Cakrawala')
  const [activeExperience, setActiveExperience] = useState(0)
  const [activeProjectTab, setActiveProjectTab] = useState('it')
  const [activeCertification, setActiveCertification] = useState(0)
  const experienceTouchStart = useRef(null)
  const topSkillImages = skillImages.filter((_, index) => index % 2 === 0)
  const bottomSkillImages = skillImages.filter((_, index) => index % 2 !== 0)

  const copy = uiCopy[language]
  const currentExperience = experienceItems[activeExperience]
  const currentProjectTab = projectTabs[activeProjectTab]
  const currentProjects = currentProjectTab.items
  const projectsUseImages = currentProjects.every((project) => project.file)
  const currentCertification = certificationItems[activeCertification]

  const handleEducationToggle = (school) => {
    setOpenEducation((current) => (current === school ? '' : school))
  }

  const showPreviousExperience = () => {
    setActiveExperience((current) =>
      current === 0 ? experienceItems.length - 1 : current - 1,
    )
  }

  const showNextExperience = () => {
    setActiveExperience((current) =>
      current === experienceItems.length - 1 ? 0 : current + 1,
    )
  }

  const handleExperienceTouchStart = (event) => {
    experienceTouchStart.current = event.changedTouches[0].clientX
  }

  const handleExperienceTouchEnd = (event) => {
    if (experienceTouchStart.current === null) {
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchEndX - experienceTouchStart.current

    if (deltaX <= -48) {
      showNextExperience()
    } else if (deltaX >= 48) {
      showPreviousExperience()
    }

    experienceTouchStart.current = null
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const revealOnce = entry.target.closest('.hero-section') !== null

          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')

            if (revealOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!revealOnce) {
            entry.target.removeAttribute('data-revealed')
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 45, 320)}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [activeProjectTab])

  return (
    <main className="portfolio-page">
      <section className="hero-section" id="hero">
        <header className="hero-nav reveal-on-scroll">
          <a className="brand" href="#hero">
            Zuli P.
          </a>

          <div className="hero-nav-actions">
            <nav aria-label={copy.primaryNavigation}>
              <a href="#summary">{copy.nav.summary}</a>
              <a href="#education">{copy.nav.education}</a>
              <a href="#experience">{copy.nav.experience}</a>
              <a href="#skills">{copy.nav.skills}</a>
              <a href="#projects">{copy.nav.projects}</a>
              <a href="#contact">{copy.nav.contact}</a>
            </nav>

            <div className="language-switcher" aria-label={copy.languageLabel}>
              <button
                type="button"
                className={`language-option${language === 'id' ? ' is-active' : ''}`}
                onClick={() => setLanguage('id')}
              >
                ID
              </button>
              <button
                type="button"
                className={`language-option${language === 'en' ? ' is-active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <div className="hero-stack">
          <div className="hero-title-layer reveal-on-scroll">
            <h1>Portfolio</h1>
          </div>

          <div className="hero-person-slot reveal-on-scroll" aria-hidden="true">
            <img className="hero-person-image" src="/foto-zp.png" alt="" />
          </div>

          <div className="hero-meta-row reveal-on-scroll">
            <span className="hero-year">2026</span>

            <div className="hero-intro">
              <h2>Zuli Priadi</h2>
              <p>{copy.heroRole}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section summary-section reveal-on-scroll" id="summary">
        <div className="section-heading centered">
          <h2>{copy.summaryTitle}</h2>
        </div>
        <p className="summary-copy">{copy.summaryText}</p>
      </section>

      <section className="content-section education-section" id="education">
        <div className="education-copy reveal-on-scroll">
          <div className="section-heading">
            <h2>{copy.educationTitle}</h2>
          </div>

          <div className="education-list">
            {educationItems.map((item) => {
              const isOpen = openEducation === item.school

              return (
                <article
                  key={item.school}
                  className={`education-item reveal-on-scroll${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="education-trigger"
                    onClick={() => handleEducationToggle(item.school)}
                    aria-expanded={isOpen}
                  >
                    <div className="education-row">
                      <h3>{item.school}</h3>
                      <div className="education-meta">
                        <span>{localize(item.period, language)}</span>
                        <span className={`education-chevron${isOpen ? ' is-open' : ''}`}>
                          <i className="fa-solid fa-chevron-up" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </button>

                  {isOpen ? <p className="education-detail">{localize(item.detail, language)}</p> : null}
                </article>
              )
            })}
          </div>
        </div>

        <div className="education-visual reveal-on-scroll" aria-hidden="true">
          <div className="book-stack">
            <img src="/book.png" alt="" />
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading centered light">
          <h2>{copy.experienceTitle}</h2>
        </div>

        <div className="experience-slider reveal-on-scroll">
          <button
            className="arrow"
            type="button"
            aria-label={copy.previousExperience}
            onClick={showPreviousExperience}
          >
            ‹
          </button>

          <div
            className="experience-content reveal-on-scroll"
            onTouchStart={handleExperienceTouchStart}
            onTouchEnd={handleExperienceTouchEnd}
          >
            <article className="experience-card">
              <div className="experience-header">
                <p className="experience-title">{currentExperience.company}</p>
                <span className="experience-period">{localize(currentExperience.period, language)}</span>
              </div>
              <p className="experience-role">{localize(currentExperience.role, language)}</p>
              <p className="experience-description">{localize(currentExperience.description, language)}</p>
            </article>

            <div className="experience-bullets" aria-label={copy.experienceIndicators}>
              {experienceItems.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  className={`experience-bullet${activeExperience === index ? ' is-active' : ''}`}
                  aria-label={`${copy.goToExperience} ${item.company}`}
                  onClick={() => setActiveExperience(index)}
                />
              ))}
            </div>
          </div>

          <button
            className="arrow"
            type="button"
            aria-label={copy.nextExperience}
            onClick={showNextExperience}
          >
            ›
          </button>
        </div>
      </section>

      <section className="content-section skills-section reveal-on-scroll" id="skills">
        <div className="section-heading centered">
          <h2>{copy.skillsTitle}</h2>
        </div>

        <div className="skills-marquee reveal-on-scroll">
          <div className="skills-track skills-track-right">
            {[...topSkillImages, ...topSkillImages].map((skill, index) => (
              <div
                key={`top-${skill.file}-${index}`}
                className="skill-logo-card"
                aria-hidden={index >= topSkillImages.length}
              >
                <img src={`/skill/${skill.file}`} alt={skill.name} className="skill-logo-image" />
              </div>
            ))}
          </div>

          <div className="skills-track skills-track-left">
            {[...bottomSkillImages, ...bottomSkillImages].map((skill, index) => (
              <div
                key={`bottom-${skill.file}-${index}`}
                className="skill-logo-card"
                aria-hidden={index >= bottomSkillImages.length}
              >
                <img src={`/skill/${skill.file}`} alt={skill.name} className="skill-logo-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section projects-section reveal-on-scroll" id="projects">
        <div className="section-heading centered">
          <h2>{copy.projectsTitle}</h2>
        </div>

        <div className="project-tabs reveal-on-scroll" role="tablist" aria-label={copy.projectCategories}>
          {projectTabOrder.map((tabKey) => {
            const tab = projectTabs[tabKey]

            return (
              <button
                key={tabKey}
                type="button"
                role="tab"
                className={`project-tab${activeProjectTab === tabKey ? ' is-active' : ''}`}
                aria-selected={activeProjectTab === tabKey}
                onClick={() => setActiveProjectTab(tabKey)}
                data-short-label={localize(tab.shortLabel, language)}
              >
                <span className="project-tab-label">{localize(tab.label, language)}</span>
              </button>
            )
          })}
        </div>

        <div className={`projects-grid${projectsUseImages ? '' : ' projects-grid-text'}`}>
          {currentProjects.map((project, index) => (
            <article key={`${activeProjectTab}-${index}`} className="project-item reveal-on-scroll">
              {projectsUseImages ? (
                <div className="project-preview-card">
                  <img
                    src={`/projek/${currentProjectTab.folder}/${project.file}`}
                    alt={project.title}
                    className="project-preview-image"
                  />
                </div>
              ) : (
                <div className="project-preview-card project-preview-card-text">
                  <div className="project-preview-placeholder">{project.title}</div>
                </div>
              )}
              <h3>{project.title}</h3>
              {project.description ? (
                <p className="project-description">{localize(project.description, language)}</p>
              ) : null}
              {project.link ? (
                <a href={project.link} className="detail-button">
                  {copy.detail}
                </a>
              ) : null}
            </article>
          ))}
        </div>
        {currentProjectTab.moreLink ? (
          <div className="projects-more">
            <a
              href={currentProjectTab.moreLink}
              className="detail-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.moreDesigns}
            </a>
          </div>
        ) : null}
      </section>

      <section className="content-section certification-section reveal-on-scroll" id="certification">
        <div className="section-heading centered">
          <h2>{copy.certificationTitle}</h2>
        </div>

        <div className="certification-layout">
          <div className="certificate-preview reveal-on-scroll">
            <div className="certificate-paper">
              <img
                src={`/serifikat/${currentCertification.image}`}
                alt={currentCertification.title}
                className="certificate-image"
              />
            </div>
          </div>

          <div className="certification-tabs">
            {certificationItems.map((item, index) => {
              const isActive = activeCertification === index

              return (
                <div
                  key={item.title}
                  className={`certification-tab-card reveal-on-scroll${isActive ? ' is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="certification-trigger"
                    onClick={() => setActiveCertification(index)}
                    aria-expanded={isActive}
                  >
                    <div>
                      <p className="certification-title">{item.title}</p>
                      <p className="certification-meta">{item.issuer} • {item.period}</p>
                    </div>
                    <span className={`certification-arrow${isActive ? ' is-active' : ''}`}>
                      <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                    </span>
                  </button>
                  {isActive ? (
                    <p className="certification-description">{localize(item.description, language)}</p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="content-section contact-strip reveal-on-scroll" id="contact">
        <div className="section-heading centered">
          <h2>{copy.contactTitle}</h2>
        </div>
        <p>{copy.contactText}</p>
        <div className="contact-socials" aria-label={copy.socialLinks}>
          <a href="https://www.instagram.com/zuli_priadi08/" className="contact-social-link" aria-label="Instagram">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/zuli.priadi.7" className="contact-social-link" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f" aria-hidden="true" />
          </a>
          <a href="https://github.com/zulisiadmin/" className="contact-social-link" aria-label="GitHub">
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/zuli-priadi-2a5974214/" className="contact-social-link" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          </a>
        </div>
        <a href="mailto:zulipriadi@example.com" className="detail-button primary-contact">
          zulipriadi@example.com
        </a>
      </section>
    </main>
  )
}

export default App
