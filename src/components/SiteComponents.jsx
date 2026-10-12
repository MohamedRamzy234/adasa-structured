import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import blogData from "../data/posts.json";

const { posts, categories, siteInfo } = blogData;

export function Header() {

  const [menuOpen, setMenuOpen] = useState(false);



  function closeMenu() {

    setMenuOpen(false);

  }



  return (

    <header className="site-header home-site-header">

      <div className="header-inner">

        <Link className="brand" to="/" onClick={closeMenu} aria-label="عدسة، الصفحة الرئيسية">

          <span className="brand-mark" aria-hidden="true">

            <svg viewBox="0 0 48 48">

              <circle className="brand-mark-ring" cx="22" cy="22" r="18.5" />

              <path d="M22 8c5 0 9 3 11 7l-9 6a5 5 0 0 0-6-1l-5-9c2-2 5-3 9-3Z" />

              <path d="M36 24c0 5-3 9-7 11l-6-9a5 5 0 0 0 1-6l9-5c2 2 3 5 3 9Z" />

              <path d="M22 36c-5 0-9-3-11-7l9-6a5 5 0 0 0 6 1l5 9c-2 2-5 3-9 3Z" />

              <path d="M34 34h7a3 3 0 0 1 3 3v4l-6-3h-4a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Z" />

            </svg>

          </span>

          <span className="brand-copy">

            <strong>{siteInfo.name}</strong>

            <small>حكايات تُروى بالضوء</small>

          </span>

        </Link>



        <button

          className="menu-toggle"

          type="button"

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}

          aria-expanded={menuOpen}

        >

          <span />

          <span />

        </button>



        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="التنقل الرئيسي">

          <NavLink to="/" end onClick={closeMenu}>

            الرئيسية

          </NavLink>

          <NavLink to="/blog" onClick={closeMenu}>

            المدونة

          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>

            عن عدسة

          </NavLink>

        </nav>



        <Link className="header-cta" to="/blog">

          اكتشف القصص <span aria-hidden="true">←</span>

        </Link>

      </div>

    </header>

  );

}



export function Footer() {

  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);



  function handleSubmit(event) {

    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);

    setEmail("");

  }



  return (

    <footer className="site-footer home-site-footer">

      <div className="home-footer-inner">

        <div className="home-footer-about">

          <Link className="footer-brand" to="/">

            عدسة<span aria-hidden="true">ع</span>

          </Link>

          <p>{siteInfo.description}</p>

          <div className="footer-socials" aria-label="روابط التواصل الاجتماعي">

            <a href={siteInfo.social.twitter} aria-label="X">

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M18.3 3h3.3l-7.2 8.2L23 21h-6.6l-5.2-6.8L5.2 21H1.9l7.7-8.8L1 3h6.8l4.7 6.2L18.3 3Zm-1.2 16h1.8L7 4.9H5.1L17.1 19Z" />

              </svg>

            </a>

            <a href={siteInfo.social.github} aria-label="GitHub">

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />

              </svg>

            </a>

            <a href={siteInfo.social.linkedin} aria-label="LinkedIn">

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />

              </svg>

            </a>

            <a href={siteInfo.social.youtube} aria-label="YouTube">

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.7 4.7 12 4.7 12 4.7s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-4.8ZM9.8 15.3V8.7l5.8 3.3-5.8 3.3Z" />

              </svg>

            </a>

          </div>

        </div>

        <div className="home-footer-links">

          <div>

            <h3>استكشف</h3>

            <NavLink to="/" end>الرئيسية</NavLink>

            <Link to="/blog">المدونة</Link>

            <Link to="/about">من نحن</Link>

          </div>

          <div>

            <h3>التصنيفات</h3>

            {categories.slice(0, 4).map((category) => (

              <Link to="/blog" key={category.name}>{category.name}</Link>

            ))}

          </div>

        </div>

        <div className="footer-newsletter">

          <h3>ابقى على اطلاع</h3>

          <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>

          <form onSubmit={handleSubmit}>

            <input

              type="email"

              value={email}

              onChange={(event) => {

                setEmail(event.target.value);

                setSubscribed(false);

              }}

              placeholder="أدخل بريدك الإلكتروني"

              aria-label="البريد الإلكتروني"

              required

            />

            <button className="button button-dark" type="submit">

              {subscribed ? "تم الاشتراك!" : "اشترك"}

            </button>

          </form>

        </div>

        <div className="home-footer-bottom">

          <span>© 2026 عدسة. صنع بكل <span aria-hidden="true">♥</span> جميع الحقوق محفوظة.</span>

          <div className="footer-legal">

            <a href="/#privacy">سياسة الخصوصية</a>

            <a href="/#terms">شروط الخدمة</a>

          </div>

        </div>

      </div>

    </footer>

  );

}



