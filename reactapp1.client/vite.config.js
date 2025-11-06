import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Adicionando a configuração de proxy para redirecionar chamadas de API
        proxy: {
            // Quando o Front-end chamar /api (ex: /api/Cadastro/subscribe),
            // o Vite redireciona para o Back-end C# na porta 5158.
            '/api': {
                target: 'http://localhost:5158', // Porta HTTP do seu Back-end C#
                changeOrigin: true, // Necessário para simular que é a mesma origem
                secure: false, // Desabilita verificações SSL (útil já que estamos usando HTTP no Back-end)
            },
        },
    },

})
