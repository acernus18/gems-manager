<template>
    <Card>
        <p slot="title">查询销售记录</p>
        <div v-if="isResult">
            <Collapse simple>
                <Panel  v-for="item in searchResult" :key="item.id">
                    {{item["gem_name"]}}
                    <p slot="content">
                        <List>
                            <ListItem>销售时间 {{item["sold_time"]}}</ListItem>
                            <ListItem>克拉价格 {{item["gem_unit_price"]}}</ListItem>
                            <ListItem>销售总价 {{item["gem_total_price"]}}</ListItem>
                            <ListItem>实销金额 {{item["gem_real_price"]}}</ListItem>
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
                let data = await DataRequester.QuerySalesRecords(this.searchKey, this.searchValue);
                this.searchResult = data["value"];
                this.isResult = true;
            }
        }
    }
</script>

<style scoped>

</style>