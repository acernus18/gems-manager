<template>
    <div class="layout" v-if="!isMobile">
        <Layout>
            <GemsHeader/>
            <Content :style="{padding: '0 50px'}">
                <div class="home">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>Dashboard</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <p slot="title">欢迎使用GemsManager系统</p>
                        <p></p>
                    </Card>
                </div>
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
    import GemsHeader from "../components/GemsHeader";
    import GemsFooter from "../components/GemsFooter";
    import CommonUtils from "../utilities/CommonUtils";

    export default {
        components: {GemsFooter, GemsHeader},
        data: function () {
            return {};
        },
        mounted: function () {
            if (this.isMobile) {
                this.$route.push("/mobile/sales/search");
            }
        },
        computed: {
            isMobile: function () {
                return CommonUtils.DetectMobile();
            }
        }
    }
</script>
