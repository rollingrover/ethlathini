import { Link } from 'react-router-dom'
import './Home.css'

const FEATURES = [
  { icon: '🌿', title: 'Marula & fig forest',    desc: 'Sleep under a genuine forest canopy — shade, birdsong, and total bush quiet.' },
  { icon: '🐘', title: 'Big 5 at your door',     desc: '2km from Memorial Gate. Lion, leopard, elephant, rhino & buffalo.' },
  { icon: '🏕️', title: 'Overland-ready sites',   desc: 'Levelled sites with power, ablutions, braai stands & room for the full rig.' },
  { icon: '🤝', title: 'Community at heart',      desc: 'Skills development, food garden, restaurant & coffee shop — coming soon.' },
]

const STATS = [
  { num: '1895', label: 'Year Hluhluwe-iMfolozi was founded' },
  { num: '2nd',  label: 'Oldest game reserve in the world' },
  { num: 'Big 5', label: 'Lion · Leopard · Elephant · Rhino · Buffalo' },
  { num: '2km',  label: 'To Memorial Gate from camp' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container home-hero__content">
          <span className="eyebrow home-hero__eyebrow">Hluhluwe-iMfolozi · KwaZulu-Natal</span>
          <h1 className="home-hero__h1">
            Sleep in the forest.<br />
            <em>Wake up in the wild.</em>
          </h1>
          <p className="home-hero__sub">
            Overland campsites in a marula and fig forest — 2km from Memorial Gate,
            Africa's oldest game reserve.
          </p>
          <div className="home-hero__btns">
            <Link to="/book" className="btn-primary">Book a campsite</Link>
            <Link to="/about" className="btn-ghost">Our story</Link>
          </div>
          <div className="home-hero__badge">
            🌍 Africa's oldest game reserve · Est. 1895 · 2nd oldest in the world
          </div>
        </div>
        <div className="home-hero__forest" aria-hidden="true">
          {/* Decorative SVG treeline */}
          <svg viewBox="0 0 1100 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {[80,160,230,320,400,480,560,640,720,800,880,960,1040].map((x, i) => (
              <g key={i} transform={`translate(${x},${i%2===0?10:25})`}>
                <rect x="-3" y="60" width="6" height="60" fill="#1A0A04"/>
                <polygon points="0,0 -22,60 22,60" fill={i%3===0?"#2A5C0A":i%3===1?"#3B6D11":"#1A3A06"}/>
                <polygon points="0,10 -16,55 16,55" fill={i%3===0?"#3B6D11":"#639922"}/>
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* ── Strip ── */}
      <div className="home-strip">
        {['🏕️ Overland campsites', '🌿 Marula & fig forest', '🦁 Big 5 country', '🤝 Community hub'].map(t => (
          <span key={t} className="home-strip__item">{t}</span>
        ))}
      </div>

      {/* ── Features ── */}
      <section className="home-features">
        <div className="container">
          <span className="eyebrow">Why Ethlathini</span>
          <h2 className="home-section__h2">More than a campsite</h2>
          <div className="home-features__grid">
            {FEATURES.map(f => (
              <div key={f.title} className="home-feature-card">
                <span className="home-feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats">
        <div className="container home-stats__grid">
          {STATS.map(s => (
            <div key={s.num} className="home-stat">
              <div className="home-stat__num">{s.num}</div>
              <div className="home-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="home-about">
        <div className="container home-about__inner">
          <div className="home-about__text">
            <span className="eyebrow">The name</span>
            <h2>"Ethlathini"</h2>
            <p>
              In Zulu, <em>ethlathini</em> means <strong>"in the forest"</strong>. It's exactly where you'll find us —
              deep in a marula and fig canopy on the road that leads to Africa's oldest game reserve.
              We're building something rooted in the land and the community: campsites first,
              then chalets, a restaurant, skills workshops, and a food garden.
            </p>
            <Link to="/about" className="btn-primary" style={{marginTop:'1.25rem'}}>Read our story</Link>
          </div>
          <div className="home-about__visual" aria-hidden="true">
            <div className="home-about__card">
              <div className="home-about__card-label">Currently open</div>
              <div className="home-about__card-item">✅ Overland campsites</div>
              <div className="home-about__card-item">✅ Ablution facilities</div>
              <div className="home-about__card-label" style={{marginTop:'0.75rem'}}>Coming soon</div>
              <div className="home-about__card-item">🔜 Chalets</div>
              <div className="home-about__card-item">🔜 Restaurant</div>
              <div className="home-about__card-item">🔜 Coffee shop</div>
              <div className="home-about__card-item">🔜 Conference centre</div>
              <div className="home-about__card-item">🔜 Skills workshop</div>
              <div className="home-about__card-item">🔜 Community food garden</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <h2>Ready to camp in the forest?</h2>
          <p>Book directly with us — no booking fees, instant WhatsApp confirmation.</p>
          <div className="home-hero__btns">
            <Link to="/book" className="btn-primary">Check availability</Link>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener" className="btn-ghost">💬 WhatsApp us</a>
          </div>
        </div>
      </section>
    </>
  )
}
