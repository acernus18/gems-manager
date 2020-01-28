<template>
    <Row>
        <i-col span="6">
            <Button>Download Template</Button>
        </i-col>
        <i-col span="6">
            <Upload action="" :before-upload="open">
                <Button icon="ios-cloud-upload-outline">Convert</Button>
            </Upload>
        </i-col>
    </Row>
</template>

<script>
    import CommonUtils from "../utilities/CommonUtils.js";
    import BusinessUtils from "../utilities/BusinessUtils.js";

    export default {
        name: "Converter",
        methods: {
            open: function (file) {
                CommonUtils.LoadExcelToJSON(file, data => {
                    this.$Message.info("Start to convert file");
                    let result = BusinessUtils.ConvertPurchaseOrder(data[0]);
                    this.$Message.success("Success");
                    CommonUtils.ExportJSONToExcel(result);
                });
            },
        }
    }
</script>

<style scoped>

</style>