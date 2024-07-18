// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { Buffer as BufferPolyfill } from "buffer";
declare global {
  interface Buffer extends BufferPolyfill {}
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
