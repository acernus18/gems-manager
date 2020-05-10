<template>
    <Header>
        <Row align="middle" type="flex" :gutter="16">
            <i-col>
                <a href="/"><h1>GemsManager系统</h1></a>
            </i-col>
            <i-col>
                <Menu mode="horizontal" active-name="1" theme="dark">
                    <Submenu name="1">
                        <template slot="title">
                            订单管理
                        </template>
                        <MenuGroup title="编辑">
                            <menu-item name="1-1" to="/order/editor">提货单编辑</menu-item>
                            <menu-item name="1-2">提货单管理</menu-item>
                        </MenuGroup>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            销售管理
                        </template>
                        <MenuGroup title="查询">
                            <menu-item name="2-1" to="/sales/search">销售记录查询</menu-item>
                            <menu-item name="2-2" to="/sales/import">导入销售记录</menu-item>
                        </MenuGroup>
                        <MenuGroup title="工具">
                            <menu-item name="2-3">销售单计算器</menu-item>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </i-col>
        </Row>
    </Header>
</template>

<script>
    export default {
        name: "GemsHeader"
    }
</script>

<style scoped>

</style>