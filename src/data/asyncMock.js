export const productos = [
  {
    id: 1,
    marca: "Nike",
    modelo: "Giannis Inmortality",
    precio: 8500,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Zapatillas inspiradas en Giannis Antetokounmpo, combinan estilo y rendimiento en la cancha.",
    img: "https://m.media-amazon.com/images/I/51j6D5JXmGL._AC_SL1100_.jpg",
  },
  {
    id: 2,
    marca: "Adidas",
    modelo: "Harden Stepback 3",
    precio: 13000,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Diseñadas para el juego rápido de James Harden, ofrecen gran tracción y comodidad.",
    img: "https://m.media-amazon.com/images/I/71-JOvINmYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    marca: "Under_Armor",
    modelo: "Curry Flow Cozy",
    precio: 8900,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Comodidad y rendimiento superior, perfectas para emular el juego de Stephen Curry.",
    img: "https://m.media-amazon.com/images/I/6184L3hdBBL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    marca: "Nike",
    modelo: "Kyrie Flyptrap",
    precio: 9900,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Rendimiento y estilo únicos, diseñadas para el juego impredecible de Kyrie Irving.",
    img: "https://www.tradeinn.com/f/13747/137471968_3/nike-zapatillas-baloncesto-kyrie-flytrap-iii.jpg",
  },
  {
    id: 5,
    marca: "Adidas",
    modelo: "Trae Young",
    precio: 14900,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Zapatillas exclusivas de Trae Young, combinan soporte y agilidad para un juego explosivo.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoi_Ax__druEfAwEhjRHlXYp1LmA8h_hcIw&s",
  },
  {
    id: 6,
    marca: "Nike",
    modelo: "Air More UpTempo Olympic",
    precio: 16800,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Modelo clásico con diseño olímpico, ideales para un look retro y un rendimiento excepcional.",
    img: "https://media.gq.com.mx/photos/661d996d647fe71d91f2d5d4/master/w_1600%2Cc_limit/Nike_Air_More_Uptempo_Olympic_zapato_izquierdo.jpg",
  },
  {
    id: 7,
    marca: "Nike",
    modelo: "Kevin Durant 14",
    precio: 15400,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Último modelo de la línea de Kevin Durant, diseñadas para máximo confort y soporte.",
    img: "https://i.ebayimg.com/images/g/Y~4AAOSwJChk0E~F/s-l2400.jpg",
  },
  {
    id: 8,
    marca: "Nike",
    modelo: "Giannis Immortality 3",
    precio: 17990,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Nueva generación del calzado de Giannis, ofrece mayor amortiguación y soporte.",
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2026451d/products/NIDZ7533-600/NIDZ7533-600-2.JPG",
  },
  {
    id: 9,
    marca: "Adidas",
    modelo: "D.O.N Issue",
    precio: 12290,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Zapatillas de rendimiento de Donovan Mitchell, ideales para agilidad y velocidad en la cancha.",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdabccd1d/products/ADH67719/ADH67719-2.JPG",
  },
  {
    id: 10,
    marca: "Adidas",
    modelo: "Dame Certified 2",
    precio: 13480,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Diseñadas para Damian Lillard, combinan estilo moderno y gran rendimiento.",
    img: "https://m.media-amazon.com/images/I/71VerzEzvOL.jpg",
  },
  {
    id: 11,
    marca: "Under_Armor",
    modelo: "Curry 11 Champion Mindset",
    precio: 15690,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Para el estilo ganador de Stephen Curry, ofrecen soporte y durabilidad excepcionales.",
    img: "https://basketworld.com/27194-large_default/curry-11-champion-mindset.jpg",
  },
  {
    id: 12,
    marca: "Under_Armor",
    modelo: "Curry 4 Flotro Suit & Tie",
    precio: 11180,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "Elegancia y rendimiento con el Curry 4, ideales para un juego rápido y preciso.",
    img: "https://basketworld.com/27407-large_default/curry-4-flotro-suit-tie.jpg",
  },
  {
    id: 13,
    marca: "361°",
    modelo: "AG3 Pro High Reflection Edition",
    precio: 7990,
    categoria: "Zapatillas",
    talle: "10",
    stock: 5,
    descripcion: "El producto estrella de 361 grados, se inspira en el concepto taoísta del yin y el yang. Con el diseño de la parte superior y la suela divididos según la lógica de movimiento de Aaron Gordon",
    img: "https://capaccionideportes.com.ar/46620-thickbox_default/361-ag3-pro-high-reflection-edition.jpg",
  },
];


  
  export const getProductos = () => {
    return new Promise ((res) => {
      setTimeout(() => {
        res(productos);
      }, 1500);
    });
  };

  export const getProductsByMarca = (mark) => {
    return new Promise ((res) => {
      const productosFiltrados = productos.filter ((prod) => prod.marca === mark)
      setTimeout(() => {
        res(productosFiltrados);
      }, 1500);
    })
  }

  export const getProductById = (id) => {
    return new Promise ((res) => {
      const productoFiltrado = productos.find ((prod) => prod.id === parseInt(id))
      setTimeout(() => {
        res(productoFiltrado)
      }, 1500);
    })
  }