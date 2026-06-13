import './About.css'

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1>Born from the forest,<br /><em>rooted in community</em></h1>
        </div>
      </section>
      <section className="about-body">
        <div className="container about-body__inner">
          <div className="about-text">
            <h2>Ethlathini — "in the forest"</h2>
            <p>
              Nestled in a marula and fig forest on the main road to Memorial Gate, Ethlathini Rest Camp
              is more than an overnight stop. It's a growing destination rooted in the KwaZulu-Natal
              landscape and the Hluhluwe community.
            </p>
            <p>
              We started with overland campsites — shaded, powered, and properly set up for travellers
              with rooftop tents, trailers, and big rigs. From here we're building chalets, a restaurant,
              a coffee shop, a conference centre, a skills development workshop, and a community food garden.
            </p>
            <p>
              Our location is extraordinary: 2km from Memorial Gate, Hluhluwe-iMfolozi Park —
              Africa's oldest game reserve, established in 1895. Big 5 country, white rhino stronghold,
              and one of the most biodiverse wilderness areas on the continent.
            </p>
          </div>
          <div className="about-sidebar">
            <div className="about-card">
              <div className="about-card__label">The name</div>
              <div className="about-card__val">"Ethlathini"</div>
              <div className="about-card__note">In Zulu: <em>"in the forest"</em></div>
            </div>
            <div className="about-card">
              <div className="about-card__label">Location</div>
              <div className="about-card__val">Hluhluwe</div>
              <div className="about-card__note">KwaZulu-Natal, South Africa</div>
            </div>
            <div className="about-card">
              <div className="about-card__label">Distance to gate</div>
              <div className="about-card__val">2km</div>
              <div className="about-card__note">Memorial Gate, Hluhluwe-iMfolozi Park</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