export function CategoryLabel({ children }) {

  return <span className="category-label">{children}</span>;

}



export function PostCard({ post, view = "grid" }) {

  return (

    <article className={`post-card${view === "list" ? " post-card-list" : ""}`}>

      <Link className="post-image-link" to={`/blog/${post.slug}`} aria-label={`اقرأ: ${post.title}`}>

        <img className="post-image" src={post.image} alt="" loading="lazy" />

        <CategoryLabel>{post.category}</CategoryLabel>

      </Link>

      <div className="post-card-body">

        <div className="post-meta">

          <span>{formatDate(post.date)}</span>

          <span className="meta-dot" aria-hidden="true" />

          <span className="meta-time">

            {post.readTime}

            <svg viewBox="0 0 24 24" aria-hidden="true">

              <circle cx="12" cy="12" r="9" />

              <path d="M12 7v5l3.5 2" />

            </svg>

          </span>

        </div>

        <h3>

          <Link to={`/blog/${post.slug}`}>{post.title}</Link>

        </h3>

        <p className="post-excerpt">{post.excerpt}</p>

        <div className="post-card-bottom">

          <div className="author">

            <img src={post.author.avatar} alt="" loading="lazy" />

            <div>

              <strong>{post.author.name}</strong>

              <span>{post.author.role}</span>

            </div>

          </div>

          <Link className="read-link" to={`/blog/${post.slug}`} aria-label={`اقرأ ${post.title}`}>

            <span aria-hidden="true">‹</span>

          </Link>

        </div>

      </div>

    </article>

  );

}



export function formatDate(date) {

  return new Intl.DateTimeFormat("ar", {

    day: "numeric",

    month: "long",

    year: "numeric",

  }).format(new Date(`${date}T00:00:00`));

}



export function SectionEyebrow({ children }) {

  return <span className="section-eyebrow">{children}</span>;

}



