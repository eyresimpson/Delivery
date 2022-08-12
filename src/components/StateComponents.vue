<template>
    <div>
        <el-result :title="title">
            <template #icon>
                <el-icon :size="iconSize" :color="iconColor">
                    <Lollipop />
                </el-icon>
            </template>
            <template #sub-title>
                <p>{{info}}</p>
            </template>
        </el-result>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
    title: String,
    icon:String,
    iconColor:String,
    iconSize: String,
    info: String
});
</script>

<style>
</style>