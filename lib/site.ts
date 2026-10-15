// Datos del negocio: todo lo que se muestra en la web sale de aqui.
// Solo informacion confirmada por Compumac.

// Numero de la empresa (el mismo del Perfil de Empresa en Google), para llamadas y WhatsApp.
export const WHATSAPP = "51935065145"
export const PHONE_DISPLAY = "935 065 145"
export const PHONE_TEL = "+51935065145"
export const ADDRESS = "Jr. Huánuco 804, Piura"
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Jr.+Hu%C3%A1nuco+804,+Piura,+Peru"
export const MAPS_EMBED = "https://www.google.com/maps?q=Jr.+Hu%C3%A1nuco+804,+Piura,+Peru&output=embed"
export const FACEBOOK = "https://www.facebook.com/Compumac.piura/"
export const INSTAGRAM = "https://www.instagram.com/compumac.piura/"
export const SITE_URL = "https://compumacperu.com"
export const FOUNDED = 2004

// Perfil de Empresa en Google. La nota y el numero de resenas se actualizan a mano.
export const GOOGLE_RATING = "4.9"
export const GOOGLE_REVIEWS = 27
export const GOOGLE_PROFILE_URL = "https://www.google.com/maps/search/?api=1&query=Compumac+Jr.+Hu%C3%A1nuco+804+Piura"

export const LAPTOP_PAGE = "/reparacion-de-laptops"
export const STORE_PAGE = "/tienda"

// Productos de la tienda. Sin precios: se consultan por WhatsApp.
export const STORE_CATEGORIES = [
  {
    key: "laptops",
    title: "Laptops y computadoras",
    text: "Laptops, computadoras de escritorio y todo en uno para casa, estudios u oficina. Dinos para qué la necesitas y te recomendamos modelos.",
    message: "Hola Compumac, quiero consultar precios de laptops y computadoras.",
    cta: "Consultar laptops",
  },
  {
    key: "impresoras",
    title: "Impresoras",
    text: "Impresoras para casa, colegio o negocio. Te ayudamos a elegir la que conviene según cuánto imprimes.",
    message: "Hola Compumac, quiero consultar precios de impresoras.",
    cta: "Consultar impresoras",
  },
  {
    key: "tintas",
    title: "Tintas y cartuchos",
    text: "Tintas y cartuchos para tu impresora. Escríbenos la marca y el modelo, y te decimos qué tenemos.",
    message: "Hola Compumac, quiero consultar tintas o cartuchos. Mi impresora es:",
    cta: "Consultar tintas",
  },
  {
    key: "accesorios",
    title: "Accesorios de cómputo",
    text: "Mouse, teclados, cargadores, discos, memorias, cables y más. Pregunta por lo que necesites.",
    message: "Hola Compumac, quiero consultar un accesorio de cómputo.",
    cta: "Consultar accesorios",
  },
] as const

export function whatsappLink(text?: string) {
  return `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`
}

// Minutos desde medianoche, hora de Lima. 0 = domingo.
export const SCHEDULE: Record<number, [number, number] | null> = {
  0: null,
  1: [540, 1200],
  2: [540, 1200],
  3: [540, 1200],
  4: [540, 1200],
  5: [540, 1200],
  6: [540, 840],
}

export const HOURS_ROWS = [
  { label: "Lunes a viernes", value: "9:00 a. m. – 8:00 p. m.", days: [1, 2, 3, 4, 5] },
  { label: "Sábado", value: "9:00 a. m. – 2:00 p. m.", days: [6] },
  { label: "Domingo", value: "Cerrado", days: [0] },
]

export type DeviceKey = "impresora" | "laptop" | "pc"

export const DEVICES: Record<
  DeviceKey,
  {
    label: string
    title: string
    brandsText: string
    photo: string
    photoAlt: string
    repairs: string[]
    quickProblems: string[]
    brands: string[]
    modelPlaceholder: string
  }