export function HomePage() {

  const featuredPosts = posts.filter((post) => post.featured).slice(0, 6);

  const authorCount = new Set(posts.map((post) => post.author.name)).size;

  const categoryCounts = categories.map((category) => ({

    ...category,

    count: posts.filter((post) => post.category === category.name).length,

  }));

  const stats = [

    { number: `${posts.length}+`, label: "مقالة", icon: "✎" },

    { number: `${authorCount}+`, label: "كاتب", icon: "♟" },

    { number: categoryCounts.length, label: "فئات", icon: "◈" },

    { number: "2025–26", label: "منذ", icon: "▰" },

  ];



  return (

    <main className="home-page">

      <section className="home-hero">

        <div className="hero-copy">

          <span className="home-pill">مرحباً بك في عدسة <span>● ●</span></span>

          <h1>

            اكتشف جمال العالم

            <br />

            من خلال <span>عدستك</span>

          </h1>

          <p>

            انطلق في رحلة بصرية ملهمة، واستكشف أسرار التصوير الفوتوغرافي مع نصائح المحترفين

            وإبداعات المصورين.

          </p>

          <div className="hero-actions">

            <Link className="button button-dark" to="/blog">

              استكشف المقالات <span aria-hidden="true">←</span>

            </Link>

            <a className="home-about-button" href="#about">

              <span aria-hidden="true">ⓘ</span> اعرف المزيد

            </a>

          </div>

        </div>

      </section>



      <section className="home-stats page-container" aria-label="عدسة بالأرقام">

        {stats.map((stat) => (

          <div className="stat-card" key={stat.label}>

            <span className="stat-icon" aria-hidden="true">{stat.icon}</span>

            <strong>{stat.number}</strong>

            <span>{stat.label}</span>

          </div>

        ))}

      </section>



      <section className="home-featured page-container" id="featured">

        <div className="home-section-title">

          <SectionEyebrow>مختار لكم <span>● ●</span></SectionEyebrow>

          <h2>مقالات <span>مميزة</span></h2>

          <p>اكتشف مجموعة مختارة من أفضل مقالاتنا ونصائحنا في عالم التصوير الفوتوغرافي.</p>

          <Link className="home-section-link" to="/blog">عرض كل المقالات <span>←</span></Link>

        </div>

        <div className="home-articles">

          {featuredPosts.map((post) => (

            <article className="home-article-card" key={post.id}>

              <Link className="home-article-image" to={`/blog/${post.slug}`}>

                <img src={post.image} alt="" loading="lazy" />

                <span className="article-featured-badge">★ <span>مميز</span></span>

              </Link>

              <div className="home-article-body">

                <div className="home-article-meta">

                  <CategoryLabel>{post.category}</CategoryLabel>

                  <span>◷ {post.readTime}</span>

                </div>

                <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>

                <p>{post.excerpt}</p>

                <div className="home-article-author">

                  <img src={post.author.avatar} alt="" loading="lazy" />

                  <div><strong>{post.author.name}</strong><span>{post.author.role}</span></div>

                  <Link to={`/blog/${post.slug}`} aria-label={`اقرأ ${post.title}`}>←</Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>



      <section className="home-categories page-container" id="categories">

        <div className="home-section-title">

          <SectionEyebrow>استكشف حسب الموضوع <span>● ●</span></SectionEyebrow>

          <h2>تصفح <span>التصنيفات</span></h2>

          <p>من البورتريه إلى المناظر الطبيعية، اختر المجال الذي يلهمك.</p>

        </div>

        <div className="category-card-grid">

          {categoryCounts.map((category, index) => (

            <Link className="home-category-card" to="/blog" key={category.name}>

              <span className="category-icon" aria-hidden="true">{["♙", "◉", "☼", "☷", "◈"][index]}</span>

              <strong>{category.name}</strong>

              <span>{category.count} مقالات</span>

            </Link>

          ))}

        </div>

      </section>



      <NewsletterSection />



      <section className="home-about page-container" id="about">

        <div className="about-inner">

          <SectionEyebrow>عن عدسة</SectionEyebrow>

          <h2>عدسة، حيث تلتقي<br />الحكاية بالصورة.</h2>

          <p>{siteInfo.description}</p>

          <Link className="about-link" to="/blog">ابدأ رحلتك معنا <span aria-hidden="true">←</span></Link>

        </div>

        <div className="about-mark" aria-hidden="true">ع</div>

      </section>

    </main>

  );

}



export function NewsletterSection() {

  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);



  function handleSubmit(event) {

    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);

    setEmail("");

  }



  return (

    <section className="newsletter-section page-container">

      <span className="newsletter-icon" aria-hidden="true">✉</span>

      <h2><span>ابقَ على اطلاع</span> بكل جديد</h2>

      <p>اشترك في نشرتنا البريدية ليصلك كل جديد من عالم التصوير.</p>

      <form className="newsletter-form" onSubmit={handleSubmit}>

        <input

          type="email"

          value={email}

          onChange={(event) => {

            setEmail(event.target.value);

            setSubscribed(false);

          }}

          placeholder="أدخل بريدك الإلكتروني"

          aria-label="البريد الإلكتروني"

          required

        />

        <button className="button button-dark" type="submit">اشترك الآن</button>

      </form>

      <div className="newsletter-proof">

        <div className="avatar-stack" aria-hidden="true">

          {posts.slice(0, 3).map((post) => <img key={post.id} src={post.author.avatar} alt="" />)}

        </div>

        <span>

          {subscribed ? "شكراً لاشتراكك في نشرتنا البريدية!" : "انضم إلى مجتمع من المبدعين والمصورين"}

        </span>

      </div>

    </section>

  );

}



export function SearchField({ value, onChange }) {

  return (

    <label className="search-field">

      <svg viewBox="0 0 24 24" aria-hidden="true">

        <circle cx="10.8" cy="10.8" r="6.8" />

        <path d="m16 16 5 5" />

      </svg>

      <input

        type="search"

        value={value}

        onChange={(event) => onChange(event.target.value)}

        placeholder="ابحث عن حكاية..."

        aria-label="ابحث في المقالات"

      />

      {value && (

        <button type="button" onClick={() => onChange("")} aria-label="مسح البحث">

          ×

        </button>

      )}

    </label>

  );

}



export function Pagination({ currentPage, pageCount, onPageChange }) {

  if (pageCount < 2) return null;



  return (

    <>

      <nav className="pagination" aria-label="التنقل بين صفحات المقالات">

        <button

          type="button"

          className="pagination-arrow"

          onClick={() => onPageChange(currentPage - 1)}

          disabled={currentPage === 1}

          aria-label="الصفحة السابقة"

        >

          ‹

        </button>

        <div className="page-numbers">

          {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (

            <button

              type="button"

              className={page === currentPage ? "active" : ""}

              key={page}

              onClick={() => onPageChange(page)}

              aria-current={page === currentPage ? "page" : undefined}

            >

              {page}

            </button>

          ))}

        </div>

        <button

          type="button"

          className="pagination-arrow"

          onClick={() => onPageChange(currentPage + 1)}

          disabled={currentPage === pageCount}

          aria-label="الصفحة التالية"

        >

          ›

        </button>

      </nav>

      <p className="pagination-caption">صفحة {currentPage} من {pageCount}</p>

    </>

  );

}



