/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
  readonly VITE_PUBLIC_URL: string;
  readonly VITE_REACT_APP_BASE_HOST: string;
  readonly VITE_REACT_APP_ASSETS_BUCKET: string;
  readonly VITE_ESLINT_NO_DEV_ERRORS: boolean;
  readonly VITE_TSC_COMPILE_ON_ERROR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
