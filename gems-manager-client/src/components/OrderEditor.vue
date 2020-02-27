<template>
    <div>
        <Card style="margin: 0 0 10px 0">
            <p slot="title">提货单操作</p>
            <Button style="margin-right: 10px" icon="ios-download-outline" @click="importDataFromExcel">
                从Excel表格中导入提货单
            </Button>
            <Button style="margin-right: 10px" icon="ios-download-outline" @click="exportPurchaseOrder">
                保存提货单
            </Button>
            <Button icon="ios-download-outline" @click="exportDataToExcel">
                导出百智慧导入文件
            </Button>
        </Card>
        <Card>
            <p slot="title">提货单编辑</p>
            <a slot="extra" @click="save" style="margin-right: 20px">保存</a>
            <a slot="extra" @click="clear">清空</a>
            <p>
                <hot-table :data="tableData" :settings="settings"></hot-table>
            </p>
        </Card>
    </div>
</template>

<script>
    import HotTable from '@handsontable/vue';
    import CommonUtils from "../utilities/CommonUtils";
    import BusinessUtils from "../utilities/BusinessUtils";
    import ExcelUtils from "../utilities/ExcelUtils";

    const TABLE_DATA_KEY = "tableData";

    export default {
        components: {
            HotTable,
        },
        mounted: function () {
            if (localStorage.getItem(TABLE_DATA_KEY) !== null) {
                this.tableData = JSON.parse(localStorage.getItem(TABLE_DATA_KEY));
            } else {
                this.tableData = [["", "", "", "", "", "", "", ""]];
            }
        },
        methods: {
            save: function () {
                localStorage.setItem(TABLE_DATA_KEY, JSON.stringify(this.tableData));
                this.$Message.success("保存成功");
            },
            clear: function () {
                this.tableData = [["", "", "", "", "", "", "", ""]];
                localStorage.removeItem(TABLE_DATA_KEY);
                this.$Message.success("清空成功");
            },
            importDataFromExcel: async function () {
                let file = await CommonUtils.OpenFileSelector();
                let data = await ExcelUtils.LoadExcelToJSON(file);
                this.tableData = BusinessUtils.ReadPurchaseRecords(data);
                this.$Message.success("导入成功");
            },
            exportDataToExcel: function () {
                let records = this.tableData.slice(0, this.tableData.length - 1);

                if (records.length > 0) {
                    ExcelUtils.ExportJSONToExcel(BusinessUtils.WritePurchaseOrder(records));
                } else {
                    this.$Message.info("There are nothing to export");
                }
            },
            exportPurchaseOrder: function () {
                ExcelUtils.ExportJSONToExcel(BusinessUtils.ExportPurchaseOrder(this.tableData));
            }
        },
        data: function () {
            return {
                tableData: [["", "", "", "", "", "", "", ""]],
                settings: {
                    rowHeaders: true,
                    colHeaders: ["石号", "石名称", "石数", "石编码", "石重", "供货商", "证书类别", "销售价"],
                    height: "58vh",
                    minSpareRows: 1,
                    stretchH: "all",
                    manualColumnResize: true,
                    licenseKey: "non-commercial-and-evaluation",
                }
            };
        },
    }
</script>