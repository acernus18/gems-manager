<template>
    <Card>
        <p slot="title">查询销售记录</p>
        <div v-if="isResult">
            <Collapse simple>
                <Panel  v-for="item in searchResult" :key="item.id">
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
</template>

<script>
    import DataRequester from "../utilities/DataRequester";

    export default {
        name: "MobileSearchForm",
        data: function () {
            return {
                searchKey: "",
                searchValue: "",
                searchResult: [],
                isResult: false,
            }
        },
        methods: {
            search: async function () {
                this.$Message.info("正在查询");
                this.searchResult = await DataRequester.QuerySalesRecords(this.searchKey, this.searchValue);
                this.isResult = true;
            }
        }
    }
</script>

<style scoped>

</style>