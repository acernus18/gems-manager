<template>
    <div>
        <Card style="margin: 0 0 10px 0">
            <p slot="title">提货单操作</p>
            <Button class="margin-right" icon="ios-download-outline" @click="importDataFromExcel">
                从Excel表格中导入提货单
            </Button>
            <Button icon="ios-download-outline" @click="exportDataToExcel">
                导出百智慧导入文件
            </Button>
        </Card>

        <Card>
            <p slot="title">提货单编辑</p>
            <a slot="extra" @click="check">Check</a>
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

    export default {
        components: {
            HotTable
        },
        methods: {
            check: function () {
                window.console.log(this.tableData);
            },
            importDataFromExcel: function () {
                CommonUtils.OpenFileSelector(file => {
                    CommonUtils.LoadExcelToJSON(file, data => {
                        this.tableData = BusinessUtils.ReadPurchaseRecords(data);
                    });
                });
            },
            exportDataToExcel: function () {
                let records = this.tableData.slice(0, this.tableData.length - 1);

                if (records.length > 0) {
                    CommonUtils.ExportJSONToExcel(BusinessUtils.WritePurchaseOrder(records));
                } else {
                    this.$Message.info("There are nothing to export");
                }
            }
        },
        data: function () {
            return {
                tableData: [["", "", "", "", "", "", "", ""]],
                settings: {
                    rowHeaders: true,
                    colHeaders: ["石号", "石名称", "石数", "石编码", "石重", "供货商", "证书类别", "销售价"],
                    height: 300,
                    minSpareRows: 1,
                    stretchH: "all",
                    manualColumnResize: true,
                    licenseKey: "non-commercial-and-evaluation",
                }
            };
        },

    }
</script>

<!--<style src="handsontable/dist/handsontable.full.css"></style>-->
<style>
    .margin-right {
        margin-right: 10px;
    }
</style>