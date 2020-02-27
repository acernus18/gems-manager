<template>
    <div v-if="isMobile">
        <Layout>
            <Header style="margin-bottom: 10px"/>
            <Content style="padding: 10px;background: #f8f8f9">
                <Card style="margin-bottom: 10px">
                    <CellGroup>
                        <Cell title="服务器状态" extra="在线"/>
                    </CellGroup>
                </Card>
                <MobileSearchForm/>
            </Content>
        </Layout>
    </div>
    <div v-else>
        <div class="layout">
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
    import MobileSearchForm from "../components/MobileSearchForm";

    export default {
        components: {MobileSearchForm, GemsFooter, GemsHeader},
        data: () => {
            return {
                test: "",
            };
        },
        computed: {
            isMobile: () => CommonUtils.DetectMobile(),
        }
    }
</script>
