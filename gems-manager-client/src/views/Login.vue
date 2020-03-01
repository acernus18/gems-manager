<template>
    <Layout>
        <Header style="margin-bottom: 10px"/>
        <Content style="padding: 10px;background: #f8f8f9">
            <Card style="margin-bottom: 10px">
                <Form label-position="top">
                    <FormItem label="登录名">
                        <label>
                            <Input v-model="username"/>
                        </label>
                    </FormItem>
                    <FormItem label="密码">
                        <label>
                            <Input type="password" v-model="password"/>
                        </label>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="login" long>登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </Content>
    </Layout>
</template>

<script>
    import DataRequester from "../utilities/DataRequester";

    export default {
        name: "Login",
        data() {
            return {
                "origin": "/",
                "username": null,
                "password": null,
            };
        },
        methods: {
            async login() {
                let result = await DataRequester.Login(this.username, this.password);

                if (result.length === 0) {
                    this.$Message.error("登录失败");
                    this.username = null;
                    this.password = null;
                } else {
                    await this.$router.push("/");
                }
            }
        }
    }
</script>

<style scoped>

</style>