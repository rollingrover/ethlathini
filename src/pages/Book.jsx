import { useState } from 'react'
import './Book.css'

const SITE_TYPES = [
  {
    id: 'standard',
    icon: '⛺',
    name: 'Standard site',
    desc: 'Shaded site for one vehicle. Power, braai stand, level ground.',
    price: 'R [XX0]',
    includes: ['Up to 2 persons', '1 vehicle', 'Braai stand & firewood'],
    popular: false,
  },
  {
    id: 'overland',
    icon: '🚙',
    name: 'Overland / rooftop',
    desc: 'Larger cleared site for rooftop tents, trailers & overland rigs.',
    price: 'R [XX0]',
    includes: ['Up to 4 persons', 'Vehicle + trailer', 'Extra space for awning'],
    popular: true,
  },
  {
    id: 'group',
    icon: '👥',
    name: 'Group site',
    desc: 'For convoys, 4x4 clubs & group travel. Up to 3 vehicles.',
    price: 'R [XX0]',
    includes: ['Up to 8 persons', '3 vehicles included', 'Communal fire pit'],
    popular: false,
  },
]

const INCLUSIONS = [
  { icon: '🚿', label: 'Hot showers & flush toilets' },
  { icon: '🔌', label: 'Electrical hook-up (220v)' },
  { icon: '🔥', label: 'Braai stand & firewood' },
  { icon: '📶', label: 'Basic WiFi' },
  { icon: '🌙', label: 'Dark skies, zero light pollution' },
  { icon: '🌿', label: 'Shaded marula & fig forest' },
  { icon: '🗑️', label: 'Refuse removal' },
  { icon: '📍', label: '2km from Memorial Gate' },
]

const FAQS = [
  { q: 'How far from the park gate?', a: '2km from Memorial Gate on the main road — you\'re inside Hluhluwe-iMfolozi within 5 minutes of leaving camp.' },
  { q: 'Are pets allowed?', a: 'Yes — well-behaved dogs are welcome on a lead. Note: pets cannot enter the park itself.' },
  { q: 'Do all sites have power?', a: 'Yes. All sites have 220v hook-up for fridges, CPAP machines & device charging. Bring your own extension lead.' },
  { q: 'Can we book just one night?', a: 'Absolutely. We welcome single-night stops and longer stays. A 2-night minimum may apply over peak school holidays.' },
  { q: 'What\'s nearby for supplies?', a: 'Hluhluwe town is a short drive with fuel, a Pick n Pay and ATMs. Our coffee shop and restaurant are under construction.' },
]

