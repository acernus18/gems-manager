<template>
    <div class="layout">
        <Layout>
            <Header>
                <Row align="middle" justify="end">
                    <i-col>
                        <Menu mode="horizontal" active-name="1" theme="dark">
                            <menu-item name="1" to="/">Table</menu-item>
                            <menu-item name="2" to="/about">Converter</menu-item>
                            <Submenu name="3">
                                <template slot="title">
                                    提货
                                </template>
                                <MenuGroup title="编辑">
                                    <menu-item name="3-1" to="/order/editor">提货单编辑</menu-item>
                                    <menu-item name="3-2">提货单管理</menu-item>
                                </MenuGroup>
                            </Submenu>
                        </Menu>
                    </i-col>
                </Row>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <router-view/>
            </Content>
            <Footer class="footer">2011-2016 &copy; Maples</Footer>
        </Layout>
    </div>
</template>

<style>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .content {
        padding: 24px;
        min-height: 280px;
        background: #fff;
    }

    .footer {
        text-align: center;
    }
</style>
