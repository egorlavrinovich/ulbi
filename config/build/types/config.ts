export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
