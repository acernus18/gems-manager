<template>
    <div class="layout">
        <Layout>
            <Header/>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
                        <MenuGroup title="Manager">
                            <menu-item name="1" to="/">Table</menu-item>
                            <menu-item name="2" to="/converter">Converter</menu-item>
                            <menu-item name="3" to="/about">About</menu-item>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                    <Footer :style="{textAlign: 'center'}">2011-2016 &copy; Maples</Footer>
                </Layout>
            </Layout>
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
</style>
