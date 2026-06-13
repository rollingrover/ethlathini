import './FindUs.css'

export default function FindUs() {
  return (
    <>
      <section className="findus-hero">
        <div className="container">
          <span className="eyebrow">Getting here</span>
          <h1>Find us</h1>
          <p>On the main road to Memorial Gate, 2km before the entrance to Hluhluwe-iMfolozi Park.</p>
        </div>
      </section>
      <section className="findus-body">
        <div className="container findus-body__inner">
          <div className="findus-map-placeholder">
            {/* TODO: Replace with a real Google Maps embed */}
            <div className="findus-map-note">
              📍 <strong>Ethlathini Rest Camp</strong><br />
              Memorial Gate Road, Hluhluwe<br />
              KwaZulu-Natal<br /><br />
              <em>Add your Google Maps embed here</em>
            </div>
          </div>
          <div className="findus-details">
            <div className="findus-card">
              <div className="findus-card__label">Address</div>
              <div className="findus-card__val">Memorial Gate Road<br />Hluhluwe, KwaZulu-Natal</div>
            </div>
            <div className="findus-card">
              <div className="findus-card__label">GPS coordinates</div>
              <div className="findus-card__val">–28.XXXXX, 31.XXXXX</div>
              <div className="findus-card__note">Update with your exact coordinates</div>
            </div>
            <div className="findus-card">
              <div className="findus-card__label">Distance from Memorial Gate</div>
              <div className="findus-card__val">2km</div>
            </div>
            <div className="findus-card">
              <div className="findus-card__label">Phone / WhatsApp</div>
              <div className="findus-card__val"><a href="tel:+27000000000">+27 (0)00 000 0000</a></div>
            </div>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener" className="btn-primary" style={{marginTop:'0.5rem',justifyContent:'center'}}>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
