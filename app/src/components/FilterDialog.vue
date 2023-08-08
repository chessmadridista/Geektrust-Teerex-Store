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
                <v-btn color="primary">Apply</v-btn>
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
        };
    },
    methods: {
        ...mapActions([
            'hideFilterDialog',
        ]),
    },
}
</script>