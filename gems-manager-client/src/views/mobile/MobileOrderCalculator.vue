<template>

    <Layout>
        <Menu mode="horizontal" theme="light" active-name="2">
            <menu-item name="1">
                <Icon type="ios-paper"/>
                订单查询
            </menu-item>
            <menu-item name="2">
                <Icon type="ios-people"/>
                开单计算器
            </menu-item>
        </Menu>
        <Content style="padding: 10px;background: #f8f8f9">
            <Card style="margin-bottom: 10px">
                <Table :columns="tableColumns" :data="tableData"></Table>
            </Card>
        </Content>
    </Layout>
</template>

<script>
    export default {
        name: "MobileOrderCalculator",
        data() {
            return {
                tableColumns: [
                    {
                        title: "序号",
                        key: "id",
                    },
                    {
                        title: "重量",
                        key: "weight",
                    },
                    {
                        title: "克拉价",
                        key: "unit",
                    },
                    {
                        title: "价格",
                        key: "total",
                    },
                ],
                tableData: [],
            };
        },
    }
</script>

<style scoped>

</style>