> = {
  impresora: {
    label: "Impresora",
    title: "Impresoras",
    brandsText: "Epson, HP, Canon y Brother",
    photo: "/img/fotos/impresora.webp",
    photoAlt: "Interior de una impresora con sus cartuchos de tinta",
    repairs: [
      "No imprime o sale en blanco",
      "Atasco o no jala el papel",
      "Rayas, manchas o faltan colores",
      "Luces parpadeando o error de almohadillas",
      "Limpieza de cabezales",
      "Mantenimiento preventivo",
    ],
    quickProblems: [
      "No imprime o sale en blanco",
      "Atasco o no jala el papel",
      "Rayas, manchas o faltan colores",
      "Luces parpadeando o error",
      "Limpieza de cabezales",
      "Mantenimiento",
      "Otro problema",
    ],
    brands: ["Epson", "HP", "Canon", "Brother"],
    modelPlaceholder: "Modelo (ej. L3250)",
  },
  laptop: {
    label: "Laptop",
    title: "Laptops",
    brandsText: "HP, Lenovo, Dell, Asus, Acer y MacBook",
    photo: "/img/fotos/laptop.webp",
    photoAlt: "Manos reparando una laptop abierta con un destornillador",
    repairs: [
      "No prende para nada o no carga",
      "Se le cayó agua, café u otro líquido",
      "Pantalla rota o sin imagen",
      "Teclado o touchpad que falla",
      "Lenta, con virus o para formatear",
      "Se calienta o hace ruido",
      "Mejora a disco SSD y más RAM",
      "Recuperación de información de laptops dañadas",
    ],
    quickProblems: [
      "No prende para nada",
      "Se le cayó líquido",
      "Pantalla rota o sin imagen",
      "Teclado o touchpad",
      "Lenta o con virus",
      "Se calienta o hace ruido",
      "Mejora a SSD o más RAM",
      "Recuperar mi información",
      "Otro problema",
    ],
    brands: ["HP", "Lenovo", "Dell", "Asus", "Acer", "Apple (MacBook)"],
    modelPlaceholder: "Modelo (ej. IdeaPad 3)",
  },
  pc: {
    label: "Computadora",
    title: "Computadoras",
    brandsText: "PCs de escritorio, todo en uno e iMac",
    photo: "/img/fotos/computadora.webp",
    photoAlt: "Torre de computadora de escritorio abierta",
    repairs: [
      "No enciende o se reinicia sola",
      "Pantallazo azul o errores de Windows",
      "Formateo e instalación de programas",
      "Cambio de fuente, disco o memoria",
      "Limpieza y mantenimiento",
      "Mejoras para que vaya más rápido",
    ],
    quickProblems: [
      "No enciende o se reinicia",
      "Pantallazo azul o errores",
      "Formateo e instalación",
      "Cambio de piezas",
      "Limpieza y mantenimiento",
      "Está muy lenta",
      "Otro problema",
    ],
    brands: ["HP", "Lenovo", "Dell", "Asus", "Acer", "Apple (iMac)", "PC armada"],
    modelPlaceholder: "Modelo (opcional)",
  },
}

// Preguntas de la pagina de laptops.
export const LAPTOP_FAQS = [
  {
    q: "¿Cuánto cuesta reparar mi laptop?",
    a: "Depende de la falla y del repuesto. Primero hacemos el diagnóstico gratis y te damos el presupuesto; reparamos solo si estás de acuerdo.",
  },
  {
    q: "¿Cuánto demora la reparación?",
    a: "Muchas reparaciones quedan listas el mismo día. Si hace falta un repuesto, te decimos el tiempo exacto junto con el presupuesto.",
  },
  {
    q: "Se mojó mi laptop, ¿qué hago?",
    a: "Apágala de inmediato, desconecta el cargador y no intentes prenderla para ver si funciona. Tráela lo antes posible: el líquido sigue dañando la placa con las horas.",
  },
  {
    q: "¿Pueden recuperar la información de mi laptop dañada?",
    a: "Sí, recuperamos información (fotos, documentos y archivos) de laptops dañadas, que no prenden o que se mojaron. En el diagnóstico gratis revisamos el disco y te decimos qué se puede recuperar y cuánto cuesta.",
  },
  {
    q: "¿Reparan MacBook?",
    a: "Sí. Reparamos MacBook y laptops HP, Lenovo, Dell, Asus y Acer.",
  },
  {
    q: "¿La reparación tiene garantía?",
    a: "Sí, nuestras reparaciones tienen garantía. Consulta el plazo según el tipo de reparación.",
  },
  {
    q: "¿Cuál es su horario?",
    a: "De lunes a viernes de 9:00 a. m. a 8:00 p. m., y los sábados de 9:00 a. m. a 2:00 p. m. Estamos en Jr. Huánuco 804, Piura.",
  },
]

export const BRANDS =["Epson", "HP", "Canon", "Brother", "Lenovo", "Dell", "Asus", "Acer", "Apple"]

export const FAQS = [
  {
    q: "¿Cuánto cuesta el diagnóstico?",
    a: "Es gratis. Revisamos tu equipo y te damos el presupuesto sin compromiso.",
  },
  {
    q: "¿Reparan laptops a las que se les cayó agua?",
    a: "Sí. Apágala de inmediato, desconecta el cargador y no intentes prenderla para probar. Tráela lo antes posible: la revisamos gratis y te decimos cuánto cuesta repararla.",
  },
  {
    q: "Mi laptop no prende para nada, ¿la pueden reparar?",
    a: "Sí, aunque no prenda ninguna luz ni cargue. La revisamos a fondo hasta encontrar la falla y te damos el presupuesto sin compromiso.",
  },
  {
    q: "¿Cuánto demora una reparación?",
    a: "Muchas reparaciones quedan listas el mismo día. El tiempo exacto depende de la falla y de los repuestos, y te lo decimos junto con el presupuesto.",
  },
  {
    q: "¿Las reparaciones tienen garantía?",
    a: "Sí, nuestras reparaciones tienen garantía. Consulta el plazo según el tipo de reparación.",
  },
  {
    q: "¿Qué marcas reparan?",
    a: "Impresoras Epson, HP, Canon y Brother; laptops y computadoras HP, Lenovo, Dell, Asus y Acer; y equipos Apple (MacBook e iMac).",
  },
  {
    q: "¿Atienden a empresas?",
    a: "Sí. Damos mantenimiento y reparamos los equipos de oficinas, colegios y negocios. Escríbenos y te enviamos una cotización a medida.",
  },
  {
    q: "¿Cuál es su horario?",
    a: "De lunes a viernes de 9:00 a. m. a 8:00 p. m., y los sábados de 9:00 a. m. a 2:00 p. m.",
  },
]
