<template>
    <Layout>
        <Menu mode="horizontal" theme="light" active-name="2">
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
                    <Cell title="总价" :extra="total"></Cell>
                </CellGroup>
            </Card>
            <div style="margin-bottom: 10px">
                <Table size="small" :columns="tableColumns" :data="tableData"></Table>
            </div>
            <div style="text-align: center">
                <Form inline>
                    <FormItem>
                        <label>
                            <InputNumber placeholder="重量" v-model="weight"/>
                        </label>
                    </FormItem>
                    <FormItem>
                        <label>
                            <InputNumber placeholder="单价" v-model="unit"/>
                        </label>
                    </FormItem>
                    <FormItem>
                        <Button icon="md-add-circle" @click="add">添加</Button>
                    </FormItem>
                </Form>
            </div>
        </Content>
    </Layout>
</template>

<script>
    export default {
        name: "MobileOrderCalculator",
        data() {
            return {
                tableColumns: [
                    {
                        type: 'index',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: "重量",
                        key: "weight",
                        align: 'center'
                    },
                    {
                        title: "单价",
                        key: "unit",
                        align: 'center'
                    },
                    {
                        title: "价格",
                        key: "total",
                        // align: '',
                        width: 100,
                        // tooltip: true,
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('Button', {
                                props: {
                                    type: "error",
                                    size: 'small',
                                    icon: "md-close",
                                    ghost: true,
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index);
                                    }
                                }
                            });
                        }
                    }
                ],
                tableData: [],
                weight: null,
                unit: null,
            };
        },
        methods: {
            add: function () {
                if (this.weight === null || this.unit === null) {
                    this.$Message.error("未正确输入信息!");
                    return;
                }

                this.tableData.push({
                    weight: this.weight,
                    unit: this.unit,
                    total: (this.unit * this.weight).toFixed(2),
                });
                this.weight = null;
                this.unit = null;
            },
            remove: function (index) {
                if (confirm("确认删除 " + (index + 1) + " 号吗?")) {
                    this.tableData.splice(index, 1);
                }
            }
        },
        computed: {
            total: function () {
                let temp = this.tableData
                    .map(x => parseFloat(x["total"]))
                    .reduce((a, c) => a + c, 0);
                return temp.toFixed(2).toString();
            }
        },
    }
</script>

<style scoped>

</style>