export const productos = [
    {
      id: 1,
      marca: "Nike",
      modelo: "Giannis Inmortality",
      precio: 8500,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://m.media-amazon.com/images/I/51j6D5JXmGL._AC_SL1100_.jpg",
    },
    {
      id: 2,
      marca: "Adidas",
      modelo: "Harden Stepback 3",
      precio: 13000,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://m.media-amazon.com/images/I/71-JOvINmYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      marca: "Under Urmor",
      modelo: "Curry Flow Cozy",
      precio: 8900,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://m.media-amazon.com/images/I/6184L3hdBBL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      marca: "Nike",
      modelo: "Kyrie Flyptrap",
      precio: 9900,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://www.tradeinn.com/f/13747/137471968_3/nike-zapatillas-baloncesto-kyrie-flytrap-iii.jpg",
    },
    {
      id: 5,
      marca: "Adidas",
      modelo: "Trae Young",
      precio: 14900,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoi_Ax__druEfAwEhjRHlXYp1LmA8h_hcIw&s",
    },
    {
      id: 6,
      marca: "Nike",
      modelo: "Air More UpTempo Olympic",
      precio: 16800,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://media.gq.com.mx/photos/661d996d647fe71d91f2d5d4/master/w_1600%2Cc_limit/Nike_Air_More_Uptempo_Olympic_zapato_izquierdo.jpg",
    },
    {
      id: 7,
      marca: "Nike",
      modelo: "Kevin Durant 14",
      precio: 15400,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://i.ebayimg.com/images/g/Y~4AAOSwJChk0E~F/s-l2400.jpg",
    },
    {
      id: 8,
      marca: "Nike",
      modelo: "Giannis Immortality 3",
      precio: 17990,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2026451d/products/NIDZ7533-600/NIDZ7533-600-2.JPG",
    },
    {
      id: 9,
      marca: "Adidas",
      modelo: "D.O.N Issue",
      precio: 12290,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdabccd1d/products/ADH67719/ADH67719-2.JPG",
    },
    {
      id: 10,
      marca: "Adidas",
      modelo: "Dame Certified 2",
      precio: 13480,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://m.media-amazon.com/images/I/71VerzEzvOL.jpg",
    },
    {
      id: 11,
      marca: "Under Armor",
      modelo: "Curry 11 Champion Mindset",
      precio: 15690,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://basketworld.com/27194-large_default/curry-11-champion-mindset.jpg",
    },
    {
      id: 12,
      marca: "Under Armor",
      modelo: "Curry 4 Flotro Suit & Tie",
      precio: 11180,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "",
      img: "https://basketworld.com/27407-large_default/curry-4-flotro-suit-tie.jpg",
    },
  ];

  
  export const getProductos = () => {
    return new Promise ((res) => {
      res(productos);
    });
  };