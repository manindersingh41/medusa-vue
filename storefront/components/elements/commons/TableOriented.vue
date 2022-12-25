<template>
    <table class="table ps-table ps-table--oriented">
        <tbody>
            <tr v-for="(item, index) in dataList" :key="index">
                <th class="ps-table__th">{{ item.title }}</th>
                <td>{{ item.text }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'tavle-oriented',
    props: {
        dataList: {
            type: Array,
            default: () => []
        }
    }
}
</script>
