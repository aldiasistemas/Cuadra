// =====================================================
// Cuadra · configuración. Es el ÚNICO archivo que tienes que editar.
// =====================================================
window.CUADRA = {
  // Supabase → Project Settings → API → "Project URL" y "anon public key"
  SUPABASE_URL: 'https://yrkivekvhxiigjwvwnjv.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_Yiw5qf0bZs0Fef4ajpBf3w_xVFlByNY',

  // Precio y cobro
  PRECIO_MES: 1500,          // en colones, por mes
  DIAS_PRUEBA: 14,           // debe coincidir con el "+ 14" del archivo supabase.sql

  // Pago por SINPE Móvil
  SINPE_NUMERO: '8599-4415',
  SINPE_NOMBRE: '',          // opcional: el nombre del titular del SINPE, para que la gente confirme a quién le paga
  WHATSAPP: '50685994415',   // para el comprobante. Con 506 al inicio, sin espacios ni guiones
  MARCA: 'Al Día Sistemas',

  // Correo de contacto (aparece en la página de privacidad)
  CORREO_CONTACTO: 'aldiasistemascr@gmail.com'
};
