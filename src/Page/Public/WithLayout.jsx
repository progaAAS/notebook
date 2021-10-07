import React from "react"
import { Route } from "react-router-dom"

function WithLayout ( {Layout, AuthComponent, ...rest}){
    return (
        <Route{...rest}>
            <Layout>
                <AuthComponent/>
            </Layout>
        </Route>
    );
}

export default WithLayout;