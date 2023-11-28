<template>
    <div>
        <Menubar :model="items" style="margin: 0;">
            <template #start>
                <router-link class="no-underline" to="/">
                    <img :src="pokeball" alt="pokeball" style="margin-right: 10px; margin-left: 10px;" />
                </router-link>
            </template>
            <template #item="{ item, props, root }">
                <a v-if="item.target" class="flex align-items-center p-menuitem-link" :href="item.path" target="_blank">
                        <span :class="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <badge-component v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                </a>
                <router-link v-else class="no-underline" :to="`${item.path}`">
                    <a class="flex align-items-center" v-bind="props.action">
                        <span :class="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <badge-component v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    </a>
                </router-link>
            </template>
        </Menubar>
        <slot></slot>
    </div>
</template>
<script>
import { ref } from 'vue'
import pokeball from '../assets/svg/pokeball.svg'
import Menubar from 'primevue/menubar'

export default {
    name: "main-layout",
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
                    label: 'Types',
                    icon: 'pi pi-star',
                    path: '/types'
                },
                {
                    label: 'Marco CV',
                    icon: 'pi pi-external-link',
                    path: 'https://marco.laradex.com/',
                    target: '_black'
                }
            ])
        }
    },
    components:{
        Menubar,
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
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content {
    color: #fcffff;
    background: #D32F2F;
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #fcffff;
    background: #D32F2F;
}
</style>