export function BlogPage() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const [view, setView] = useState("grid");

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;



  const filteredPosts = posts.filter((post) => {

    const matchesCategory = selectedCategory === "الكل" || post.category === selectedCategory;

    const searchableText = [

      post.title,

      post.excerpt,

      post.category,

      post.author.name,

      ...post.tags,

    ]

      .join(" ")

      .toLocaleLowerCase("ar");

    return matchesCategory && searchableText.includes(search.trim().toLocaleLowerCase("ar"));

  });

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const visiblePosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);



  useEffect(() => {

    setCurrentPage(1);

  }, [search, selectedCategory]);



  function changePage(page) {

    setCurrentPage(Math.min(Math.max(page, 1), pageCount));

    document.querySelector(".blog-results")?.scrollIntoView({ behavior: "smooth", block: "start" });

  }



  return (

    <main className="blog-page">

      <section className="blog-heading">

        <div className="blog-heading-copy">

          <span className="home-pill">

            <svg className="home-pill-icon" viewBox="0 0 20 20" aria-hidden="true">

              <rect x="3" y="3" width="14" height="14" rx="2" />

              <path d="M6.5 7.5h7M6.5 10.5h7M6.5 13.5h4" />

            </svg>

            مدونتنا <span>●</span>

          </span>

          <h1>استكشف <span>مقالاتنا</span></h1>

          <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>

        </div>

      </section>



      <section className="blog-content page-container">

        <div className="blog-toolbar">

          <div className="filter-controls">

            <div className="category-filters" aria-label="تصفية المقالات حسب التصنيف">

              <button

                className={`filter-chip${selectedCategory === "الكل" ? " selected" : ""}`}

                type="button"

                onClick={() => setSelectedCategory("الكل")}

              >

                جميع المقالات

              </button>

              {categories.map((category) => (

                <button

                  className={`filter-chip${selectedCategory === category.name ? " selected" : ""}`}

                  type="button"

                  key={category.name}

                  onClick={() => setSelectedCategory(category.name)}

                >

                  {category.name}

                </button>

              ))}

            </div>

            <SearchField value={search} onChange={setSearch} />

          </div>

          <div className="results-bar">

            <p>

              عرض <span>{filteredPosts.length}</span> مقالات

            </p>

            <div className="view-switch" aria-label="طريقة عرض المقالات">

              <button

                className={view === "grid" ? "active" : ""}

                type="button"

                onClick={() => setView("grid")}

                aria-label="عرض شبكي"

                aria-pressed={view === "grid"}

              >

                <svg viewBox="0 0 20 20" aria-hidden="true">

                  <rect x="2" y="2" width="6" height="6" rx="1" />

                  <rect x="12" y="2" width="6" height="6" rx="1" />

                  <rect x="2" y="12" width="6" height="6" rx="1" />

                  <rect x="12" y="12" width="6" height="6" rx="1" />

                </svg>

              </button>

              <button

                className={view === "list" ? "active" : ""}

                type="button"

                onClick={() => setView("list")}

                aria-label="عرض قائمة"

                aria-pressed={view === "list"}

              >

                <svg viewBox="0 0 20 20" aria-hidden="true">

                  <path d="M2 4h2m3 0h11M2 10h2m3 0h11M2 16h2m3 0h11" />

                </svg>

              </button>

            </div>

          </div>

        </div>



        <div className="blog-results">

          {visiblePosts.length > 0 ? (

            <div className={`post-grid${view === "list" ? " list-view" : ""}`}>

              {visiblePosts.map((post) => (

                <PostCard key={post.id} post={post} view={view} />

              ))}

            </div>

          ) : (

            <div className="empty-state">

              <span aria-hidden="true">⌕</span>

              <h2>لم نعثر على حكاية تطابق بحثك</h2>

              <p>جرّب كلمة أخرى أو اختر تصنيفاً مختلفاً.</p>

              <button

                className="button button-dark"

                type="button"

                onClick={() => {

                  setSearch("");

                  setSelectedCategory("الكل");

                }}

              >

                عرض جميع المقالات

              </button>

            </div>

          )}

        </div>



        <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={changePage} />

      </section>

    </main>

  );

}



