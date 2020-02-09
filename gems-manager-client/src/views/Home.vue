<template>
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
</template>

<script>

    export default {
        name: 'home',
        components: {}
    }
</script>
