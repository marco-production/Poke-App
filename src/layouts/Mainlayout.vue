<template>
    <div>
        <Menubar :model="items" style="margin: 0;">
            <template #start>
                <router-link class="no-underline" to="/">
                    <img :src="pokeball" alt="pokeball" style="margin-right: 10px; margin-left: 10px;" />
                </router-link>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <router-link class="no-underline" :to="`${item.path}`">
                    <a v-ripple class="flex align-items-center" v-bind="props.action">
                        <span :class="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut"
                            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                            }}</span>
                        <i v-if="hasSubmenu" :class="[
                            'pi pi-angle-down text-primary',
                            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
                        ]"></i>
                    </a>
                </router-link>
            </template>
        </Menubar>
    </div>
</template>
<script>
import { ref } from 'vue'
import pokeball from '../assets/svg/pokeball.svg'

export default {
    data() {
        return {
            pokeball,
            items: ref([
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    path: '/'
                },
                {
                    label: 'Categories',
                    icon: 'pi pi-star'
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-envelope',
                    badge: 3
                }
            ])
        }
    }
}
</script>
<style>
body {
    margin: 0 !important;
}

.p-menubar {
    padding: 0.5rem;
    background: #D32F2F;
    color: #495057;
    border: 1px solid #D32F2F;
    border-radius: 3px;
}

.p-menubar:hover {
    padding: 0.5rem;
    background: #D32F2F;
    color: #495057;
    border: 1px solid #D32F2F;
    border-radius: 3px;
}

.p-menubar .p-menuitem>.p-menuitem-content .p-menuitem-link {
    color: #fcffff;
    padding: 0.75rem 1rem;
    user-select: none;
}

.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
    color: #fcffff;
    background: #c02929;
}</style>