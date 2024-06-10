import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: '../build', // Especifica el directorio de salida para los archivos generados
//     assetsDir: 'images', // Especifica el directorio de salida para los archivos estáticos (como imágenes)
//     manifest: true, // Genera un archivo manifest.json para la caché de archivos
//     rollupOptions: {
//       input: './public/index.html' // Especifica la ruta correcta hacia el archivo index.html
//     }
//   }
// })
