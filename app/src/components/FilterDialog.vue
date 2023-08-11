<template>
    <v-dialog
        v-model="$store.state.showFilterDialog"
    >
        <v-card class="pb-3">
            <v-card-title>
                Apply filters
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col 
                            cols="6"
                            v-for="filter of filters"
                            :key="filter.id"
                        >
                            <v-select
                                deletable-chips
                                chips
                                dense
                                outlined
                                :label="filter.label"
                                :items="filter.availableFilters"
                                v-model="filter.appliedFilters"
                                multiple
                            >

                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="error" @click="hideFilterDialog">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="applyFilters">Apply</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'FilterDialog',
    data() {
        return {
            filters: [
                {
                    id: 0,
                    label: 'Colour',
                    apiKey: 'color',
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
                    apiKey: 'gender',
                    availableFilters: [
                    'Men',
                    'Women',
                    ],
                    appliedFilters: [],
                },
                {
                    id: 2,
                    label: 'Price',
                    apiKey: 'price',
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
                    apiKey: 'type',
                    availableFilters: [
                    'Polo',
                    'Hoodie',
                    'Basic',
                    ],
                    appliedFilters: [],
                },
            ],
        };
    },
    methods: {
        ...mapActions([
            'hideFilterDialog',
        ]),
        applyFilters() {
            this.$store.dispatch('applyFilters', this.filters);
            this.hideFilterDialog();
        },
    },
}
</script>