const TEAM_MEMBER_NAMES = [

  "سالم أحمد",

  "محمد علي",

  "إبراهيم حسن",

  "داود خالد",

  "ليث محمود",

  "جمال عبدالله",

  "خالد الفيصل",

  "نادر سعيد",

  "هاني الشمري",

  "عمر الراشد",

  "فارس العلي",

  "سامي الحربي",

  "رامي الخطيب",

  "باسم المصري",

  "منصور الزهراني",

  "فيصل الدوسري",

  "لؤي الصالح",

  "طارق النعيمي",

  "راشد الجاسر",

];



export function TeamSocialLinks() {

  return (

    <div className="team-socials">

      <a href={siteInfo.social.twitter} aria-label="X">

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M18.3 3h3.3l-7.2 8.2L23 21h-6.6l-5.2-6.8L5.2 21H1.9l7.7-8.8L1 3h6.8l4.7 6.2L18.3 3Zm-1.2 16h1.8L7 4.9H5.1L17.1 19Z" />

        </svg>

      </a>

      <a href={siteInfo.social.github} aria-label="GitHub">

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />

        </svg>

      </a>

      <a href={siteInfo.social.linkedin} aria-label="LinkedIn">

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />

        </svg>

      </a>

    </div>

  );

}



export function AboutPage() {

  const authorsByName = new Map();

  posts.forEach((post) => {

    if (!authorsByName.has(post.author.name)) {

      authorsByName.set(post.author.name, post.author);

    }

  });

  const team = TEAM_MEMBER_NAMES.map((name) => authorsByName.get(name)).filter(Boolean);

  const authorCount = authorsByName.size;



  const stats = [

    {

      label: "مقالة منشورة",

      number: `${posts.length}+`,

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />

          <path d="M8 8.5h8M8 12h8M8 15.5h5" />

        </svg>

      ),

    },

    {

      label: "قارئ شهرياً",

      number: "2+مليون",

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <circle cx="9" cy="8" r="3.2" />

          <path d="M3 19c0-3.3 2.7-5.8 6-5.8s6 2.5 6 5.8" />

          <circle cx="17.3" cy="9" r="2.4" />

          <path d="M15.3 13.4c2.8.3 4.7 2.6 4.7 5.6" />

        </svg>

      ),

    },

    {

      label: "تصنيف",

      number: `${categories.length}+`,

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M12 6c-2.2-1.3-5.2-1.3-7.5 0v12.5c2.3-1.3 5.3-1.3 7.5 0 2.2-1.3 5.2-1.3 7.5 0V6c-2.3-1.3-5.3-1.3-7.5 0Z" />

          <path d="M12 6v12.5" />

        </svg>

      ),

    },

    {

      label: "كاتب خبير",

      number: `${authorCount}+`,

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M4.5 18.5 5.6 14l9.3-9.3 3.2 3.2L8.8 17.2l-4.3 1.3Z" />

          <path d="M13.2 6.4l3.2 3.2" />

        </svg>

      ),

    },

  ];



  const values = [

    {

      title: "الجودة أولاً",

      text: "محتوى مدروس ومكتوب بخبرة",

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <circle cx="12" cy="12" r="7.8" />

          <circle cx="12" cy="12" r="4.2" />

          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />

        </svg>

      ),

    },

    {

      title: "تركيز عملي",

      text: "أمثلة واقعية يمكنك تطبيقها اليوم",

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M13 2 5 14h6l-1 8 9-12h-6l1-8Z" />

        </svg>

      ),

    },

    {

      title: "المجتمع",

      text: "تعلم مع آلاف المصورين",

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M2.5 11.3 7 8.3l4.3 3-2 2.2-2.3-1.6-2.2 1.6-2.3-2.2Z" />

          <path d="M21.5 11.3 17 8.3l-4.3 3 2 2.2 2.3-1.6 2.2 1.6 2.3-2.2Z" />

          <path d="M9 13.5l3 3 3-3" />

        </svg>

      ),

    },

    {

      title: "دائماً محدث",

      text: "أحدث الاتجاهات وأفضل الممارسات",

      icon: (

        <svg viewBox="0 0 24 24" aria-hidden="true">

          <path d="M4.5 9a8 8 0 0 1 13-5l2-2" />

          <path d="M19.5 15a8 8 0 0 1-13 5l-2 2" />

          <path d="M17.5 2v5h-5M6.5 22v-5h5" />

        </svg>

      ),

    },

  ];



  return (

    <main className="about-page">

      <section className="blog-heading about-hero">

        <div className="blog-heading-copy">

          <span className="home-pill">

            من نحن <span>● ●</span>

          </span>

          <h1>

            مهمتنا هي الإعلام <span>والإلهام</span>

          </h1>

          <p>

            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية

            لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من

            خلال محتوى عالي الجودة.

          </p>

        </div>

      </section>



      <section className="home-stats page-container" aria-label="عدسة بالأرقام">

        {stats.map((stat) => (

          <div className="stat-card" key={stat.label}>

            <span className="stat-icon" aria-hidden="true">{stat.icon}</span>

            <strong>{stat.number}</strong>

            <span>{stat.label}</span>

          </div>

        ))}

      </section>



      <section className="values-section page-container">

        <h2 className="values-heading">

          <span aria-hidden="true" />

          قيمنا

          <span aria-hidden="true" />

        </h2>

        <p className="values-subtitle">المبادئ التي توجه كل ما نقوم بإنشائه</p>

        <div className="values-grid">

          {values.map((value) => (

            <div className="value-card" key={value.title}>

              <span className="value-icon" aria-hidden="true">{value.icon}</span>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

            </div>

          ))}

        </div>

      </section>



      <section className="team-section page-container">

        <div className="team-intro">

          <span className="home-pill">

            فريقنا <span>●</span>

          </span>

          <h2>تعرف على كتابنا</h2>

          <p>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>

        </div>

        <div className="team-grid">

          {team.map((member) => (

            <div className="team-card" key={member.name}>

              <span className="team-avatar">

                <img src={member.avatar} alt="" loading="lazy" />

                <span className="team-badge" aria-hidden="true">✓</span>

              </span>

              <strong>{member.name}</strong>

              <span className="team-role">{member.role}</span>

              <TeamSocialLinks />

            </div>

          ))}

        </div>

      </section>



      <section className="about-cta">

        <div className="about-cta-inner page-container">

          <h2>لديك أسئلة؟ دعنا نتحدث!</h2>

          <p>

            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء

            التحية، لا تتردد في التواصل.

          </p>

          <div className="about-cta-actions">

            <a className="about-cta-button solid" href={`mailto:${siteInfo.social.email ?? "hello@adasah.example"}`}>

              تواصل معنا <span aria-hidden="true">✉</span>

            </a>

            <Link className="about-cta-button outline" to="/blog">

              تصفح المقالات

            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}



