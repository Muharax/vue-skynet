<template>
    <div class="geometry loaded">
        <div class="menu">
            <div v-for="(items, category) in categories" :key="category" class="category">
                <div class="category-title" @click="toggle(category)">{{ category }}</div>
                <div v-show="isActive(category)" class="items">
                    <div v-for="item in items" :key="item.name"
                        @click="() => selectItem(item.name, item.componentName, item.path)" class="item">{{ item.name }}
                    </div>

                </div>
            </div>
        </div>
        <div class="component">
            <component :is="selectedComponent"></component>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, defineAsyncComponent, shallowRef } from 'vue';

interface GeometryItem {
    name: string;
    componentName: string;
    path: string;
}

const categories = ref<Record<string, GeometryItem[]>>({
    '2D': [
        { name: 'Kwadrat', componentName: 'Square', path: '2D' },
        { name: 'Koło', componentName: 'Circle', path: '2D' },
    ],
    '3D': [
        { name: 'Sześcian', componentName: 'Cube', path: '3D' },
        { name: 'Kula', componentName: 'Sphere', path: '3D' },
    ],
    // W przyszłości możesz dodać więcej kategorii, np.:
    // 'Advanced': [
    //     { name: 'Torus', componentName: 'Torus', path: 'Advanced' },
    // ],
});

const activeCategory = ref<string | null>(null);
// Używamy shallowRef zamiast ref
const selectedComponent = shallowRef(null);

const toggle = (category: string) => {
    activeCategory.value = activeCategory.value === category ? null : category;
};

const isActive = (category: string) => {
    return activeCategory.value === category;
};

const selectItem = (itemName: string, componentName: string, path: string) => {
    selectedComponent.value = defineAsyncComponent(() =>
        import(`./${path}/${componentName}.vue`)
    );
};

</script>


<style scoped>
.component {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.component>div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.geometry {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-title {
    border: 1px solid #ddd;
    padding: 10px 20px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    text-align: left;
    width: 100%;
}

.category-title:hover {
    background-color: #29ab91;
}

.items-dropdown {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.item {
    padding: 8px 20px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
}

.item:hover {
    background-color: var(--primary);
}

.component-wrapper {
    margin-top: 20px;
}
</style>