export default function Book() {
  const [selectedSite, setSelectedSite] = useState('overland')
  const [form, setForm] = useState({ name:'', surname:'', email:'', phone:'', arrive:'', depart:'', adults:'2', children:'0', vehicle:'', notes:'', newsletter:false })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const nights = (() => {
    if (!form.arrive || !form.depart) return 0
    const n = Math.round((new Date(form.depart) - new Date(form.arrive)) / 86400000)
    return n > 0 ? n : 0
  })()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to your backend / email service
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="book-hero">
        <div className="container">
          <span className="eyebrow">Campsites · Overland & 4x4</span>
          <h1>Book your site in the forest</h1>
          <p>Shaded overland campsites under marula and fig canopy, 2km from Memorial Gate. Full ablutions. Fire pits. Pure bush quiet.</p>
        </div>
      </section>

      <div className="book-notice">
        <div className="container">
          🔜 Chalets, restaurant & coffee shop coming soon — sign up when booking to be notified first
        </div>
      </div>

      {/* Rates */}
      <section className="book-rates">
        <div className="container">
          <span className="eyebrow">Campsite rates per night</span>
          <div className="book-rates__grid">
            {SITE_TYPES.map(s => (
              <div key={s.id} className={`book-rate-card ${s.popular ? 'book-rate-card--featured' : ''} ${selectedSite === s.id ? 'book-rate-card--selected' : ''}`}
                onClick={() => setSelectedSite(s.id)} style={{cursor:'pointer'}}>
                {s.popular && <div className="book-rate-card__badge">Most popular</div>}
                <div className="book-rate-card__icon">{s.icon}</div>
                <div className="book-rate-card__name">{s.name}</div>
                <div className="book-rate-card__desc">{s.desc}</div>
                <div className="book-rate-card__price">{s.price} <span>/ night</span></div>
                <ul className="book-rate-card__list">
                  {s.includes.map(i => <li key={i}>✓ {i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="book-extras">
            <span className="eyebrow" style={{marginBottom:'0.75rem',display:'block'}}>Additional charges</span>
            <div className="book-extras__grid">
              {[['R [XX]','Extra adult'],['R [XX]','Child under 12'],['R [XX]','Extra vehicle'],['Free','Child under 5']].map(([p,l]) => (
                <div key={l} className="book-extra">
                  <div className="book-extra__price">{p}</div>
                  <div className="book-extra__label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <div className="book-inclusions">
        <div className="container">
          <span className="eyebrow" style={{marginBottom:'1rem',display:'block'}}>All sites include</span>
          <div className="book-inclusions__grid">
            {INCLUSIONS.map(i => (
              <div key={i.label} className="book-incl-item">
                <span>{i.icon}</span>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policies */}
      <section className="book-policies">
        <div className="container book-policies__grid">
          {[
            { title:'📅 Booking & payment', items:['50% deposit confirms booking','Balance due on arrival','EFT, card & cash accepted','Minimum stay: 1 night'] },
            { title:'❌ Cancellation', items:['7+ days notice: full refund','3–7 days: 50% refund','Under 3 days: no refund','No-shows forfeit deposit'] },
            { title:'🕐 Check-in & out', items:['Check-in: 12:00–20:00','Check-out: by 10:00','Late arrival: please notify us','Gate code sent on confirmation'] },
            { title:'🛡️ Camp rules', items:['Quiet hours: 22:00–06:00','Pets welcome, on lead','No generator after 21:00','Fires in designated pits only'] },
          ].map(p => (
            <div key={p.title} className="book-policy">
              <div className="book-policy__title">{p.title}</div>
              {p.items.map(i => <div key={i} className="book-policy__item">— {i}</div>)}
            </div>
          ))}
        </div>
      </section>

      {/* Booking form */}
      <section className="book-form-section">
        <div className="container">
          <div className="book-form-card">
            <div className="book-form-header">
              <h2>Request a booking</h2>
              <p>We confirm availability and send your deposit invoice within 4 hours (07:00–20:00)</p>
            </div>

            {submitted ? (
              <div className="book-form-success">
                <div style={{fontSize:'40px'}}>🌿</div>
                <h3>Booking request received!</h3>
                <p>We'll be in touch within 4 hours to confirm your site and send the deposit invoice. Sit back and start planning your Hluhluwe adventure.</p>
              </div>
            ) : (
              <form className="book-form" onSubmit={handleSubmit}>
                <div className="book-form__grid">
                  <div className="book-form__field">
                    <label>First name *</label>
                    <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Your first name"/>
                  </div>
                  <div className="book-form__field">
                    <label>Surname *</label>
                    <input required value={form.surname} onChange={e => setForm({...form,surname:e.target.value})} placeholder="Your surname"/>
                  </div>
                  <div className="book-form__field">
                    <label>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="you@email.com"/>
                  </div>
                  <div className="book-form__field">
                    <label>WhatsApp / phone *</label>
                    <input required value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="0XX XXX XXXX"/>
                  </div>
                  <div className="book-form__field">
                    <label>Arrival date *</label>
                    <input required type="date" value={form.arrive} onChange={e => setForm({...form,arrive:e.target.value})}/>
                  </div>
                  <div className="book-form__field">
                    <label>Departure date *</label>
                    <input required type="date" value={form.depart} onChange={e => setForm({...form,depart:e.target.value})}/>
                  </div>
                  <div className="book-form__field">
                    <label>Adults *</label>
                    <select value={form.adults} onChange={e => setForm({...form,adults:e.target.value})}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="book-form__field">
                    <label>Children under 12</label>
                    <select value={form.children} onChange={e => setForm({...form,children:e.target.value})}>
                      {[0,1,2,3,4].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div className="book-form__field" style={{marginBottom:'1rem'}}>
                  <label>Site type *</label>
                  <div className="book-form__site-grid">
                    {SITE_TYPES.map(s => (
                      <div key={s.id}
                        className={`book-form__site-opt ${selectedSite===s.id ? 'book-form__site-opt--selected':''}`}
                        onClick={() => setSelectedSite(s.id)}>
                        <div>{s.icon} {s.name}</div>
                        <div style={{fontSize:'12px',color:'var(--color-marula-dark)'}}>{s.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="book-form__field" style={{marginBottom:'1rem'}}>
                  <label>Vehicle details</label>
                  <input value={form.vehicle} onChange={e => setForm({...form,vehicle:e.target.value})} placeholder="e.g. Toyota Land Cruiser, rooftop tent + fridge trailer"/>
                </div>

                <div className="book-form__field" style={{marginBottom:'1rem'}}>
                  <label>Anything else we should know?</label>
                  <textarea rows={3} value={form.notes} onChange={e => setForm({...form,notes:e.target.value})} placeholder="Special requests, pets, late arrival, accessibility needs..."/>
                </div>

                {nights > 0 && (
                  <div className="book-form__total">
                    <div>
                      <div style={{fontSize:'13px',color:'var(--color-bark)'}}>Estimated stay</div>
                      <div style={{fontSize:'12px',color:'var(--color-marula-dark)',marginTop:'2px'}}>{nights} night{nights!==1?'s':''} · rates TBC</div>
                    </div>
                    <div style={{textAlign:'right'}}>
                      <div style={{fontSize:'11px',color:'var(--color-bark)'}}>50% deposit on confirmation</div>
                    </div>
                  </div>
                )}

                <label className="book-form__check">
                  <input type="checkbox" checked={form.newsletter} onChange={e => setForm({...form,newsletter:e.target.checked})}/>
                  Notify me when chalets & restaurant open
                </label>

                <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'0.9rem',fontSize:'15px',marginTop:'0.5rem'}}>
                  Send booking request →
                </button>
                <p style={{fontSize:'11px',color:'#999',textAlign:'center',marginTop:'0.5rem'}}>
                  By submitting you agree to our cancellation policy. We reply within 4 hours (07:00–20:00).
                </p>
              </form>
            )}
          </div>

          {/* WhatsApp strip */}
          <div className="book-wa">
            <span>Prefer to chat? <strong>WhatsApp us directly</strong> — usually online from 06:30</span>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener" className="book-wa__btn">
              💬 WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="book-faq">
        <div className="container">
          <span className="eyebrow">Common questions</span>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(22px,3vw,32px)',fontWeight:500,color:'var(--color-forest)',margin:'0.4rem 0 1.5rem'}}>FAQs</h2>
          {FAQS.map((f,i) => (
            <div key={i} className="book-faq__item" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
              <div className="book-faq__q">
                <span>{f.q}</span>
                <span>{openFaq===i ? '−' : '+'}</span>
              </div>
              {openFaq===i && <div className="book-faq__a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
