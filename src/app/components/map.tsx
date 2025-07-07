"use client";

const locations = [
  {
    title: "I-Leaf Doors & Windows",
    address: "10.0102416,76.3038477", 
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.985736372041!2d76.3038477!3d10.0102416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0f11d93ca9%3A0x1e17a56a818ac278!2sI-Leaf%20Doors%20%26%20Windows!5e1!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin",
    mapsUrl: "https://goo.gl/maps/your-i-leaf-office-link"
  },
];

export default function Map() {
  return (
    <section className="w-full  py-[44px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-[32px]">
              {/* Map Container */}

              <div className="relative w-full aspect-[16/9] rounded-[32px] border border-[#E5E5E5] overflow-hidden">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
