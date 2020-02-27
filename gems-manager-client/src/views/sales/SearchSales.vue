<template>
    <div class="layout">
        <Layout>
            <GemsHeader/>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>首页</BreadcrumbItem>
                    <BreadcrumbItem>销售</BreadcrumbItem>
                    <BreadcrumbItem>销售记录查询</BreadcrumbItem>
                </Breadcrumb>
                <SalesSearchTable/>
            </Content>
            <GemsFooter/>
        </Layout>
    </div>
</template>

<script>
    import GemsHeader from "../../components/GemsHeader";
    import GemsFooter from "../../components/GemsFooter";
    import SalesSearchTable from "../../components/SalesSearchTable";

    export default {
        components: {SalesSearchTable, GemsFooter, GemsHeader},
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>