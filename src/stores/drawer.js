import { defineStore } from "pinia";

export const useDrawer = defineStore('drawer', {
    state: () => {
        return {
            isOpen: false
        }
    },
    actions: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        }
    }
})