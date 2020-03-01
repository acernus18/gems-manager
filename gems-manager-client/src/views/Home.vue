<template>
    <div v-if="isMobile">
        <Layout>
            <Header style="margin-bottom: 10px"/>
            <Content style="padding: 10px;background: #f8f8f9">
                <Card style="margin-bottom: 10px">
                    <CellGroup>
                        <Spin v-if="loading"></Spin>
                        <!--<Cell v-else title="服务器状态" extra="serverStatus" />-->
                        <Row>
                            <i-col span="8">服务器状态</i-col>
                            <i-col span="4" offset="12">{{serverStatus}}</i-col>
                        </Row>
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
    import DataRequester from "../utilities/DataRequester";

    export default {
        components: {MobileSearchForm, GemsFooter, GemsHeader},
        data: function () {
            return {
                serverStatus: false,
                loading: false,
            };
        },
        mounted: function () {
            this.checkServer();
        },
        methods: {
            checkServer: async function () {
                this.loading = true;
                let result = await DataRequester.QueryServerStatus();
                this.serverStatus = result === "success" ? "在线" : "离线";
                this.loading = false;
            }
        },
        computed: {
            isMobile: () => CommonUtils.DetectMobile(),
        },
    }
</script>
