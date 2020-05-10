<template>
    <div class="layout">
        <Layout>
            <GemsHeader/>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>首页</BreadcrumbItem>
                    <BreadcrumbItem>销售</BreadcrumbItem>
                    <BreadcrumbItem>销售记录工具</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <Form>
                        <FormItem label="转换为CSV文件">
                            <Button type="primary" @click="exportToCSV">选择文件</Button>
                        </FormItem>
                    </Form>
                </Card>
            </Content>
            <GemsFooter/>
        </Layout>
    </div>
</template>

<script>
    import GemsFooter from "../../components/GemsFooter";
    import GemsHeader from "../../components/GemsHeader";
    import ExcelUtils from "../../utilities/ExcelUtils";
    import CommonUtils from "../../utilities/CommonUtils";
    import BusinessUtils from "../../utilities/BusinessUtils";

    export default {
        name: "ImportSales",
        components: {GemsFooter, GemsHeader},
        methods: {
            exportToCSV: async function() {
                let file = await CommonUtils.OpenFileSelector();
                let excelData = await ExcelUtils.LoadExcelToJSON(file);
                let data = BusinessUtils.ReadSalesRecords(excelData);
                BusinessUtils.ExportSalesRecordsToCSV(data);
            }
        }
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