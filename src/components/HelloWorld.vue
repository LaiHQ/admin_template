<template>
    <div>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>

        <button class="button" type="button" @click="count++">
            count is: {{ count }}
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<style scoped lang="less">
.button {
    color: #42b983;
    &:hover {
        color: red;
    }
}
</style>
