<template>
    <v-dialog
        v-model="$store.state.showFilterDialog"
    >
        <v-card>
            <v-card-title>
                Apply filters
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>

                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Apply</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'FilterDialog',
    filters: [
        {
            id: 0,
            label: 'Colour',
            availableFilters: [
                'Red',
                'Blue',
                'Green',
            ],
            appliedFilters: [],
        },
        {
            id: 1,
            label: 'Gender',
            availableFilters: [
                'Men',
                'Women',
            ],
            appliedFilters: [],
        },
        {
            id: 2,
            label: 'Price',
            availableFilters: [
                '< ₹250',
                '₹250 - ₹450',
                '> ₹450',
            ],
            appliedFilters: [],
        },
        {
            id: 3,
            label: 'Type',
            availableFilters: [
                'Polo',
                'Hoodie',
                'Basic',
            ],
            appliedFilters: [],
        },
    ],
}
</script>