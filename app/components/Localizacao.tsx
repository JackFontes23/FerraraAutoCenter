export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Localização</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.054396670044!2d-42.1185577886678!3d-7.002877292969217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79c9057bb3e2b29%3A0x4453f7362ee4bbf1!2sFerrara%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1745450253813!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}