<template>
    <v-dialog max-width="400" v-model="$store.state.showDeletionConfirmationModal">
        <v-card class="pa-4 pb-6">
            <v-card-title class="justify-center">Confirm deletion</v-card-title>
            <v-card-text class="text-center">
                Do you want to remove this item from the cart?
            </v-card-text>
            <v-card-actions>
                <v-btn text color="primary" @click="cancel()">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="deleteItem(id)">Yes, delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'CheckoutDeleteItemConfirmation',
    props: [
        'id',
    ],
    methods: {
        cancel() {
            this.$store.dispatch('hideDeletionConfirmationModal');
        },
        deleteItem(id) {
            this.$store.dispatch('decreaseQuantity', id - 1);
            this.$store.dispatch('hideDeletionConfirmationModal');
        },
    },
}
</script>