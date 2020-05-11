<template>
    <Layout>
        <Menu mode="horizontal" theme="light" active-name="1">
            <menu-item name="1" to="/mobile/sales/search">
                <Icon type="ios-paper"/>
                订单查询
            </menu-item>
            <menu-item name="2" to="/mobile/orders/calculator">
                <Icon type="ios-people"/>
                开单计算器
            </menu-item>
        </Menu>
        <Content style="padding: 10px;background: #f8f8f9">
            <Card style="margin-bottom: 10px">
                <CellGroup>
                    <Spin v-if="loading"/>
                    <Row v-else>
                        <i-col span="8">服务器状态</i-col>
                        <i-col span="4" offset="12">{{serverStatus}}</i-col>
                    </Row>
                </CellGroup>
            </Card>
            <Card>
                <p slot="title">查询销售记录</p>
                <div v-if="isResult">
                    <Collapse simple>
                        <Panel v-for="item in searchResult" :key="item.id">
                            {{item["weight"]}}ct
                            {{item["sold_to"].length > 5 ? item["sold_to"].substr(0, 5) + "..." : item["sold_to"]}}
                            {{item["unit_price"]}}/ct
                            <p slot="content">
                                <List>
                                    <ListItem>
                                        <strong>名称：</strong>
                                        <span>{{item["gem_info"]}}</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong>重量：</strong>
                                        <span>{{item["weight"]}}</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong>实销金额：</strong>
                                        <span>{{item["real_price"]}}</span>
                                    </ListItem>
                                    <ListItem>
                                        <strong>销售时间：</strong>
                                        <span>{{item["sold_time"]}}</span>
                                    </ListItem>
                                </List>
                            </p>
                        </Panel>
                    </Collapse>
                </div>
                <div v-else>
                    <Form label-position="top">
                        <FormItem label="查询方式">
                            <label>
                                <Select v-model="searchKey">
                                    <Option value="gemID">石号</Option>
                                    <Option value="client">客户</Option>
                                </Select>
                            </label>
                        </FormItem>
                        <FormItem label="查询信息">
                            <label>
                                <Input v-model="searchValue" placeholder="请输入查询信息"/>
                            </label>
                        </FormItem>
                        <Button type="primary" @click="search" long>提交</Button>
                    </Form>
                </div>
            </Card>
        </Content>
    </Layout>
</template>

<script>
    import DataRequester from "../../utilities/DataRequester";

    export default {
        name: "MobileSearchSales",
        components: {},
        data: function () {
            return {
                serverStatus: false,
                loading: false,
                searchKey: "",
                searchValue: "",
                searchResult: [],
                isResult: false,
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
            },
            search: async function () {
                this.$Message.info("正在查询");
                this.searchResult = await DataRequester.QuerySalesRecords(this.searchKey, this.searchValue);
                this.isResult = true;
            }
        },
    }
</script>

<style scoped>

</style>