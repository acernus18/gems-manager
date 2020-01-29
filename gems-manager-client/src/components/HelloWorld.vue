<template>
    <div>
        <Table border :columns="tableColumns" :data="tableData"/>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data: function () {
            return {
                tableColumns: [
                    {
                        title: "Name",
                        key: "name",
                    },
                    {
                        title: "Age",
                        key: "age",
                    },
                    {
                        title: "Address",
                        key: "address",
                    },
                    {
                        title: "Action",
                        key: "action",
                        align: "center",
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        },
                    },
                ],
                tableData: [],
            };
        },

        methods: {
            loadTableData: function () {
                this.$Message.info("Loading Table");

                // Utilities.httpRequest({
                //     method: "GET",
                //     url: "/health/query",
                //     success: data => {
                //         if (data["errorCode"] === 200) {
                //             this.tableData = data["value"];
                //         }
                //         this.$Message.success("Success");
                //     }
                // });

                this.tableData = [
                    {
                        "name": "maples",
                        "age": 123,
                        "address": "test",
                    }
                ];
            },
        },

        mounted: function () {
            this.loadTableData();
        },
    }
</script>

<style scoped>

</style>