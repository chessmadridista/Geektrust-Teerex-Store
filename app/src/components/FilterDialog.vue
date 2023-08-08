<template>
    <v-dialog
        v-model="$store.state.showFilterDialog"
    >
        <v-card>
            <v-card-title>
                Apply filters
            </v-card-title>
            <v-card-text>
                
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'FilterDialog',
}
</script>