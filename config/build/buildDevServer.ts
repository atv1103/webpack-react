import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevSServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,

        // hot reload настройки для Docker
        hot: true, // включить горячую перезагрузку
        host: '0.0.0.0', // Для Docker контейнера (0.0.0.0 позволяет подключаться из любого адреса)
        allowedHosts: 'all',
        watchFiles: {
            paths: ['src/**/*'], // наблюдать за изменениями в папке src
            options: {
                usePolling: true, // использовать polling (подходит для Docker)
                interval: 500, // интервал проверки изменений
            }
        },
        liveReload: true, // перезагрузка при изменении файлов
        client: {
            overlay: true, // отображение ошибок в браузере
            webSocketURL: {
                hostname: 'localhost',
                pathname: '/ws',
                port: options.port
            }
        },
    }
}