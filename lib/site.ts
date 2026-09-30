// Datos del negocio: todo lo que se muestra en la web sale de aqui.
// Solo informacion confirmada por Compumac.

export const WHATSAPP = "51938246236"
export const PHONE_DISPLAY = "938 246 236"
export const PHONE_TEL = "+51938246236"
export const ADDRESS = "Av. Loreto 461, Piura"
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Av.+Loreto+461,+Piura,+Peru"
export const MAPS_EMBED = "https://www.google.com/maps?q=Av.+Loreto+461,+Piura,+Peru&output=embed"
export const FACEBOOK = "https://www.facebook.com/Compumac.piura/"
export const INSTAGRAM = "https://www.instagram.com/compumac.piura/"
export const SITE_URL = "https://compumacperu.com"
export const FOUNDED = 2004

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
      "No enciende o no carga",
      "Pantalla rota o sin imagen",
      "Teclado o touchpad que falla",
      "Lenta, con virus o para formatear",
      "Se calienta o hace ruido",
      "Mejora a disco SSD y más RAM",
    ],
    quickProblems: [
      "No enciende o no carga",
      "Pantalla rota o sin imagen",
      "Teclado o touchpad",
      "Lenta o con virus",
      "Se calienta o hace ruido",
      "Mejora a SSD o más RAM",
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

export const BRANDS = ["Epson", "HP", "Canon", "Brother", "Lenovo", "Dell", "Asus", "Acer", "Apple"]

export const FAQS = [
  {
    q: "¿Cuánto cuesta el diagnóstico?",
    a: "Es gratis. Revisamos tu equipo y te damos el presupuesto sin compromiso.",
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
