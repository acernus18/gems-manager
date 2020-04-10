<template>
    <Layout>
        <Menu mode="horizontal" theme="light" active-name="2">
            <menu-item name="1">
                <Icon type="ios-paper" />
                订单查询
            </menu-item>
            <menu-item name="2">
                <Icon type="ios-people" />
                开单计算器
            </menu-item>
        </Menu>
        <Content style="padding: 10px;background: #f8f8f9">
            <Card style="margin-bottom: 10px">
                <MobileOrderCalculator/>
            </Card>
        </Content>
</template>

<script>
    import MobileOrderCalculator from "../../components/MobileOrderCalculator";
    export default {
        name: "SalesUtilities",
        components: {MobileOrderCalculator}
    }
</script>

<style scoped>

</style>