import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [".ts", ".tsx", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            "@": options.paths.src,
            "@app": `${options.paths.src}/app`,
            "@entities": `${options.paths.src}/entities`,
            "@features": `${options.paths.src}/features`,
            "@pages": `${options.paths.src}/pages`,
            "@shared": `${options.paths.src}/shared`,
            "@widgets": `${options.paths.src}/widgets`,
        }
    }
}