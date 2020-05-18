<template>
    <div class="v-table-presence-header-cell">
        <p class="v-table-presence-header-cell__name">{{ subject.subject }}</p> 
    </div>
</template>

<script>
    export default {
        name: 'v-table-presence-header-cell',
        props: ['subject']
    }
</script>

<style>
    .v-table-presence-header-cell {
        display: flex;
        justify-content: flex-end;
        border: 1px solid silver;
        height: 180px;
        max-width: 50px;
        min-width: 50px;
        transform: rotate(180deg);
        /* overflow: hidden; */
    }
    .v-table-presence-header-cell__name {
        writing-mode: vertical-rl;
        font-family: 'Open Sans';
        font-size: 14px;
        padding-top: 5px;
        /* border: 1px solid black; */
        margin: 0 0;
    }
</style>