export const excludedSkinCareTitles = [
  "Vaseline Men Body and Face Lotion",
  "Attitude Super Leaves Hand Soap",
  "Olay Ultra Moisture Shea Butter Body Wash",
];

export const extraSkinCareProducts = [
  {
    id: 20001,
    title: "Gentle Face Cleanser",
    description:
      "Daily gentle cleanser that removes dirt and makeup without drying skin.",
    category: "skin-care",
    price: 14.99,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
    ],
  },
  {
    id: 20002,
    title: "Ceramide Face Cream",
    description:
      "Rich daily face cream with ceramides for deep hydration and skin barrier care.",
    category: "skin-care",
    price: 17.5,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
    ],
  },
  {
    id: 20003,
    title: "Vitamin C Brightening Serum",
    description:
      "Brightening serum to improve skin tone and boost glow.",
    category: "skin-care",
    price: 19.99,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
    ],
  },
];

export const findExtraSkinCareProductById = (id) =>
  extraSkinCareProducts.find((product) => String(product.id) === String(id));
