declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVICE_PORT: string;
    }
  }
}
