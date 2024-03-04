export type BuildMode = "development" | "production";

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    port: number;
    isDev: boolean;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
