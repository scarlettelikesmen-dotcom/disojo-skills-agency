/* https://grand-hotel.com.ua/GA4.js */
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", {
  linker: {
    accept_incoming: true,
    domains: ["www.simplebooking.it"],
  },
  anonymize_ip: true,
  transport_type: "beacon",
});
// gtag("config", "UA-109878774-5");
gtag("config", "G-9V65B0H2LZ");