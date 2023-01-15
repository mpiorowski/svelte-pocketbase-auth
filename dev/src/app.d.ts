// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import Pocketbase from "pocketbase";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            pb: Pocketbase
            user: {
                email: string
                id: string
            } | null
        }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
