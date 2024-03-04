import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // исп. для абсолютного импорта
        modules: [options.paths.src, 'node_modules'], // путь к папке src и node_modules, нужен для импорта
        mainFiles: ['index'], // основной файл откуда идёт импорт
        alias: {} // импорт без лишних символов в начале, типа @ и т.д.
    }
}
