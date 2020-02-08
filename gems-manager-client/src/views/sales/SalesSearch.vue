<template>
    <div>
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>销售</BreadcrumbItem>
            <BreadcrumbItem>销售记录查询</BreadcrumbItem>
        </Breadcrumb>
        <Card style="margin: 0 0 10px 0">
            <p slot="title">提货单操作</p>
            <label>
                <Select class="gap" v-model="model1">
                    <Option value="gemID">石号</Option>
                    <Option value="client">客户</Option>
                </Select>
            </label>
            <label>
                <Input class="gap" v-model="value" placeholder="Enter something..."/>
            </label>
            <Button>查询</Button>
        </Card>
        <Table border :columns="tableColumns" :data="tableData"/>
    </div>
</template>

<script>
    export default {
        name: "SalesSearch"
    }
</script>

<style scoped>
    .gap {
        width: 10%;
        margin-right: 10px;
    }
</style>