export function getArticleBlocks(content) {

  return content.split(/\n{2,}/).filter((block) => block.trim());

}



export function getArticleHeadings(content) {

  let index = 0;

  return getArticleBlocks(content)

    .filter((block) => block.startsWith("## "))

    .map((block) => ({ id: `section-${index++}`, title: block.slice(3) }));

}



export function CalendarIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />

      <path d="M3.5 10h17M8 3v4M16 3v4" />

    </svg>

  );

}



export function ClockIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <circle cx="12" cy="12" r="9" />

      <path d="M12 7v5l3.5 2" />

    </svg>

  );

}



export function ListIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d="M9 6h12M9 12h12M9 18h12" />

      <circle cx="4" cy="6" r="1.2" fill="currentColor" stroke="none" />

      <circle cx="4" cy="12" r="1.2" fill="currentColor" stroke="none" />

      <circle cx="4" cy="18" r="1.2" fill="currentColor" stroke="none" />

    </svg>

  );

}



export function TagIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d="M3 11.5V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z" />

      <circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />

    </svg>

  );

}



export function ShareIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <circle cx="18" cy="5.5" r="2.4" />

      <circle cx="6" cy="12" r="2.4" />

      <circle cx="18" cy="18.5" r="2.4" />

      <path d="M8.2 10.6 15.8 6.4M8.2 13.4l7.6 4.2" />

    </svg>

  );

}



