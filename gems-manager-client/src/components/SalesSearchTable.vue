<template>
    <div>
        <Card style="margin: 0 0 10px 0">
            <p slot="title">提货单操作</p>
            <label>
                <Select class="gap" v-model="key">
                    <Option value="gemID">石号</Option>
                    <Option value="client">客户</Option>
                </Select>
            </label>
            <label>
                <Input class="gap" v-model="value" placeholder="请输入查询信息"/>
            </label>
            <Button @click="search">查询</Button>
        </Card>
        <Table :loading="loading" border :columns="tableColumns" :data="tableData"/>
    </div>
</template>

<script>
    import DataRequester from "../utilities/DataRequester";

    export default {
        name: "SalesSearchTable",
        data: function () {
            return {
                loading: false,
                key: "gemID",
                value: "",
                tableColumns: [
                    {
                        title: "销售时间",
                        key: "sold_time",
                    },
                    {
                        title: "石号",
                        key: "gem_id",
                    },
                    {
                        title: "石名称",
                        key: "gem_name",
                    },
                    {
                        title: "石重",
                        key: "gem_weight",
                    },
                    {
                        title: "客户",
                        key: "sold_to",
                    },
                    {
                        title: "克拉价",
                        key: "gem_unit_price",
                    },
                    {
                        title: "实销价格",
                        key: "gem_real_price",
                    }
                ],
                tableData: [],
            }
        },
        methods: {
            search: async function () {
                this.loading = true;
                let data = await DataRequester.QuerySalesRecords(this.key, this.value);
                this.tableData = data["value"];
                this.loading = false;
            }
        },
    }
</script>

<style scoped>
    .gap {
        width: 10%;
        margin-right: 10px;
    }
</style>