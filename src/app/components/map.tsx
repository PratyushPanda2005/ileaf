"use client";

export default function Map() {
  return (
    <div className="w-full h-[350px] mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.985736372041!2d76.3038477!3d10.0102416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0f11d93ca9%3A0x1e17a56a818ac278!2sI-Leaf%20Doors%20%26%20Windows!5e0!3m2!1sen!2sin!4v1712345678901&t=m&z=15"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}