export function ImageIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />

      <circle cx="9" cy="10" r="1.6" />

      <path d="m4 17 5-5 4 4 3-3 4 4" />

    </svg>

  );

}



export function HomeIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d="M4 11.5 12 4l8 7.5" />

      <path d="M6 10v9h12v-9" />

    </svg>

  );

}



export function LinkIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true">

      <path d="M10.3 13.7a3.5 3.5 0 0 0 5 .3l3-3a3.5 3.5 0 0 0-5-5l-1.4 1.4" />

      <path d="M13.7 10.3a3.5 3.5 0 0 0-5-.3l-3 3a3.5 3.5 0 0 0 5 5l1.4-1.4" />

    </svg>

  );

}



export function WhatsAppIcon() {

  return (

    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none">

      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-1.6-.5-3.3-1.5-4.6-3-1.2-1.3-2-2.7-2.3-3.5-.2-.5-.1-1.1.2-1.6.2-.3.5-.6.8-.8.2-.1.4-.1.6 0l.9.4c.2.1.3.3.3.5v1c0 .2-.1.4-.2.5-.2.2-.4.4-.3.7.3.7.8 1.4 1.4 2 .6.6 1.3 1 2 1.3.3.1.5-.1.7-.3.1-.1.3-.2.5-.2h1c.2 0 .4.1.5.3l.4.9c.1.2.1.4 0 .6Z" />

    </svg>

  );

}



export function ArticleContent({ content }) {

  let headingIndex = 0;

  return getArticleBlocks(content).map((block) => {

    if (block.startsWith("## ")) {

      const id = `section-${headingIndex++}`;

      return (

        <h2 key={id} id={id}>

          <span className="heading-icon" aria-hidden="true">

            <svg viewBox="0 0 24 24">

              <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-1.8A1.5 1.5 0 0 1 9.8 4.4h4.4a1.5 1.5 0 0 1 1.3.8L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />

              <circle cx="12" cy="13" r="3.2" />

            </svg>

          </span>

          {block.slice(3)}

        </h2>

      );

    }

    return <p key={`paragraph-${block}`}>{block}</p>;

  });

}



