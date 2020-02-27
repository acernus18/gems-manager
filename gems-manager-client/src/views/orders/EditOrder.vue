<template>
    <div class="layout">
        <Layout>
            <GemsHeader/>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>首页</BreadcrumbItem>
                    <BreadcrumbItem>提货</BreadcrumbItem>
                    <BreadcrumbItem>提货单编辑</BreadcrumbItem>
                </Breadcrumb>
                <OrderEditor/>
            </Content>
            <GemsFooter/>
        </Layout>
    </div>
</template>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>

<script>
    import GemsHeader from "../../components/GemsHeader";
    import GemsFooter from "../../components/GemsFooter";
    import OrderEditor from "../../components/OrderEditor";

    export default {
        components: {OrderEditor, GemsFooter, GemsHeader},
    }
</script>