export function PostDetailPage() {

  const { slug } = useParams();

  const [copied, setCopied] = useState(false);

  const post = posts.find((item) => item.slug === slug);



  if (!post) return <NotFoundPage />;



  const relatedPosts = posts

    .filter((item) => item.category === post.category && item.id !== post.id)

    .slice(0, 3);

  const headings = getArticleHeadings(post.content);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareText = encodeURIComponent(post.title);



  async function handleCopyLink() {

    try {

      await navigator.clipboard.writeText(shareUrl);

      setCopied(true);

      setTimeout(() => setCopied(false), 2200);

    } catch {

      setCopied(false);

    }

  }



  return (

    <main className="detail-page">

      <section

        className="article-hero"

        style={{ backgroundImage: `url(${post.image})` }}

      >

        <div className="article-hero-overlay" aria-hidden="true" />

        <div className="detail-container article-hero-top">

          <nav className="article-breadcrumb" aria-label="مسار التنقل">

            <span className="current">{post.category}</span>

            <span aria-hidden="true">‹</span>

            <Link to="/blog">المدونة</Link>

            <span aria-hidden="true">‹</span>

            <Link to="/" aria-label="الرئيسية">

              <HomeIcon />

            </Link>

          </nav>

          <div className="article-hero-meta">

            <CategoryLabel>{post.category}</CategoryLabel>

            <span className="meta-time">

              {formatDate(post.date)} <CalendarIcon />

            </span>

            <span className="meta-time">

              {post.readTime} <ClockIcon />

            </span>

          </div>

          <h1>{post.title}</h1>

        </div>

      </section>



      <div className="detail-container">

        <div className="article-byline">

          <img src={post.author.avatar} alt="" />

          <div>

            <strong>{post.author.name}</strong>

            <span>{post.author.role}</span>

          </div>

        </div>



        <Link className="back-link" to="/blog">

          <span aria-hidden="true">→</span> العودة إلى المدونة

        </Link>



        {headings.length > 0 && (

          <section className="article-card article-toc">

            <div className="article-card-title">

              <span>محتويات المقال</span>

              <span className="card-icon" aria-hidden="true">

                <ListIcon />

              </span>

            </div>

            <ol>

              {headings.map((heading, index) => (

                <li key={heading.id}>

                  <a href={`#${heading.id}`}>

                    <span>{heading.title}</span>

                    <span className="toc-number">{index + 1}</span>

                  </a>

                </li>

              ))}

            </ol>

          </section>

        )}



        <section className="article-stats">

          <div className="stat-card">

            <span className="stat-icon" aria-hidden="true">

              <CalendarIcon />

            </span>

            <strong>{formatDate(post.date)}</strong>

            <span>تاريخ النشر</span>

          </div>

          <div className="stat-card">

            <span className="stat-icon" aria-hidden="true">

              <ClockIcon />

            </span>

            <strong>{post.readTime}</strong>

            <span>وقت القراءة</span>

          </div>

        </section>



        <section className="newsletter-section article-promo">

          <span className="newsletter-icon" aria-hidden="true">✉</span>

          <h2>لا تفوّت جديدنا</h2>

          <p>اشترك للحصول على أحدث المقالات</p>

          <Link className="button button-dark" to="/blog">تصفح المزيد</Link>

        </section>



        <blockquote className="article-quote">{post.excerpt}</blockquote>



        <article className="article-content">

          <ArticleContent content={post.content} />

        </article>



        <section className="article-card article-tags-card">

          <div className="article-card-title">

            <span>الوسوم</span>

            <span className="card-icon" aria-hidden="true">

              <TagIcon />

            </span>

          </div>

          <div className="article-tags">

            {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}

          </div>

        </section>



        <section className="article-card article-share-card">

          <div className="article-card-title">

            <span>شارك المقال</span>

            <span className="card-icon" aria-hidden="true">

              <ShareIcon />

            </span>

          </div>

          <div className="article-share-actions">

            <button type="button" onClick={handleCopyLink} aria-label="نسخ الرابط">

              <LinkIcon />

            </button>

            <a

              href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}

              target="_blank"

              rel="noreferrer"

              aria-label="مشاركة عبر واتساب"

            >

              <WhatsAppIcon />

            </a>

            <a

              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}

              target="_blank"

              rel="noreferrer"

              aria-label="مشاركة عبر لينكدإن"

            >

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />

              </svg>

            </a>

            <a

              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}

              target="_blank"

              rel="noreferrer"

              aria-label="مشاركة عبر إكس"

            >

              <svg viewBox="0 0 24 24" aria-hidden="true">

                <path d="M18.3 3h3.3l-7.2 8.2L23 21h-6.6l-5.2-6.8L5.2 21H1.9l7.7-8.8L1 3h6.8l4.7 6.2L18.3 3Zm-1.2 16h1.8L7 4.9H5.1L17.1 19Z" />

              </svg>

            </a>

          </div>

          {copied && <span className="copy-feedback" role="status">تم نسخ الرابط!</span>}

        </section>



        <section className="article-author-card">

          <img src={post.author.avatar} alt="" />

          <span className="author-label">كاتب المقال</span>

          <strong>{post.author.name}</strong>

          <span className="author-role">{post.author.role}</span>

          <p>{post.author.role} شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>

        </section>



        {relatedPosts.length > 0 && (

          <section className="related-section">

            <div className="section-heading">

              <div>

                <h2>مقالات قد تعجبك</h2>

                <p>استكشف المزيد من المحتوى المميز</p>

              </div>

              <span className="card-icon" aria-hidden="true">

                <ImageIcon />

              </span>

            </div>

            <div className="related-grid">

              {relatedPosts.map((item) => <PostCard key={item.id} post={item} />)}

            </div>

          </section>

        )}

      </div>

    </main>

  );

}



export function NotFoundPage() {

  return (

    <main className="not-found">

      <span className="not-found-number">404</span>

      <SectionEyebrow>يبدو أننا خرجنا عن الإطار</SectionEyebrow>

      <h1>هذه الصفحة خارج الصورة.</h1>

      <p>الرابط الذي تبحث عنه غير موجود، لكن الحكايات الجميلة لا تزال بانتظارك.</p>

      <Link className="button button-dark" to="/">

        العودة إلى الرئيسية <span aria-hidden="true">←</span>

      </Link>

    </main>

  );

}
